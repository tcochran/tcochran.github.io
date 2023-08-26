---
layout: post
title:  "An exploration of developer productivity"
date:   2023-08-13 15:36:13 -0600
categories: developer productivity
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">

<img src="/assets/mushroom.jpeg" width="100%">
<br/>
<br/>

Developer productivity has been a consistent topic for me over the last couple of years. I frequently help companies in their journey to improve productivity, using a mixture of refinement of tools, processes, and team dynamics. A common question arises: How can we measure? What's the formula we can employ to optimize and evaluate developer performance?"

Trying to answer this was part of the focus of my article on [maximizing developer effectiveness][maximizing-developer-effectiveness], which I drafted almost 4 years ago. In it, I said: 

> Organizations look for ways to measure developer productivity. The common anti-pattern is to look at lines of code, feature output or to put too much focus on trying to spot the underperforming developers. It is better to turn the conversation around to focus on how the organization is providing an effective engineering environment.

The article went on to explain how small micro improvements having a large compounding effect on software development. It described focusing on developer outcomes, fostering developer satisfaction, and optimizing feedback loops.

I still think this is good advice. However it isn't the complete picture, and with the added industry focus, I wanted to return to the developer productivity space, expand upon my effectiveness article with a series of exploratory posts. 

### Why is it such a hot topic right now?

Various macroeconomic forces have meant we appear to have exited an extended tech boom (unless you work in GenAI). Prior to 2020, if you are a startup or a scaleup, finding investment based on future potential revenue was easy. If you wanted to build more software, or if your team was behind on a deadline, you could hire your way out of the problem. Enterprises saw a tightening of their revenue because consumers had less money to spend, which led to technical investment pull back. Big Tech laid off workers, and started talking about productivity as a strategy, two examples are Meta’s [year of efficiency][meta-efficiency] and Google aiming for [20% more productivity][google-productivity].

There have been numerous new innovations in the developer productivity space. Research such as the DORA report and SPACE framework, along with tooling like Internal developer portals and coding co-pilots leveraging LLMs. There is a popular class of engineer management tools that capture signals and generate insights to help managers optimize. Developer experience has become a popular phrase. While intended to improve developers' lives, an expected benefit is increased productivity and reduced attrition. 

Companies have created developer productivity initiatives and tasked platform engineering teams and engineering managers to find improvements. Trying to make developers more productive is not a new endeavor; it has been a theme in the history of computing. Research groups, vendors, and startups are persistently looking for the next innovation that reduces the time spent on software development e.g. garbage collectors, OO, cloud, Kubernetes, lambda, low-code.

 I want to introduce you to developer productivity, the lizard monster. Every time I hear about wanting to improve developer productivity I can't help but imagine someone looming over me with a stopwatch and a counter telling me to hurry up. In some cases, this is not imaginary. 

<img src="/assets/lizard-monster.jpeg" width="100%">

It is well known that lines of code are not really a good measure. But there is still a clamor for something simple and quantifiable, if not lines of code? Pull requests? is it deployments, story point throughput? 

To start this exploration, I will talk a little bit more about what I mean by developer productivity and follow up with posts on what I have observed before trying to land on some good advice. To begin, we are going to put aside measuring. We will get to it later. 

### What do we mean by developer productivity?

When I talk about developer productivity, I use it to mean the value a developer produces for your company, I think about that under a few aspects –

**The first is working software** – creating and putting reliable, high-quality software in front of customers regularly. I generally think of this as development efficiency.

There are lots of tasks a developer does in their day-to-day journey that are laborious, frictionful and slow that can be improved  – writing boilerplate code, learning existing code, waiting for a build, recreating an issue, standing up a new service etc.. Applying the best practices from continuous delivery, developer experience and platform engineering, will make software development faster, and thus the developer produces more working software. *Apologies for this massive simplification.*

**The second is building a successful product** – how a developer can contribute to the success and effectiveness of the product they are building.

Creating a successful product is an art, not a science, consisting of many different elements, with a large amount of luck and timing. Those elements might include responding to customer feedback, ideas to increase revenue & market share, improving cost efficiency, experimenting quickly, building a great customer experience and many more. All of these factors a developer is critical to help produce as part of a cross-functional product team, and a lot of it isn’t writing code.

There are other values to consider, such as upskilling other developers. MORE THINGS HERE.

The way I see developer productivity presented, it is mostly attributed to development efficiency. The danger is that it can appear that we are reducing the sole worth of a developer to write code to fulfill predetermined requirements – a coding robot to churn out new pages and widgets. In my understanding, this isn't how modern software development works,.

MAYBE USE THIS it is uncertain, competitive and messy it requires a cross-functional team, to listen, learn, pivot and adapt, which the developer is a key part of.

Leaders love something quantifiable, they are looking for a simple metric to measure the effectiveness of the technology organization. If we report developer productivity to mean development efficiency and only show those metrics, it reduces the developer value, and simplifies product development. It may lead us to optimize too much in one direction and miss simple changes that would significantly affect productivity and business impact.

It's valuable to contemplate the reasons motivating business leaders to support a developer productivity initiative. Among the most prevalent drivers, I often encounter:

* Cost efficiency of their engineering organization 
* Capacity to expand product portfolio
* Accelerated time-to-market
* Elevated product quality

### How do developers help produce a successful product?

If we look at improving time to market, it is often the reason for a company to look at developer productivity. A developer can code & ship faster, which will help productivity. However, they might be able to achieve the product goals by writing less code. It is desirable to have less code, code is a liability that has to be maintained. Great development, in my opinion, is finding a simpler solution to solve a problem, utilizing a library / third party service instead of custom code,.

Experimenting and learning quickly, the developer would work with product to help to design a simple experiment to quickly validate ideas, and to figure out the rollout approach that minimizes risk to the existing customers, they would also instrument with analytics so that we can get as much relevant feedback as possible. 

Another element is the strength of the product ideas. A trend I have seen is idea generation has become the domain of product managers, designers and sales people. A developer spends a lot of time immersed in the product, ruminating about customer problems. If we don’t leverage that deep thought and creativity, we are losing a lot of opportunities to produce more value. I have seen a lot of ideas come from developers in the team I work in, and the industry is full of products that originated from developers (Spotify, Tesla, Google etc..).

While these aspects might appear to be more to do with process or cross-functional optimization. I think it’s important to consider all the values a developer produces while we are trying to optimize for productivity, as it will have an effect on the toolings, reporting and processes that we create. I will continue to explore this theme in future posts.

Now we have developer productivity somewhat defined (at least by how I look at it). Next will be some of the main things I have a developer's productivity.

[maximizing-developer-effectiveness]: https://martinfowler.com/articles/developer-effectiveness.html

[meta-efficiency]:https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/]

[google-productivity]:https://www.theregister.com/2022/09/07/google_ceo_sundar_pichai_productivity/
