---
title: "Novel approach to tackle UAF Bugs in the Linux Kernel"
date: 2024-09-15T06:30:05Z
draft: false
categories: ["research"]
tags: ["linux-kernel", "memory-management", "uaf", "vulnerability-mitigation", "allocators"]
summary: "Analysis of dedicated bucket allocators as a novel mitigation technique for use-after-free vulnerabilities in the Linux kernel."
---

Hi, kernel and sec enthusiasts! It's been a while since my last post(2022), but I've got something juicy for you today. We are going to dive into an exciting new proposal that aims to bolster the Linux kernel's defenses against those persistent use-after-free (UAF) vulnerabilities. Grab your favorite beverage or drink(Try Amul Kool once, Thank me later), because we're about to get our hands dirty with some kernel internals!

## The Persistent Threat of UAF Vulnerabilities

If you've been in the low-level security for a while, you're probably sick of hearing about UAF vulnerabilities. But for those who need a refresher, UAFs occur when a program continues to use a pointer to memory after it's been freed. This can lead to all sorts of fun exploitation scenarios, especially in kernel-land where the stakes are highest.

The tricky thing about UAFs is that they're not just a coding error – they're a fundamental weakness in how we manage memory. And in the Linux kernel, where performance is king and memory management is complex, they've been a persistent thorn in our side.

## Dedicated Bucket Allocators

