# Maximizing Developer Effectiveness in the AI era.

Five years ago, I wrote Maximizing Developer Effectiveness, comparing the practices I saw at highly effective teams versus less effective ones. With the explosion of AI coding agents, I have been curious if the advice is still valid. Are feedback loops, developer happiness, cognitive overload, etc. the right things to optimize? With agents doing the majority of the work would the right focus be maximizing team effectiveness with AI agents or maximizing agent effectiveness? If “code is free” do we need developers? 

I have spent the last couple of years helping, observing, and having discussions with teams adopting AI tools. I have seen teams initially struggle and reject, some get mild improvements, and others skyrocket. I have seen seasoned developers being completely against it, and then a few months later be one of the proponents of AI. To try to answer (or at least explore) the aforementioned questions and topics. Rather than a long article, I will treat this more like a theme, and share the learnings in a set of short articles with the frontier teams I am working with. As we are trying to understand this fast-moving AI landscape, they won't always be fully coherent strategies, just what I have observed and some of the tips I have employed.  We will explore how roles have changed, but are the new jobs to be done for developers, and wether the concepts in the original article still hold.

## Developers are still critical in software development. 

Even with reports of projects being written by entirely agents, with “no coding”, if you examine closely, there are developers and architects driving and feeding those agents.,They are understanding requirements with colleagues and customers. They are considering, designing, giving technical instructions (although not always in code). Reviewing and debugging issues.  Tasks that have always been a part of developing software. 

However the shape of work developers do day-to-day has changed. In a team usng AI efficectly, the low value tasks have gone. No longer do developers have to remember APIs, syntactic or basic algorithms, they don’t have to spend time on tedious toil. Agents can be applied throughout the software developement workflow, to perform the low value tasks. We also have reached a quality point with LLMs that a well scoped simple task with a clear specification and an efficient harness, can be written entirely by an agent. However we shouldn’t think of agents as purely execution machines, if used correctly they can help developers be producative in many way, with innovating, assisting creation, performing research, doing quick prototypes, or just being a rubber duck to keep the developer focused. 


## Existing Developer Firction is now Agentic Friction

This speed only comes if our existing engineering practices and platform can absorb the amount of change. Coding is only a part of software development. The coding portion of a task may now take half a day instead of 3 days. With increased throughput, puts pressure on downstream systems and processes. The existing issues that weren’t previously prioritized become bottlenecks. Legacy technical, poor documentation, ineffective testing practices and ineffective collaboration are amplified and exposed. If we aren’t careful we have made coding cheaper, but shifted the bottlenecks, so the end result is only marginal gains for the customers. The good news is that AI also makes it easier to fix these issues. 

<MORE HERE>

## Ability to absorb changes and experiments 

We also can consider how much due diligence we put ahead of launching a project. The processes teams would do; the planning, the reviewing and rubber stamping, were in part put in place to protect the investment of developers time. Beyond developer tasks. AI opens up opportunities to reconsider how teams should collaborate to build products. When you can quickly pull a cross-functional pod, have prototypes in days, and MVPs in weeks, the days of needing a big team with two pizzas to feed it are gone. Teams if empowered correctly can now adopt a faster paced experimental approach to software development. 

There is talk of developer now have time to on "high value tasks", but what those high value tasks aren't always entirely clear. If we aren't careful that just turns into lots of code and software that has very low amount of signal on wether it will be useful to a customer. A team has to be empowered, they needs to access to customer research, ability to be experiments and work with different functions to quickly get feedback. Knowing what is the most valuable thing to work on, and being able to gain signal faster on experiemnation is more important than ever. 


## Feedback Loops are still key 

My central thesis of my original article was to focus on the outcomes developers are trying to accomplish, through a series of feedback loops: validate my code change works, validate it integrates correctly, etc. They are small, micro feedback loops, but they compound over time to produce higher quality work faster, and better outcomes for customers. My first thought in revisiting this topic, does efficiency through feedback loops matter so much when you can just kick off the agents in the background, and it can work while you are sleeping. My conclusion is that they matter more than ever: 

To get the best out of AI, agents need short quality validation cycles. Without them, the agent is guessing, and we know agents love to infer and guess when they don't have all the right information. If we provide a concrete way to validate and get signals, it drastically improves the quality. In the same way a developer benefits, the more confident an agent can be a change there will work and be valuable, then the more productive they will be. The earlier this validation can take place, the least amount of slow rework cycles, and unnecessary developer interventions. 

A developer still has to explore, by actively supervising and iterating with agents. For complex or discovery tasks, it's critical the developer needs to actively supervise by monitoring and pairing with the agent, this to offer quick in the moment feedback to the agent. A lot of moments of inspiration for a developer come from spending long periods thinking about a problem domain. Trying to do this entirely ahead of a project in a long specification is hard, and unnatural for a developer, products have to be discovered and evolved. We have been down the road of too much up front planning before. In addition, trying to juggle too many parallel tasks will result in bugs and missed innovation, afterall the developer, similar to an agent, has a limited context window too. 

