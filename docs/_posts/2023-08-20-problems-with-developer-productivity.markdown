---
layout: post
title:  "The problems with measuring developer productivity"
date:   2023-08-20 09:00:00 -0600
categories: developer productivity
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">

Instead of trying to measure individual performance, we prefer to focus on making a developer effective by creating an excellent engineering environment for them. This is the best tooling, processes, engineering culture, incentives, and teams. To give them the best chance be create value for your customer and company. 

However, a developer is the most expensive line item in product development for any company, far more than other roles and operational costs. Many of the tasks they do are complex and laborious and require focus, experience, and skill. A common question arises: How do we ensure we get the most productivity from our developers, and how do we measure that?  In this article will explore why It is tough to measure developer productivit.  how most efforts tend to measure activity and output, and will not promote the activities that generate more value.

## Why are companies focusing on developer productivity? 

Due to recent macroeconomic stations. Companies and investors are tightening their belts, it’s is harder to hire your way out of productivity problems. The industry has turned to focus on efficiency and productivity. Companies like Google and Meta are publicly talking about it as a business strategy. There is an explosion of innovative tools that offer increased productivity, such as co-pilots, engineering management platforms, and developer portals. Companies are launching developer productivity initiatives and tasking platform engineering teams and engineering managers to find improvements. 

## What are the benefits we are expecting? 

The most prevalent reasons for starting an initiative include:

* Cost efficiency of their engineering organization
* Capacity for increased product portfolio
* Faster time-to-market
* Improved product quality
* Engineering satisfaction and reduced attrition 

WHAT HERE?
## What does a developer produce?

To begin, we will review what we mean by developer productivity:

A developer produces code they spend a lot of time writing code; code by itself is not usefulis has to become working software; it has to be deployed and released to a customer. However, this doesn’t produce any value for your business. It has the potential to produce value. But as 1000 failed startups know, just having software in the wild does not mean any customer will find value in it or pay for it

A developer produces software, which is different from writing code, it is turning that code into software that can actually be used by customers. Software isn’t created just with code. Modern applications are often glue between third-party services. Often this is cheaper and better than writing customer code. There is a wide range of building blocks, cloud services, SaaS products, open-source libraries we can make our software from. Developers spend time producing software by selecting and integrating services. 

A developer produces high-quality software code that lasts a long time; we want it to be produced well so that is is – readable, supportable, tested, and extendable. This is important, as it affects the productivity of whoever will work on it in the future. A developer spends a lot of time designing. Quality is hard to measure. Some baselines of this can be measured (linting, testing coverage), but so far, the industry has not found a quantitative measure of quality and level of technical debt. It relies on the guidance of architects and technical leaders and evolves as you get feedback from real-world usage. 

A developer produces reliable software that can be used by customers - the software we create has to be deployed into an environment a customer can see, It has to be reliable (performant, available, secure), so that it can handle the demands in terms of customers in the production environment. Developers spend time preparing code for deployment and designing for reliability. 

A developer is part of a team that is trying to produce a successful product - they are critical of this, they spend a lot of time collaborating with product and design counterparts to create to achieve customer outcomes. They do this by contributing product ideas (developers can have ideas!), designing experiments, and instrumenting with analytics MORE. Time to market can be influenced massively by creating simple solutions to avoid over-engineering. Having good relationships with other functions affects productivity, as they can discuss trade-offs openly. 

There are other things a developer does that produce value for your business – helping with support improves customer satisfaction; knowledge transfer avoids productivity interruptions when colleagues resign; mentoring and upskilling increases productivity of junior developers; thinking about future scalability avoids potential future rework. 

As you can see from the short exploration, a developer produces many different things as part of building a product. The metrics we often see measured as aimed at the simplest tasks (activity and output), the high-value skills you get from really productive developers such as empathy, quality, pragmatism, collaboration, and learning from mistakes are complicated to measure quantitively. 

## Software development is not like a factory line

A lot of the problems of measuring developer productivity stem from an inaccurate picture of what actually happens to produce useful software. It can appear that software is simple – a product manager writes the requirements, designers do the design, and developer code to these designs and specifications, and then the customer uses the software, then profits! How you might imagine a factory line to work. The problem with this analogy, that unlike a factory, we are not creating the same things over and over again. Each request is designed to its bespoke requirements and outcomes. 

I liked the discussion Mike Fisher and Abi Noda, were having around comparing the analogies of mining vs art. If software development were like mining (or bit coing mining), you would do some mining (work) and immediately, you would have value (not quite there is shopping, packaging, sorting etc). Whereas art when you create something, it does have any value at all, only if the customer is willing to pay for it. 

Which is software development akin too? I think it’s like graphics design or an advertising agency; there is a lot of manual work that can be automated (Photoshop, editing booth), but the value you pay for is the quality of work and the design. 

Software development is knowledge work; the product ideas, the design, and the quality of the software make the real difference and are what you are hiring your knowledge workers to do (the developer, product, and design folks). For a developer, the act of coding is realizing that design. 

MANUAL WORK
## Developers don’t produce business value by themselves