Recently, Kees Cook (if you're not following his work, you should be) proposed a new mitigation technique that's got me pretty excited. The core idea? Dedicated bucket allocators for sensitive kernel subsystems.

Now, I know what you're thinking, Another allocator? Didn't we just get done with SLUB?

The basic idea is to create isolated pools of memory for specific kernel subsystems, especially those that deal with user-controlled data. 
By segregating these allocations, we make it much harder for attackers to reliably exploit UAF bugs through techniques like heap spraying or type confusion attacks.

Let's look at the core of this new API:

```
struct kmem_buckets {
    struct kmem_cache *caches[ARRAY_SIZE(kmalloc_caches[KMALLOC_NORMAL])];
};

// function to create kmem_buckets object
// takes name, align, flags, offset, size and a constructor function
struct kmem_buckets *
kmem_buckets_create(const char *name, unsigned int align, slab_flags_t flags,
                    unsigned int useroffset, unsigned int usersize,
                    void (*ctor)(void *))
{
    struct kmem_buckets *b;  // pointer to our kmem_buckets object
    int idx;

    // allocate memory for kmem_buckets and zero it out
    b = kmem_cache_alloc(kmem_buckets_cache, GFP_KERNEL|__GFP_ZERO);
    
    // check if allocation failed, and warn if it did
    if (WARN_ON(!b))
        return NULL;  // bail out if no memory

    // loop through the kmalloc_caches array
    for (idx = 0; idx < ARRAY_SIZE(kmalloc_caches[KMALLOC_NORMAL]); idx++) {
        char *short_size, *cache_name;
        unsigned int size;

        // skip empty cache slots
        if (!kmalloc_caches[KMALLOC_NORMAL][idx])
            continue;

        // get the object size from the current cache
        size = kmalloc_caches[KMALLOC_NORMAL][idx]->object_size;
        if (!size)
            continue;  // if size is 0, move on

        // find the '-' in the cache name to separate it out
        short_size = strchr(kmalloc_caches[KMALLOC_NORMAL][idx]->name, '-');
        
        // if no '-' found, something's weird, so bail
        if (WARN_ON(!short_size))
            goto fail;

        // create a new cache name like "name-suffix"
        cache_name = kasprintf(GFP_KERNEL, "%s-%s", name, short_size + 1);
        
        // check if name creation failed
        if (WARN_ON(!cache_name))
            goto fail;

        // create the actual kmem cache and store it
        b->caches[idx] = kmem_cache_create_usercopy(cache_name, size,
                    align, flags, useroffset,
                    min(size - useroffset, usersize), ctor);
        
        // free the temporary cache_name string
        kfree(cache_name);
        
        // if cache creation failed, warn and bail
        if (WARN_ON(!b->caches[idx]))
            goto fail;
    }

    // all good, return the bucket pointer
    return b;

fail:
    // something broke, cleanup any created caches
    for (idx = 0; idx < ARRAY_SIZE(kmalloc_caches[KMALLOC_NORMAL]); idx++) {
        if (b->caches[idx]) {
            // free the cache name and destroy the cache
            kfree(b->caches[idx]->name);
            kmem_cache_destroy(b->caches[idx]);
        }
    }

    // free the bucket itself and return NULL to indicate failure
    kfree(b);

    return NULL;
}
```

What's happening here is that we're creating a whole set of caches, mirroring the usual kmalloc sizes, but dedicated to a specific use case. It's like giving each subsystem its own private kmalloc pool.

## Putting It to Work

So where might we use this shiny new toy? Kees's patch set targets a few juicy areas:

1. **IPC Message Queues**: The `msg_msg` structure has been a favorite target for exploits. By giving it its own memory bucket, we make it a lot harder to pull off the kind of tricks that have made it so exploitable in the past.

2. **Extended Attributes (xattr)**: The xattr syscalls have been another common vector for attacks, largely because they involve user-controlled allocation sizes. Isolating these allocations adds an extra layer of protection.

3. **User Memory Duplication**: The `memdup_user()` function, used in various syscalls including `prctl()`, is another area where attackers have found something to play with. Again, dedicated buckets to the rescue.

Here's a snippet of how it looks in practice, for the xattr case:

```
static __always_inline __alloc_size(2)
void *kmem_buckets_alloc(struct kmem_buckets *b, size_t size, gfp_t flags)
{
    unsigned int index;

    // if the size is too big for normal caches, fall back to large kmalloc
    if (size > KMALLOC_MAX_CACHE_SIZE)
        return kmalloc_large(size, flags);
    
    // warn if bucket is null, bail early if it is
    if (WARN_ON_ONCE(!b))
        return NULL;

    // get the cache index for the given size
    index = kmalloc_index(size);
    
    // warn once if the cache for the index is missing, and just use kmalloc as a fallback
    if (WARN_ONCE(!b->caches[index],
                  "missing cache for size %zu (index %d)\n", size, index))
        return kmalloc(size, flags);

    // use the cache if everything checks out and trace the allocation
    return kmalloc_trace(b->caches[index], flags, size);
}
```

## The Good, The Bad, and The Grey or geeky

Now, I love a good security enhancement as much as the next paranoid sysadmin, but let's talk about the implications of this approach.

**The Good:**
- It makes exploiting UAFs significantly harder by isolating potential targets.
- It's a relatively simple concept that builds on existing kernel mechanisms.
- It allows for fine-grained control over memory allocation patterns.

**The Bad:**
- There's potential for increased memory fragmentation.
- It adds another layer of complexity to the kernel's already complex memory management.
- There might be a performance hit (though likely minimal).

**The Grey:**
For those of us who love to tinker around, this opens up some interesting possibilities. Imagine combining this with memory tagging or even more aggressive randomization techniques. The possibilities for frustrating attackers are endless!

## Wrapping Up

So there you have it, folks. A new approach in our ongoing efforts against UAF vulnerabilities. Is it a silver bullet? Of course not. But it's a clever approach that addresses a fundamental weakness in how we've been managing memory.

What I really love about this proposal is how it showcases the ongoing innovation in kernel security. We're not just patching individual vulnerabilities; we're rethinking core mechanisms to make the entire system more resilient.

For those of you who want to dig deeper, I highly recommend reading Kees's full patch set. And if you're feeling adventurous, why not try implementing this in your own kernel modules? There's no better way to understand kernel security than by getting your hands dirty.

Until next time, see yaa!

## References
[Introduce dedicated bucket allocator by Kees Cook](https://lore.kernel.org/lkml/202403041502.28477148C0@keescook/T/)

***P.S.*** If any of you manage to break this new allocator in an interesting way, drop me a line on [X](https://www.x.com/cy5un/) or [discord](https://discord.com/users/346443596641075200)
