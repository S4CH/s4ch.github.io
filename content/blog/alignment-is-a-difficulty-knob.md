+++
title = 'Alignment Is a Difficulty Knob'
date = '2026-10-10T00:00:00Z'
author = 's4ch'
description = 'We built deliberately hackable AI targets. Then a safer model made one unsolvable, and a reasoning model made another fail closed. In AI CTFs, the model is part of the challenge.'
summary = 'Same box, same exploit, same prompt: 0/3 on one 7B model, 3/3 on another. Why every AI security lab needs its model pinned like a container digest.'
slug = 'alignment-is-a-difficulty-knob'
draft = false
categories = ['blog']
tags = ['ai-security', 'llm', 'prompt-injection', 'ctf', 'inference']
showtoc = true
ShowReadingTime = true
+++

We run deliberately vulnerable "AI boxes": full VMs where an LLM-powered component is part of the attack surface. In a typical one, an internal ops assistant has a secret in its context, and your job is to talk it into leaking that secret. It's prompt injection as a skill you practice, not a slide in a deck.

The boxes worked fine on the box author's machine. On our platform, one of them was quietly impossible to solve. The cause wasn't a bug in the box. It was the model.

## The plumbing was fine, and that was the trap

First I checked the boring layer. The box ships its own verifier, a set of gate cases that ask the model to approve or deny infrastructure actions. I ran it against our inference gateway and got **6/6 correct**, in about three seconds.

At that point most people would call inference "working." In the narrow sense it was: requests in, sensible answers out.

Then I ran the actual solve path, the secret leak, with three different injection techniques:

| Model (same box, same prompts) | Leaks | Box state |
|---|---|---|
| qwen2.5:7b | **0 / 3** | unsolvable |
| mistral:7b | **3 / 3** | solvable |

Same size class, same box, same attacker. One model refused every time and the other leaked every time. N=3 isn't a benchmark, but 0/3 against 3/3 is a large enough gap to act on.

The box's own metadata had already said so. Its compatibility notes classed the first model as *"function compatible but too safe"*: it ran the control loop correctly and never failed open. Boxes get tuned against a specific model generation. Newer and bigger models are more aligned, so they leak less, and the box becomes unwinnable.

In an AI security lab, alignment is a difficulty knob, and you don't own that knob unless you pin it.

## Pin the model like you pin an image

The fix was operational, not clever. Each box now declares its model next to its image, and the gateway routes by model name, so a model swap is a config change, not a VM rebuild. (A model tag is still mutable, so the next step is pinning by weight hash, the same lesson container people learned about `:latest`.)

From there it was a small step to model difficulty explicitly: the backend now lets a box map tiers to different models, with a smaller, less aligned model for *easy* and a more safety-tuned one for *hard*. Each tier still needs its own measured leak rate before that label means anything, but it turns an embarrassing failure ("the box is broken") into a design axis: graded difficulty on one box, without writing a second box.

## The serving stack found three more ways to break the game

Then the boxes moved to newer, thinking-capable models behind a compatibility shim and an OpenAI-style serving layer. None of these bugs crashed anything. Each one silently changed the outcome of a challenge.

**1. A token budget became a security decision.** The gate prompts asked for `think: false` and a small `num_predict` (128–256 tokens) so they'd be fast and cheap. Our shim silently dropped the `think` field, so the model thought anyway and spent the whole budget reasoning and returned an empty answer. The gate failed closed and said **DENY**. With `think: false` the same model answered "DENY" in three tokens for the right reasons. Same verdict, completely different cause, and only one of them is the intended difficulty.

**2. The answer was filed in the wrong field.** When a request didn't specify `think` at all, the server put the model's real answer into `reasoning_content` and left `content` empty. The box saw an empty reply. We fixed both: the shim now passes `think` through, and when `think` was unset and generation finished cleanly, it recovers the answer from the reasoning field.

**3. Tool calls arrived as prose.** Agentic boxes rely on structured tool calls. The serving template had the wrong tool-call parser for the model family, so tool calls came back as XML text in the message body and the box's agent loop never ran them. Separately, the shim choked on replayed tool-result history and returned 500s mid-conversation. To a player, both look like "the AI is being weird." Both are server-side parsing bugs that change whether the challenge can be solved.

On top of that, serverless GPUs have cold starts of two to five minutes, which is longer than a player waits before deciding the box is broken. So the platform now wakes a box's model *at spawn*, in parallel with the VM boot, which hides most of that cold start. Not all of it: a few minutes of idle and the worker goes cold again mid-session, and that problem is still open.

## Steal this

- **"Inference works" and "the challenge is solvable" are separate tests.** Run both, and treat the second one as the release gate.
- **The model is part of the challenge.** Pin the exact model and its sampling settings (temperature, seed, `think`) per box and per tier. Changing any of them changes what you shipped.
- **Measure solvability as a rate.** Run k injection attempts per (box, model, tier) and record the leak rate. Rerun on every model, gateway, or shim change, because a "harmless" upgrade can quietly turn a box from 3/3 into 0/3.
- **Audit your compatibility layer field by field.** `think`, `format`, sampling options, reasoning versus content, the tool parser: any field that gets dropped or misfiled changes the outcome without raising an error.
- **Budget for cold starts.** Pre-warm the model at spawn, or players will give up before your GPU ever loads.

Here's the part I can't fix with config: as models get safer, AI security training gets harder to *build*, because the vulnerability you're teaching depends on a model behavior the industry is actively training away. If you want reproducible AI security exercises, you have to version the model's willingness to fail, not just the code around it.
