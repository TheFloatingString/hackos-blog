---
title: HackOS 2
date: 2024/11/09
description: 12-hour ARC AGI hacakthon
tag: ARC AGI
author: You
---

### ARC Prize!

We realized that ARC Prize was right around the corner, so we decided to host a 12-hour hackathon to try to beat the ARC AGI benchmark. For the first ~8 hours, we were struggling with 2-3% accuracy - though then attained ~12% accuracy on a subset with just hours left in the hackathon - all the details below!

(Fun fact - the test time training on ARC Prize literally came out the same weekend as our hackathon!)

### Projects

+ **Early zero-shot prompting attempts**: using GPT-4o-mini, we got 2.75% accuracy that we used as an initial baseline
+ **Symbolic search attempts**: we tried using DSL solvers from <a href="https://github.com/michaelhodel/arc-dsl">Michael Hodel</a>, though was getting less than 1% accuracy with relatively small search depth
+ **Code generation attempts**: we also tried using different code generation attempts (at the time, <a href="https://redwoodresearch.substack.com/p/getting-50-sota-on-arc-agi-with-gpt">related work</a> was done by Ryan Greenblatt)
+ **~12% accuracy with GPT-4o**: we eventually attained a best score of ~12% accuracy using GPT-4o

### Virtual Q&A with Mike Knoop, Co-Founder of ARC Prize

We also hosted a Q&A with Mike Knoop, co-founder of ARC Prize and Zapier - thank you Mike for your time & insight!

### Shared Takeaways

+ In retrospect, ARC AGI is one of the problems where there exists a soolution that can be identified if we brute force every single known combination (i.e. through DSL), but such a search would be unrealistically expensive. Given that human observers tend to be able to identify a correct solution for ARC AGI tasks for a majority of attempts, it can be inferred that a machine that would be able to solve ARC AGI on the same level as a human would do so without brute forcing - thus potentially showing properties of intelligent reasoning.
+ We found that zero-shot prompting ARC AGI with large language models can give some occasional successes (i.e. GPT-4o-mini), though we would need more work on this front. (Interestingly, this was before o1 and o3 were pubilcly released, which perform somewhat well on ARC AGI.)

### Hackathon Sponsors & Partners

*A special thanks to Rootly (YC S21) for sponsoring, and to Building 21 for the space at McGill!*


