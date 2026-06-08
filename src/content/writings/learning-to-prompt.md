---
title: "learning to prompt"
description: "short note on training an LLM to write better prompts"
pubDate: 2026-05-28
tags: ["agents", "rl", "prompting"]
---

- as we become more and more agent driven, we need to make LLMs write better prompts for other LLMs (subagents, task handoff etc)
- one way to know if your prompt is good (atleast in current day and age) is to see if it works across different model classes
- the model which is executing on a task gets some rewards based on the environment
- we can run n different models and get rewards for each, using the same fixed prompt
- now what if i make a model write this prompt and reward it as a function of each executor model's rewards (receiving the model generated prompt as input)
- it gets better at writing robust prompts with training
- something like: 
$$
R_{\text{total}}
=
\alpha \cdot \operatorname{mean}_{m \in Models}(R_m)
+
(1 - \alpha) \cdot \min_{m \in Models}(R_m)
$$

- feels like i am missing something? Apart from the cost ofcourse