One of the goals in measuring developer productivity is to assign productivity metrics to an individual. This is difficult because individuals do not create products. It’s the sum of developers and other functions working together to produce something that a customer wants to use. Software is created with developers, architects, designers, and product managers collaborating, and other important functions we often forget – project management, operations, support, sales team, account management, marketing, and user research. 

As we can’t assign the software result and value, companies will attempt to attribute to developers some of the low-level “ingredients” like the amount of code & number of commit merged, in a source code repository. This is an indication of activity, not productivity. It is also likely not accurate attribution, as developers will create designs together (multiple options improve the design), the code is just the realization of that design.
There is too much context to compare developers 

A best practice is to organize work into different products that have a value stream and a team assigned. These products should will  be significantly different. They could have a different target persona, technology and product maturity (they might be experimenting or they be stable). Products also often have completely different performance and scalability requirements. Teams will work in different ways, Managers build their teams with the capabilities and experiences they need, and they find the right process for that works for their needs, 

These contextual differences mean that comparing teams is impossible. Throughput metrics are useful for a team itself as an aid to help optimize. 

If the metrics are aggregated into charts with little context and shown to higher management, it is likely a misrepresentation and can result in actions that will severely damage the productivity of that team. Engineering Metrics can also be misleading, there is still a lot of contextual differences, there might be very different technology choices, a team working on a monolith will have different metrics to finely grained microservices, and some product teams might be wrestling with technical debt. Some teams can benefit from A/B test to quickly get customer feedback, others are more revolutionary that requires a different validation approach.  

The contextual problems also apply to comparing developers. Each requirement is different; some require more design thought, If a pattern already exists (adding a field to a form), then it is simple; sometimes, we might be creating a spike as opposed to something production-hardened. A high activity number could an indication of a problem, it might be an indication that someone is becoming a hero developer, and not collaborating or not writing tests. A slow activity number also might not be a problem, stages of the product, it is better for our senior developers to mentor more junior developers. We also have to remember developers are human and not homogenous in how they learn, think or work. They have different experiences and patterns.  SOMETHING HERE ABOUT MONITORING

There are engineering best practices that we chose to apply across the organization, such as frequent check-ins, fast code reviews, and unit testing. We should look for diversions from the best practice, but this isn’t an indication of productivity, just an indication that the developer is either working differently or doesn’t understand the expectation.  

## Measuring output will incentivize the wrong thing 

Measuring activity (commit, PR), will just tell us, that a developer is sitting at their computer, writing code and checking in, which is of little value. It is an indicator that the ingredient is being created, like the analogy of art, you need a canvas, a brush, and paints (unless it’s a conceptual art showing a blank space) to produce art. Frequency and number of deploys are also just measuring output; it’s a better indicator, we at least have software deployed but that doesn’t mean the software is being used. 

As anyone familiar <>, you get what you measure.. If we measure commits and use that to assess developer performance, we will get commits. I have been in situations where the company has measured keystrokes and IDE open time, Guess what they got? lots of developers that didn’t collaborate and very verbose code. In a way, output measuring actually makes it simple for a developer, they know how to look good. They don’t have to actually think about quality or the customer experience; just keep checking in. It will prevent collaboration and mentoring (if you are pairing, who gets the “credit”?). 

Building a product that is both valuable to customers and high-quality is hard and messy; we want to expose those challenges to the whole team so we get discussion, descent, and debate. They pivot and improve with each new learning. If you just have your developers fulfill predetermined requirements - a coding robot churning out more widgets, you will get more software, but is very likely no one will use it.  
# What do we recommend?

## Short iterative milestones with measurable business outcomes 

We were recently working with fast-moving digital natives, building out new product features for them in a very competitive marketplace. To begin with, we were using a set of agile metrics; we used burn downs and estimated everything very carefully. Our stakeholders reviewed them at every showcase, and we talked about them in retrospect. What we soon realized is that the value of those reports was pretty small, the stakeholders they didn't care that much. What they wanted to know is what value you have created for our customers. The company was well versed in lean methodologies, we changed the things we report on:
Features that have been released to customers 
What is blocking the feature from being released
Leading indicators of the success of those features e.g., behavior changes, customer complaints, social media response, A/B test results, user research results  
Lagging indicators, e.g., increase in project, decrease in cost, market share increase 

Essentially, what value is the team providing to their business and customers? 

The other approach we took was abandoning a traditional project plan, and instead used a collection of hypotheses. As most lean practitioners will know, requirements are just guesses until a customer actually uses it. Too often, requirements are treated like guaranteed business value, whereas often assumptions that were to create the requirements turned out to be wrong, or we had to iterate until it actually resonated; the slightest change can often make a feature successful. 

If we work on a 12-month project with little validation with the customer, then our only option is to measure output and throughput. Most technologist has experienced long projects that didn’t have the impact you expected. 

Our recommendation here is, before reverting to output and throughput-based metrics, work on how we measure the team on business value. It might be too difficult to use lagging indicators like profit, but product managers can come up with leading indicators that are more actionable 

