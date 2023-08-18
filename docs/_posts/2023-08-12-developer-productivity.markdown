---
layout: post
title:  "An exploration of developer productivity"
date:   2023-08-13 15:36:13 -0600
categories: developer productivity
—

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">

<img src="/assets/mushroom.jpeg" width="100%">
<br/>
<br/>


Improving developer productivity has been a continuing topic for me over the past year. I am often asked how teams and organizations can improve productivity and how to measure it, from both business and technical leaders

Trying to answer this was part of the focus of my article on [maximizing developer effectiveness][maximizing-developer-effectiveness], which I drafted almost 4 years ago. The core concept was small micro improvements having a large compounding effect on software development. It described focusing on developer outcomes, fostering developer satisfaction, and optimizing feedback loops.

With the current industry focus, I wanted to return to the developer productivity space, expand upon my article with a series of exploratory posts.

### Why is it such a hot topic right now?

Various macroeconomic forces have meant the US has exited an extended tech boom (unless you work in GenAI). Prior to 2020, if you are a startup or a scaleup, finding investment based on future potential revenue was easy. If you wanted to build more software, or if your team was behind on a deadline, you could hire your way out of the problem. Enterprises saw a tightening of their revenue because consumers had less money to spend, which led to technical investment pull back. Big Tech laid off workers, and talked about productivity as a strategy, two examples are Meta’s [year of efficiency][meta-efficiency] and Google aiming for [20% more productivity][google-productivity].

There have been numerous new innovations in the developer productivity space. Research such as the DORA report and SPACE framework, along with tooling like Internal developer portals and coding co-pilots leveraging LLMs. Companies have created developer productivity initiatives, tasked platform engineering teams and engineering managers to find improvements. There is a new class of tools that capture signals and generate insights to help managers to optimize.

Trying to make developers more productive is not a new endeavor; it has been a theme in the history of computing, research groups, cloud vendors, and startups are always looking for the next abstraction that improves productivity (garbage collectors, OO, cloud, Kubernetes, lambda, low-code).

To start this exploration, I will talk a little bit more about what I mean by developer productivity, and follow up with posts on what I have observed*, before trying to land on some good advice.

To begin, I will put aside trying to measure productivity, as it will allow us to look at the topic more holistically and consider different elements.

### What do we mean by developer productivity?

When I talk about developer productivity, I use it to mean the value a developer produces for your company, I think about that under a few aspects –

**The first is working software** – creating and putting reliable, high-quality software in front of customers regularly. I generally think of this as development efficiency.

There are lots of tasks a developer does in their day-to-day journey that are laborious, frictionful and slow that can be improved  – writing boilerplate code, learning existing code, waiting for a build, recreating an issue, standing up a new service etc.. Applying the best practices from continuous delivery, developer experience and platform engineering, will make software development faster, and thus the developer produces more working software.

**The second is building a successful product** – how a developer can contribute to the success and effectiveness of the product they are building.

Creating a successful product is an art, not a science, consisting of many different elements, with a large amount of luck and timing. Those elements might include responding to customer feedback, ideas to increase revenue & market share, improving cost efficiency, experimenting quickly, building a great customer experience and many more. All of these factors a developer is critical to help produce as part of a cross-functional product team, and a lot of it isn’t writing code.

There are other values to consider, such as upskilling other developers. MORE THINGS HERE.

The way I see developer productivity presented, it is mostly attributed to development efficiency. The danger is that it can appear that we are reducing the sole worth of a developer to write code to fulfill predetermined requirements – a coding robot to churn out new pages and widgets.

Leaders love something quantifiable, they are looking for a simple metric to measure the effectiveness of the technology organization. If we report developer productivity to mean development efficiency, and only show those metrics, it reduces the developer value, simplifies product development too much. It may lead us to optimize too much in one direction and miss simple changes that would have a bigger difference to productivity and business impact.

How do developer’s help produce a successful product?

If we look at improving time to market, often the reason for a company to look at developer productivity. A developer can code & ship faster, that will help productivity. However, they might be able to achieve the product goals by writing less code. It is desirable to have less code, code is a liability that has to be maintained. Great development in my opinion is finding a simpler solution to solve a problem, utilizing a library / third party service instead of custom code, and designing an experiment that allows us to validate the idea quicker.

Another element is the strength of the product ideas. A trend I have seen is idea generation has become the domain of product managers, designers and sales people. A developer spends a lot of time immersed in the product, ruminating about customer problems. If we don’t leverage that deep thought and creativity, we are losing a lot of opportunity to produce more value. I have seen a lot of ideas come from developers in the team I work in, and the industry is full of products that originated from developers (Spotify, Tesla, Google etc..).

While it might appear these aspects are more to do with process or cross-functional optimization. I think it’s important to consider all the values a developer produces while we are trying to optimize for productivity as it will have an effect on the toolings, reporting and processes that we create. I will continue to explore this theme in future posts.

Now we have developer productivity defined (at least by how I look at it). Next will be some of the main things I have seen affect it.

[maximizing-developer-effectiveness]: https://martinfowler.com/articles/developer-effectiveness.html

[meta-efficiency]
https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/]

[google-productivity]
https://www.theregister.com/2022/09/07/google_ceo_sundar_pichai_productivity/
