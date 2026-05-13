---
title: "AI Readiness Check"
date: 2026-02-14
tags: [ai, developer-experience, platform-engineering]
draft: true
description: A simple, customer-focused litmus test for whether your developer experience and platform are ready for AI.
---

How do you know your developer experience and platform is ready for AI? This is a simple, customer-focused litmus test you can do (the customer is the agent and developer).

Take a small task out of your backlog, ideally something simple: a small improvement, something deterministic and not subjective. Something it would have taken a developer under a day to complete.

Ask the agent to work on it. Do not give it any additional context or details about the task that isn't already in your task.

Record what the agent does. Note down everything the developer has to do to keep the agent on track to complete the task. We call these "human interventions".

The end goal is that the software is in a pre-production environment and in a working state. This is important: if the end goal was generating a PR, we can't say whether that software actually fulfils its task and meets your company's quality bar.

Also note down instances where the agent is struggling: doing multiple commands due to confusion or inaccuracy.

After we have done this, we should have a count for human interventions and agent friction. This is your baseline that we can improve upon. We should also record the time taken, but this is less important.

The next step is to go through the human interventions and find the root cause. It may surface many different issues related to the local developer setup, the context, the project management system, the integrations, or the platform it runs on. Some of these things your team can change; others will become feature requests for your platform engineering teams.

### Typical Issues

- The agent cannot build or test
- The agent can't access the task details
- Struggles to locate files
- Doesn't know how to isolate a test
- Exploratory testing
- Doesn't adhere to coding standards
- The SDLC is being guided by the developer
- Running a local server
- Dealing with stale environments

### Next Steps

Do this regularly and record improvements, both as a count and the types of problems you are finding. Obviously this isn't a particularly scientific test, as each task will be different, but that is a good thing as each iteration will surface slightly different problems.

Once we think we have got a handle on simple tasks, we can make the problem more complicated. A task that requires integration with another service and has to look up the API. A subjective task that would need iterating with a designer and developer. Debugging a failure.

For bonus points, you feed the information collected into an agent to suggest ideas and make small improvements to how it wants to understand information.