The second recommendation is to have small milestones and batch size, with close feedback loops with the customer. If a team can envision a milestone, it’s understandable and obtainable. Then, you can challenge the team to think about how to achieve it simply and to optimize towards those metrics. This includes the developers, who are critical to developing simple solutions and experiments.  We can use the DORA metrics to guide us to that smaller batch size. 

An antipattern we often see moving to more frequent deployment without embracing lean and continuous delivery principles will actually mean it has a big impact on product success. 

## Performance management is a complex task that engineering managers are hired to handle

THIS ONE I AM LESS COMFORTABLE WITH 

We often see performance management under the guise of developer productivity. Leaders want a quick way to optimize their engineering population (by which I mean firing and hiring). This is really performance management and that is what we hiring engineering managers to do. They know the developer in their team, their personality, their habits, and what motivates them. They will use some of the metrics to inform if a developer is only checking in once a week is a problem or if a developer taking a long time to do code reviews. In most situations, that has nothing to do with productivity and more to do with expectations. The engineering manager, with their tech lead, will be able to assess the contribution they make to the overall productivity of the team, based on many nuanced factors. 


## Create a great developer experience and allow teams to continuously improve 

It is often overlooked that developers don’t set out to be unproductive. Their effectiveness is shaped by the environment they find themselves in. Often if they are unproductive, it’s because that is what their company has taught them to be; we have created a subpar developer experience without any method or reason to bolster their productivity. 

More often than not, the root cause of diminished productivity doesn’t stem from slow coding skills. It’s a series of small inefficiencies that compound to render them unproductive – lack of quality documentation, unstable test suite, slow development machines, long compile times etc.. Sometimes we aren’t even letting them code by having too many meetings. The act of coding is just a part of the productivity equation, which with the advent of more sophisticated editors, coding co-pilot, and better information, it’s becoming less of a time sink. 

Frequently, the productivity bottlenecks could be fixed if they had the autonomy to. When I work on agile product development teams, friction is addressed through regular retrospective and continuous improvement. The manager and tech lead would listen to the concerns of the developers. Either solving it or tasking passionate developers to solve it. During hack weeks, a lot of the ideas would be focused on making developer lives easier across the organization. Backstage at Spotify came from a team of developers collaborating during hack week. 

Within a product team, engineering and throughput metrics are the most useful. Technologists that are close to work can interpret the meanings. To guide continuous improvement, they would monitor metrics regularly to spot trends and bottlenecks. We can enable this my providing development teams easy access to analytics as part of your engineering platform. 


## Use signals & analysis to improve the effectiveness of our engineering 

At the beginning of this article, we stated that we would prefer to focus on the effectiveness of our developers and the engineering organization rather than measuring productivity. The metrics that we see being used to measure developer productivity are better used to optimize tools, processes and communications. We recommend having an enabling team that is focused on the effectiveness of your engineering organization; often, this is part of a platform organization. A developer experience team welcome new trend.  They would analyze the engineering value stream to spot waste and optimize the developers’ experience. 

Some of the key guiding metrics an enabling team would monitor

Time for productivity for new hire
Time for resolution of the issue 
Engineering Satisfaction 
Num of experiments, experiment success rate 
Level of tech debt (as identified by the teams) 
4 key DORA metrics 
Reliability metrics 
Local developer metrics (compile time, developer environment setup time) 
Testing metric (time to reproduce the issue, test suite run, stability of build)
Launch new service - time, steps, 
Financial Metrics (cloud costs, cost per customer, cost per request) 


Some of these we can automate with instrumentation, but some are harder and require a deep analysis. Some processes will go across departments. Some will require tracking down detailed information to see what happened. value stream analysis with a cross-functional team if an excellent tool to identify the blockers. Other data is not easily quantifiable; for example, tech debt cannot be easily measured, so instead, we use the aggregation of the opinions of the teams to identify the worst productivity offenders. Productivity for new hires, doesn’t mean they have completed orientation and been given a laptop, it’s whether they are actually contributing meaningfully. 

As we do analysis and research, we need rich detailed data, opinions and anecdotes to support some of our objective measures. We do this by talking to developers, doing 1:1s, and do surveys, It’s important to get a person who is skilled in analysis to do this. Too often, research is done only by engineers who already have a predetermined solution in mind. 

An anti-pattern I have seen we have seen is only measuring seeped. Timing is not everything. The outcome of a process is more important. For example, for a code review, the code review might be short, but if a junior developer doesn’t learn anything or feel trodden on, then it isn’t an effective process. Or if we are deploying often, but the software isn’t being released to customers or it’s causing outages. Where possible, we want metrics that balance quality with speed. This would often be a combination of different types of metrics. 






-------

I often see teams, applying too much emphsiss to a metric, not really treating it like a signal or an indicators that needs interpretation. 


Frequently, our preconceived notions about what hinders team productivity prove to be misguided. We might fixate on trendy methodologies (microservices, we're looking at you) or specific tools when what's truly needed is a robust engineering culture that encourages ideas to flourish within the teams.






