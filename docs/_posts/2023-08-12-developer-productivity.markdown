---
layout: post
title:  "An exploration of developer productivity"
date:   2023-08-13 15:36:13 -0600
categories: developer productivity
---

Improving developer productivity has been a continuing topic for me over the past year. I am often asked how teams and organizations can improve and how to measure it, from both business execs and technical leaders

Trying to answer this was part of the focus of my article on [maximizing developer effectiveness][maximizing-developer-effectiveness], which I drafted almost 4 years ago. The core concept was small micro improvements having a large compounding effect on software development. It described focusing on developer outcomes, fostering developer satisfaction, and optimizing feedback loops. With the current industry focus, I wanted to return to the developer productivity space, expand upon my article, with a series of exploratory posts.

Why is it such a hot topic right now?

Various macroeconomic forces have meant the US has exited an extended tech boom (unless you work in GenAI). Prior to 2020, if you are a startup or a scaleup, finding investment based on future potential revenue was easy. If you wanted to build more software, or if your team was behind on a deadline, you could hire your way out of the problem. Enterprises saw a tightening of their revenue because consumers had less money to spend, which led to technical investment pull back. Big Tech laid off workers, and talked about productivity, Meta’s year of efficiency and Google aiming for 20% more productivity.

Over the last few years there have been new innovations in the developer productivity space. Research like the DORA report and Space framework, and tooling like ChatGPT and Internal developer portals promising massive improvements. Companies have created developer productivity initiatives, and tasked platform engineering teams to find improvements.

Trying to make developers more productive is not a new endeavor; it has been a theme in the history of computing, research groups, cloud vendors, and startups are always looking for the next abstraction that improves productivity (garbage collectors, OO, cloud, Kubernetes, lambda, low-code).

To start this exploration, I will talk a little bit more about what I mean by developer productivity, and then I will follow up with posts I have observed* before trying to land on some good advice.

To begin, if we put aside trying to measure productivity, it will allow us to look at the topic more holistically and consider different elements.

## What do we mean by developer productivity?

When I think about developer productivity, I use it to mean the value a developer produces for your company, I think about that under a few aspects –

The first is development efficiency – creating and putting reliable, high-quality software in front of customers regularly.1

There are lots of tasks a developer does in their day-to-day journey that are laborious and slow that can be improved  – writing boilerplate code, learning existing code, waiting for a build, recreating an issue, misunderstandings with colleagues etc.. This will make software development faster, and thus the developer produces more.

The second is building a successful product – how a developer can contribute to the success and effectiveness of the product they are building.

Creating a successful product is complicated and consists of many different elements. it could be responding to customer feedback, ideas to increase revenue & market share, improving cost efficiency, experimenting faster & cheaper, a great customer experience and many more, all of these things a developer is critical to help “produce” as part of a cross-functional product team, and most of the tasks aren’t writing code.

There are other values, such as upskilling other developers

When I speak to people about productivity they generally mean development efficiency. This may be OK if that is an accepted definition for your company. The danger is that it can appear that we are reducing the sole worth of a developer to this. Business execs love something quantifiable, they are looking for a simple metric to measure the effectiveness of their technology. <joining sentence< It may lead us to miss simple changes that would have a bigger difference to productivity and business impact.

## How does a developer help to create a successful product?

If we look at time to market, often the reason for a company to look at developer productivity. A developer can code & ship faster that will help productivity. They can also write less code, as we know code is a liability that has to be maintained. Great development in my opinion is finding a simpler solution to solve a problem, utilizing a library / third party service instead of custom code, and designing an experiment that allows us to validate the idea quicker.

Another element is the strength of the product ideas. When I look at how a lot of software development is set up in a lot of organizations, the developer’s are excluded from the idea generation part, this is the domain of the product manager and designers. There is tons of evidence and literature (not least that a large percentage of successful startups originate from developers) on the strength of ideas from developers. It’s almost back to the days of “the business” handing over a specification to a developer to complete. A developer spends a lot of time immersed in the product, ruminating about customer problems. If we don’t leverage that deep thought and creativity, we are losing a lot of opportunity to produce more value.

While you might think that these aspects are more to do with the process or cross-functional elements. I think it’s important to consider all the values a developer produces while we are trying to optimize for productivity as it will have an effect on the toolings, reporting and processes that we create.

Now we have developer productivity defined how I look at it. In my next post, I will use some examples to illustrate more about what I mean.

[maximizing-developer-effectiveness]: https://martinfowler.com/articles/developer-effectiveness.html
