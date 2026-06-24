---
title: "AI Readiness Check"
date: 2026-02-14
tags: [ai, developer-experience, platform-engineering]
draft: true
description: Agents follow the path your developers do, exposing the friction you have been quietly absorbing. A simple, customer-focused litmus test for whether your developer experience and platform are ready for AI.
---

AI agents will follow the path the human developer does; they will use the existing developer experience. They have been trained on instructions, knowledge and frameworks designed for humans. In most developer experiences there is friction we didn't realize was there. Some friction is obvious, like a test suite taking 20 minutes instead of 2. But other friction, the kind you hit less often, a developer may not even think of as friction: loading test data when it's stale, or scrolling through build logs to find why a build failed. These are actions the developer does to keep the flow of work going. They are small tasks. Some of the friction may stop the agent completely; other friction may slow it down or produce inaccurate results.

If your application is split into multiple components, you may need to change the API, but the agent hasn't been taught how to work with that API; we might be thinking the agent's scope is just the component we are working in. Again, this is friction that was apparent with humans: working with multiple components spread across different repos can result in lots of boilerplate code and busy work keeping them in sync.

Basically, the agent should be able to do what the developer can do. I see an evolution in developer maturity. A developer starts by having the agent do the functionality and unit testing, but might have to intervene. I call this handfeeding the AI. To be honest, it doesn't really have much to do with AI. Less effective environments are not automated; they require a developer to be continually running scripts or doing swivel-chair integration between systems.

There is a class of developer friction that we no longer have to fix so much, as agents are very good at it. Particularly laborious tasks, like writing boilerplate, navigating an unfamiliar codebase, or looking up syntax for a library they haven't used before. The agent picks those up without much fuss, so we don't need to invest as much in tooling to remove them. That is a real upside, and worth being honest about.

But for everything the agent absorbs, there is a class of friction the agent makes more visible. Stale test data and slow build logs were minor irritations for the developer. The agent gets tripped up by them, or produces a confidently wrong answer because it can't recover the way the developer would.

The bar I have been using with teams is: the agent should be able to do what the developer can do. End to end, from a task in the backlog through to working software in a pre production environment, without the developer having to intervene.

So how do you know your developer experience and platform is ready for AI? You can turn that bar into a simple, customer-focused litmus test (the customer is both the agent and the developer).

Take a small task out of your backlog, ideally something simple: a small improvement, something deterministic and not subjective. Something it would have taken a developer under a day to complete.

Ask the agent to work on it. Do not give it any additional context or details about the task that isn't already in your task.

Record what the agent does. Note down everything the developer has to do to keep the agent on track to complete the task. We call these "human interventions".

The end goal is that the software is in a pre-production environment and in a working state. This is important: if the end goal was generating a PR, we can't say whether that software actually fulfils its task and meets your company's quality bar.

Also note down instances where the agent is struggling: doing multiple commands due to confusion or inaccuracy.

After we have done this, we should have a count for human interventions and agent friction. This is your baseline that we can improve upon. We should also record the time taken, but this is less important.

That count isn't an AI problem. It is the friction the team had been quietly absorbing for years. The team knew it was there, the engineering manager knew it was there, but it never got prioritized because the developer found a way around it. The agent doesn't have the developer's judgement about which workarounds are acceptable; it either fails, or worse, succeeds at something subtly wrong. The pressure to fix the underlying friction is finally there.

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
