---
title: "Return of the Desk Check"
date: 2026-03-27
tags: [ai, code-review, software-engineering]
draft: true
description: As agents take over implementation, the feedback that matters most is on the spec, not the code. The desk check returns.
---

## The problem with specifications

Requirements are hard to write. No matter how much time you spend on them, they are almost always incomplete — you cannot fully know what you want until you see it in front of you. I have seen teams deliberately avoid heavy upfront specification for this reason, writing only what is necessary and trusting that they will discover the rest as they go. An initial implementation, reviewed early, beats a perfect specification that turns out to be wrong.

When the feedback loop from requirements to that first review gets too long, specific things go wrong. The PM sees something that isn't quite right but lets it through because a fix would take another week. The developer pushes back because they did it as specified and have already moved on to something else. Issues become new stories that drift down the backlog.

## Agents make it harder

Now we are working with agents, and the same problem is back — but harder. You write a ticket, or a prompt, or a brief. The agent goes off and implements it. And what comes back is shaped entirely by what you wrote. The developer's role has shifted. They are no longer primarily the coder — they are the spec writer. They define the problem, provide the context, set the direction. The agent does the implementation.

This changes what feedback means. The feedback the developer needs most is no longer "did the code pass review" — it is "did my spec produce the right result." Specifications are always incomplete, for the same reasons they always were. You cannot think of everything upfront. You especially cannot specify what a UI should feel like in words. The only way to know whether your spec worked is to see the software running.

There is a lot of attention right now on code review as an AI bottleneck, and rightly so — more code generation means more code to review. But most of the solutions I see are about processing code faster. What gets less attention is the functional review: does the software actually do what it is supposed to do? That is the part agents make worse. Specification problems don't get caught by a linter or a test suite — they only surface when a human looks at the running software.

## Minimise the loop

The goal is to minimise the time from specification to feedback on running software. The shorter that loop, the cheaper it is to course correct.

In agile software development we had a solution to this: the desk check. A product manager would walk over to a developer's machine, peer over their desk, and take a look at what had been built in the local environment. It was quick, informal, and often turned into an impromptu pairing session. The product manager or designer knew they would get that early look, which meant they felt less pressure to over-specify upfront. The developer could offer input too — they often have good ideas. The end result was nearly always better.

We need the same thing for our AI workflow. When an agent completes a change, there should be an environment where the team can see it working. Ephemeral dev environments are a natural fit — though most teams don't have them yet, and setting them up is non-trivial. It is worth the investment. When the agent is ready for review, it publishes the change so the team can look at both the feature and the code.

Who needs to see it depends on the change. A refactor might only need another developer. A new feature needs a product manager to check it does what was intended. A UI change needs a designer. The original desk check worked because it was informal enough to involve the right person without ceremony. The AI version needs that same flexibility.

From there, the options are the same as they always were. The team can accept the change and move forward. They can give feedback to the agent, which continues to work on it asynchronously and publishes again when ready. Or they can pair with the agent — jump into the session and work through the changes together. That last one is particularly useful for UI work where things need to be iterated quickly and it's hard to describe what you want in words.

This closes the feedback loop in the same way the desk check did — quick, low cost, before anything has been merged or deployed.

The alternative I have seen people reach for is feature toggles: let the agent merge, review it in staging, and toggle it off until it is ready. But you are paying a cost to create and manage the toggle, you still cannot release until someone reviews, and you can still end up in the same sunk cost trap if the review comes too late.

The code review pressure is real. I think solving it is less about reviewing code faster and more about reviewing the right thing at the right time.