Token use has to be managed effectively. An efficient developer experience is no longer just measured by time and quality. Efficient token use will improve both context management and the cost of the solutions you are building (particular workflows that are covered by subscriptions). A good feedback cycle in the harness will mean it is not continually doing probes, trial and error, or having to rework after feedback. Although we have to be careful that tokens don’t become the new lines of code metric, it is something we can measure and optimize, but not at the expense of quality, delivered software and customer outcomes. 

## Highly Effective Teams using AI are all in. 

The teams that I have observed to become increased productivity (and we explore the signals of this later on). The key thing is to actually embrace AI. Trialing is over. The teams that are actively transforming their workflows, exploring where AI can be used for their the team day to day process, and in addition to using it to . To as much as possible they no longer do any coding or operational changes by hand, and making that as a team decision is the biggest points. As the manager, the principal engineer, junior dev and senior devs are all onboard. They are exploring learning, and reinventing together. 

I hear a lot about "coding is not the bottleneck anymore", or coding is now free. there is a lot to unpack, in this statement. It sort of depends what you mean by coding, if you mean literally typing our code in particular syntax and calling APIs, that the statement. holds no longer the bottleneck. However, that isn't a developer jobs, a developer's main job is building working software. Writing code that is high quality, fufil the companies standards, and fufils the requirements of the stands, and can be released, observed and supported. Is the developer's job, whether that is encompassed in coding or not, can be debating I am sure it's not free and it is still a bottleneck. What is dangerous about the coding is now free, is people equare that to developers are not need, as they were there for coding. While this is easy to say, it requires some confiden and discilpie from leaders, it may require slowing initially, making sure all the team is learning (not just the early adopters), encouraging more avenues, like mob programming, actively making sure learning are going into the teams setup (maybe that developer anti-pattern is now the 100X). Rethinking review process and documentation processes. That reuiqes a lose buy from the manager and managers to give the empowerment for the team to do this retooling and reskiling. 

Teams already geared for high throughput have a head start



## Platform teams have more customers now. 

A good platform team, takes a customer focused approach to building, they avoid the trap of develpers thinking they know what other develoeprs need. They consider the different levels of exerpeicne and personalities of thier customer. Over the last few years, there has been a welcome moverment to createing developer experience teams and organizations, there the customer focus is part of the missiong, they are argumened with user research and metrics. I spent a couple of years in Amazon's Software Builder Experince. 

While teams have morphed into providing AI tooling and providing agent, it's worht explicilty reevlauting the charter, to consider who their customers are now. While 


## Avoid Handfeeding the agent

AI agents will follow the path the human developer does, it will utilize the exisiting developer experience, They have been trained on instructions, knowldege and framekwork design for humans. In most developer experience's there is friction that we didn't realize. Some friction is obvious a test suite taking 20 mins instead of 2mins, but other friction that you do less often a developer may not think of it as friciton, for example loading test data when it's stale, looking scrolling through build logs to find the failure of a build. They are actions the developr is doing to keep the flow of work going.These a small tasks. Some of the friciton may stop the Agent complely, other may slow down the agent or produce inaccurate results.

If you application is split up into mutliple components, I need to change the API, but the Agent hasn't taught about how to work that API, we might be thinking that the scope of the Agent is just the component we are working with. Again this is firciotn that was apparent with humans, the action of working with multiple components spread across differents repos, can result it lots of boiler plate code, and busy work keeping them in sync.

Basically, the agent should be able to do what the developer can do. I see an evolution with developers in maturity. A developer starts by having the agent do the functionality and unit testing, but might have to intervene. I call this handfeeding the AI. To be honest, it doesn't really have much to do with AI. Less effective environments are not automated; they require a developer to be continually running scripts or doing swivel-chair integration between systems.

There is a class of developer friction that we no longer have to fix so much, as Agents are very good at it. Particularly laborious tasks, like writing boilerplate, navigating an unfamiliar codebase, or looking up syntax for a library they haven't used before. The agent picks those up without much fuss, so we don't need to invest as much in tooling to remove them. That is a real upside, and worth being honest about.

But for everything the agent absorbs, there is a class of friction the agent makes more visible. Stale test data and slow build logs were minor irritations for the developer. The agent gets tripped up by them, or produces a confidently wrong answer because it can't recover the way the developer would.

The bar I have been using with teams is: the agent should be able to do what the developer can do. End to end, from a task in the backlog through to working software in a pre production environment, without the developer having to intervene. I wrote about this in my [AI Readiness Check](/posts/ai-readiness-check) post as a litmus test. Most teams, the first time they run it, count more interventions than they expected.

That count isn't an AI problem. It is the friction the team had been quietly absorbing for years. The team knew it was there, the engineering manager knew it was there, but it never got prioritized because the developer found a way around it. The agent doesn't have the developer's judgement about which workarounds are acceptable; it either fails, or worse, succeeds at something subtly wrong. The pressure to fix the underlying friction is finally there.

## What's next

This is the first piece in a series. In the next ones I will look at how the day to day SDLC changes when agents are doing most of the execution, what the Factory vs Studio framing tells us about where AI fits in the team, and the patterns I have seen in teams that have made the jump. These are observations from teams I have worked with, not a finished theory. I will be wrong about plenty. The point is to put it all down while it is fresh, and build from there.

