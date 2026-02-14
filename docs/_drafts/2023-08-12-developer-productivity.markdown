---
layout: post
title:  "An exploration of developer productivity"
date:   2023-08-25 15:36:13 -0600
categories: developer productivity
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">

<img src="/assets/mushroom.jpeg" width="100%">
<br/>
<br/>

Over the past few years, developer productivity has been a consistent topic for me. It currently has considerable industry attention, with many companies making improving the productivity of their engineering organization part of their strategy. 

Part of the focus is finding ways to justify initiatives and find metrics to track progress. Trying to answer this was part of the focus of my article on [maximizing developer effectiveness][maximizing-developer-effectiveness], which I drafted almost 4 years ago. In it, I said: 

> Organizations look for ways to measure developer productivity. The common anti-pattern is to look at lines of code, feature output or to put too much focus on trying to spot the underperforming developers. It is better to turn the conversation around to focus on how the organization is providing an effective engineering environment.

The article went on to explain how small micro improvements can have a large compounding effect on software development. It stressed the significance of concentrating on developer outcomes, fostering developer satisfaction, and optimizing feedback loops.

While I still believe this is good advice. I recognize that this isn't the complete picture. Given the current heightened industry focus on developer productivity, I wanted to return to the topic and expand upon my earlier effectiveness article with a series of exploratory posts that delve deeper. 

In the first few posts, we will analyze what we mean by developer productivity, the driver for it, and the main impediments before we start covering signals and measuring. 

### Why is it such a hot topic right now?

Various macroeconomic forces have meant the tech industry has exited an extended boom (unless you work in GenAI). Prior to 2020, if you were a startup or a scaleup, finding investment based on future potential revenue was easier. If you wanted to build more software, or if your team was behind on a deadline, you could hire your way out of the problem. It isn't just tech investment affected. Consumers have less money to spend; enterprises saw a tightening of their revenue, which led to technical investment pullback. Big Tech companies laid off workers and started talking about productivity as a strategy. Two examples are Meta’s [year of efficiency][meta-efficiency] and Google aiming for [20% more productivity][google-productivity].

There have been numerous new innovations in the developer productivity space. These encompass research like the renowned DORA report and SPACE framework. Additionally, there's been a significant enhancement in tooling, with the advent of internal developer portals and the utilization of coding co-pilots powered by Language Model Models (LLMs). A  class of engineering management tools has gained popularity. These tools capture signals and convert them into actionable insights, empowering managers to optimize their teams' performance.

Developer Experience(DevEx),  has garnered considerable attention. DevEx primarily aims to enhance developers' lives by acknowledging their humanity and accommodating their emotions to optimize working environments and processes accordingly. An expected benefit of DevEx is heightened productivity and decreased attrition rates. This holistic approach to development is becoming popular, fostering happier, more effective teams.

Companies have launched developer productivity initiatives and tasked platform engineering teams and engineering managers to find improvements. Trying to make developers more productive is not a new endeavor; it has been a theme in the history of computing. The industry is persistently looking for the next innovation that reduces the time spent on software development, for example – garbage collectors, OO, cloud, Kubernetes, lambda, low-code.

In my work a common question arises: How can we measure? What's the formula we can employ to optimize and evaluate developer performance?"

It is well known that lines of code and other output based metrics do not serve as a robust measure of productivity. It's becoming better well known there isn't a single metric or tactic. Nevertheless, there is still a clamor for something simple – be it a framework to follow or a tool to use. 

However, an overemphasis on measurement can prevent us from meaningful analysis into the obstacles that impede productivity in our specific context. It might steer us to focus on the straightforward, quantifiable elements, neglecting the nuanced aspects. To begin, to allow us to be more holistic, we will put aside measuring. We will get to it later. 

### Why improve developer productivity?

It's pretty simple: developers are expensive. To put a product into the market, the largest expense by far will be the developer. Roughly, developer costs make up 80% of product development cost, and the rest would be other roles on the product team, the infrastructure & third-party costs, and then other functions like salespeople. There will be factors that change this: the geographical market you are hiring from, the complexity of your product, and the quality you are aiming for. 

By product development, to clarify, in this article, I don't just mean startups. I mean any new  product endeavor. It could be at enterprise, adding a new group of features to an existing product or platform, including products with an internal audience or technical platform products used by internal development teams. 

What benefits do leaders expect? Among the most prevalent drivers I often encounter:

* Cost efficiency of their engineering organization 
* Capacity to expand product portfolio
* Accelerated time-to-market
* Elevated product quality

SOMETHING ELSE HERE

### What do developers produce?

When I talk about developer productivity, I use it to mean the value a developer produces for your company, I think about that under a few aspects –

