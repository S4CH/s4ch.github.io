+++
title = 'A Safer Model Made Our CTF Box Unsolvable'
date = '2026-10-10T00:00:00Z'
author = 's4ch'
description = 'Deliberately vulnerable AI boxes, and how the choice of model, the token budget and the serving layer decide whether they can be solved.'
summary = 'Same box, same prompts: qwen2.5:7b leaked the secret 0 times out of 3, mistral:7b 3 out of 3. Then a dropped think field made a gate fail closed for the wrong reason.'
slug = 'safer-model-made-ctf-box-unsolvable'
aliases = ['/blog/alignment-is-a-difficulty-knob/']
draft = false
categories = ['blog']
tags = ['ai-security', 'llm', 'prompt-injection', 'ctf', 'inference']
showtoc = true
ShowReadingTime = true
+++

The box's own verifier passed 6 of 6. Inference was "working." And no player could solve the box.

We run deliberately vulnerable "AI boxes": full VMs where an LLM-powered component is part of the attack surface. In this one, an internal ops assistant holds a secret in its context, and the intended solve is to talk it into leaking that secret. The box worked on its author's machine. On our platform it was quietly impossible.

## Same box, different model

The verifier only checked the boring layer: gate cases asking the model to approve or deny infrastructure actions. It got all six right in about three seconds. So I ran the actual solve path, the leak, with three injection techniques:

| Model (same box, same prompts) | Leaks | Box state |
|---|---|---|
| qwen2.5:7b | 0 / 3 | unsolvable |
| mistral:7b | 3 / 3 | solvable |

Same size class, same box, same attacker. Three trials per model is a small sample, but 0 against 3 was a decisive enough split to act on, and it matched what the box author had independently written in the box's compatibility notes: the first model is *"function compatible but too safe."* It ran the control loop correctly and never failed open.

That inverts how most prompt-injection games are built. [Gandalf](https://gandalf.lakera.ai/)-style challenges hold the model fixed and make levels harder by adding defenses. [Tensor Trust](https://arxiv.org/abs/2311.01011) showed that injection robustness varies a lot between models. In a vulnerable-by-design box, that variance *is* the difficulty, and it moves every time someone upgrades the model. Newer models are trained harder against exactly the behavior the box teaches, so an upgrade can turn a solvable box unsolvable without anyone touching the box.

## The model is part of the challenge

So each box now declares its model next to its image, and the gateway routes by model name. Swapping models is a config change, not a VM rebuild. A model tag is still mutable, so the next step is pinning by weight hash, the same lesson container people learned about `:latest`.

The backend also lets a box map difficulty tiers to different models: a smaller, less aligned model for *easy* and a more safety-tuned one for *hard*. The same exploit chain then plays differently depending on how hard the model resists. Each tier needs its own measured leak rate before the label means anything, but a model you can't control becomes a difficulty setting you can.

## The serving layer moves the knob too

When the boxes moved to newer thinking-capable models behind our compatibility shim, three bugs changed challenge outcomes without crashing anything:

- **A token budget became a security decision.** Gate prompts asked for `think: false` and 128–256 tokens. The shim silently dropped `think`, so the model reasoned anyway, spent the whole budget, returned nothing, and the gate failed closed with DENY. With `think: false` honored, the same model said DENY in three tokens for the right reasons. Same verdict, but only one of those is the intended difficulty.
- **The answer landed in the wrong field.** With `think` unset, the server put the real answer in `reasoning_content` and left `content` empty: the [`reasoning_content` split](https://docs.vllm.ai/en/latest/features/reasoning_outputs.html) that reasoning parsers produce, which a client expecting plain chat never reads. The box saw an empty reply. The shim now passes `think` through and recovers the answer when generation finished cleanly.
- **Tool calls arrived as prose.** vLLM picks its [tool-call parser](https://docs.vllm.ai/en/latest/features/tool_calling.html) per model family. Ours was configured for the wrong family, so tool calls came back as XML text and the box's agent loop never ran them.

To a player, all three look like "the AI is being weird." Each one decides whether the box can be solved.

Cold starts are the last piece. Serverless GPUs took two to five minutes to wake, longer than a player waits before deciding the box is broken. The platform now wakes a box's model at spawn, in parallel with the VM boot. That hides most of it, though a few idle minutes still put the worker back to sleep mid-session.

## What I'd tell anyone building AI security labs

Treat "inference works" and "the box is solvable" as two separate release gates, and measure the second one as a leak rate per model and tier. Rerun it on every model, shim or gateway change. Audit the compatibility layer field by field, because a dropped `think` flag changed outcomes more than any prompt did.

The part I can't fix with config: as models get safer, this kind of training gets harder to build, because the vulnerability being taught depends on a behavior the industry is actively training away. Reproducible AI security exercises need the model's willingness to fail versioned, not just the code around it.