**The first is working software** – creating and putting reliable, high-quality software in front of customers regularly. I generally think of this as development efficiency.

Writing code is very time-consuming. It takes up the most time. This is where most start looking at for developer productivity – how can we be better and faster at writing code? 

There are lots of other tasks a developer does in their day-to-day journey that are laborious and can be improved  – writing boilerplate code, learning existing code, waiting for a build, recreating an issue, standing up a new service etc.. 

We also need to ensure the code is high-quality and reliable and make it easy for developers to do the right thing, with security, performance, and availability 

If we look beyond a single developer, at the effectiveness of the engineering organization, we need to make sure developers aren't inadvertently generating waste, e.g. building duplicative services, or using an exotic technology we have little experience in.  

This to me is the machinery, we need build a well-oiled machine that makes it easy for developers to create working software and release it to customers. The grind, indirection and labor are removed from tasks as much as possible, this makes developers more productive. 

**The second value is building a successful product** – how a developer can contribute to the success and effectiveness of the product they are building.

Creating a successful product is an art, not a science, consisting of many different elements, with a large amount of luck and timing. Those elements might include responding to customer feedback, ideas to increase revenue & market share, improving cost efficiency, experimenting quickly, building a great customer experience and many more. All of these factors a developer is critical to help produce as part of a cross-functional product team, and a lot of it isn’t writing code.

MORE HERE

There are other values that a developer produces. Upskilling and mentoring allow us to hire less senior engineers. Knowledge transfer means we can avoid interruptions when someone quits. Considering future scalability means we can prevent less rework in the future. Do those values enhance provide business impact?

The way I see developer productivity presented, it is mostly attributed to development efficiency. The danger is that it can appear that we are reducing the sole worth of a developer to write code to fulfill predetermined requirements – a coding robot to churn out new pages and widgets. In my understanding, this isn't how effective software development works.

However, if we go back to those business reasons why companies are looking at productivity, we should have a more nunanced view on what a developer produces. 

### Tracking Developer performance?

NOT SURE IF SHOULD WRITE THIS HERE OR NOT 

In my next post we will explore the main problems that affect developer productivity. 

<!-- MAYBE USE THIS it is uncertain, competitive and messy it requires a cross-functional team, to listen, learn, pivot and adapt, which the developer is a key part of.

If we report developer productivity to mean development efficiency and only show those metrics, it reduces the developer value, and simplifies product development. It may lead us to optimize too much in one direction and miss simple changes that would significantly affect productivity and business impact. -->

### How do developers help produce a successful product?

THIS COULD BE IT"S OWN POST

In the last post we mentioned that a large value a developer does is by making a product successful. Examining this will allow us to figure out how a developer is productive, and how we can optimize. 
Successful can mean different things, it can mean that is making a profit, that is loved by the customers, that it performing it’s intended function without issues, it could mean hitting a release date. It is whatever has been defined as the success criteria for the strategy of the product. This is applies to both products of an external audience, internal audience or even an internal developer audience for technical capabilities. 

If we look at improving time to market,  often the reason for a company to look at  productivity. A developer could code & ship faster. However, an effective developer might be able to achieve the same product goals by writing less code,. Which is desirable; code is a liability that has to be maintained. Great development, in my opinion, is finding a simpler solution to solve a problem or utilizing a library / third-party service instead of custom code.

Experimenting and learning quickly, the developer would work with product & design to help to create a simple experiment to quickly validate ideas, and to figure out the rollout approach that minimizes risk to the existing customers, they would also instrument with analytics so that we can get as much relevant feedback as possible. 

Another element is the strength of the product ideas. A trend I have seen is idea generation has become the domain of product managers, designers and sales people. A developer spends a lot of time immersed in the product, ruminating about customer problems. If we don’t leverage that deep thought and creativity, we are losing a lot of opportunities to produce more value. I have seen a lot of ideas come from developers in the team I work in, and the industry is full of products that originated from developers (Spotify, Tesla, Google etc..).

While these aspects might appear to be more to do with process or cross-functional optimization. I think it’s important to consider all the values a developer produces while we are trying to optimize for productivity, as it will have an effect on the toolings, reporting and processes that we create. I will continue to explore this theme in future posts.

What does this have to do with developer productivity? While these aspects might appear to be more to do with process or cross-functional optimization. I think it’s important o recognize a developer contributes to a lot of things that create business impact. It is not purely just writing coding and deploying code. This will have an affect on the toolings, reporting and processes that we create for developers. 

[maximizing-developer-effectiveness]: https://martinfowler.com/articles/developer-effectiveness.html
[meta-efficiency]:https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/]
[google-productivity]:https://www.theregister.com/2022/09/07/google_ceo_sundar_pichai_productivity/