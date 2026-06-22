Maximizing Developer Effectiveness in the AI era.

Five years ago, I wrote Maximizing Developer Effectiveness, comparing the practices I saw at highly effective teams versus less effective ones. With the explosion of AI coding agents, I have been curious if the advice in the article is still valid. Are feedback loops, developer happiness, and cognitive overload the right things to optimize? With agents doing the majority of the work, do we still need an efficient developer experience? When we kick off an agent to complete a task overnight, is the right focus still the developer? Have agents effectively solved developer productivity, so that our focus should now be on maximizing team effectiveness, or maximizing agent effectiveness? 

I have spent the last couple of years helping, observing, and having discussions with teams adopting AI tools. I have seen teams initially struggle and reject it, some get mild improvements, and others skyrocket. I have seen seasoned developers be completely against it, and then a few months later become one of its proponents. To try to answer (or at least explore) these questions, rather than write one long article, I will treat this more like a theme and share the learnings in a set of short articles with the frontier teams I am working with. As we are trying to understand this fast-moving AI landscape, they won't always be fully coherent strategies, just what I have observed and some of the tips I have employed.  

We are going to start the series with a light “state of developer experience”, exploring some of the hypotheses from the original article, before going deeper in subsequent articles. 
Developers are still critical in software development. 

Even with reports of projects being written entirely by agents, with “no coding” being reported, if you examine closely there are developers and architects driving and feeding those agents. They are understanding requirements with colleagues and customers. They are considering, designing, and giving technical instructions (although not always in code), reviewing code and debugging issues. These are tasks that have always been a part of developing software.

However, the shape of work developers do day-to-day has changed. The low value tasks have gone. No longer do developers have to remember APIs, syntax, or basic algorithms, and they don’t have to spend time on tedious tasks like fixing the build or creating unit tests. LLMs and coding agents have reached a quality where a well scoped, simple task with a clear specification and an efficient harness can be written entirely by an agent. AI agents are more than purely execution machines; they can also help developers innovate, assisting ideation, performing research, doing quick prototypes, or just being a rubber duck to keep the developer focused. 


Existing Developer Bottlenecks are amplified 
This speed only comes if our existing engineering practices and platform can absorb the amount of change. Coding is only a part of software development. The coding portion of a task may now take half a day instead of 3 days. With increased throughput, this puts pressure on downstream systems and processes. The existing issues that weren’t previously prioritized become bottlenecks. Legacy technical debt, poor documentation, ineffective testing practices and ineffective collaboration are amplified and exposed. This now means all your other processes are relatively more of a problem. For example, the code review that took a day on average is now, more often than not, longer than it takes to develop the feature. Or a flakey E2E suite that takes 4 hours and often requires restarting. With more changes coming through, we can batch them, but CD taught us that large changes are riskier, resulting in more rework. If we aren’t careful, we have made coding cheaper but shifted the bottlenecks, so the end result is only marginal gains for customers. It is not all bad news: AI also makes it easier to fix issues in your development platform, or architectural problems you have been putting off. 
AI allows us to be more experimental
AI opens up opportunities to reconsider how teams should collaborate to build products. When you can quickly pull together a cross-functional pod, have prototypes in days, and MVPs in weeks, the days of needing a big team with two pizzas to feed it are gone. We can assess how much due diligence we put ahead of launching a project. The processes teams used to follow, the planning, the reviewing and rubber stamping, were in part put in place to protect the investment of developers’ time. Teams, if empowered correctly, can now adopt a faster paced, experimental approach to software development. 




Feedback Loops are still key 

The central thesis of my original article was to focus on the outcomes developers are trying to accomplish, through a series of feedback loops: validate my code change works, validate it integrates correctly, etc. They are small, micro feedback loops, but they compound over time to produce higher quality work faster, and better outcomes for customers. My first thought in revisiting this topic was: does efficiency through feedback loops matter so much when you can just kick off the agents in the background and have them work while you are sleeping? My conclusion is that they matter more than ever: 

To get the best out of AI, agents need short quality validation cycles. Without them, the agent is guessing, and we know agents love to infer and guess when they don't have all the right information. If we provide a concrete way to validate and get signals, it drastically improves the quality. In the same way a developer benefits, the more confident an agent can be that a change will work and be valuable, the more productive it will be. The earlier this validation can take place, the fewer slow rework cycles and unnecessary developer interventions there are. 

A developer still has to explore, by actively supervising and iterating with agents. For complex or discovery tasks, it's critical that the developer actively supervises, monitoring and pairing with the agent to offer quick in-the-moment feedback. A lot of moments of inspiration for a developer come from spending long periods thinking about a problem domain. Trying to do this entirely ahead of a project, in a long specification, is hard and unnatural for a developer; products have to be discovered and evolved. We have been down the road of too much up front planning before. In addition, trying to juggle too many parallel tasks will result in bugs and missed innovation; after all, the developer, similar to an agent, has a limited context window too. 

Token use has to be managed effectively. An efficient developer experience is no longer just measured by time and quality. Efficient token use will improve both context management and the cost of the solutions you are building (particularly workflows that are covered by subscriptions). A good feedback cycle in the harness will mean it is not continually doing probes, trial and error, or having to rework after feedback. Although we have to be careful that tokens don’t become the new lines of code metric, it is something we can measure and optimize, but not at the expense of quality, delivered software and customer outcomes. 

Highly Effective Teams using AI are all in. 

The teams I have observed become more productive (and we explore the signals of this later on) all share one thing. The key thing is to actually embrace AI. Trialing is over. The teams that are actively transforming their workflows are exploring where AI can be used in the team's day-to-day process. As much as possible, they no longer do any coding or operational changes by hand, and making that a team decision is the biggest point. The manager, the principal engineer, junior devs and senior devs are all on board. They are exploring, learning, and reinventing together. 

I hear a lot about "coding is not the bottleneck anymore", or "coding is now free". There is a lot to unpack in this statement. It sort of depends what you mean by coding. If you mean literally typing out code in a particular syntax and calling APIs, then the statement holds: that is no longer the bottleneck. However, that isn't a developer's job. A developer's main job is building working software. Writing code that is high quality, fulfils the company's standards, meets the requirements, and can be released, observed and supported: that is the developer's job. Whether that is encompassed in "coding" or not can be debated, but I am sure it's not free, and it is still a bottleneck. What is dangerous about "coding is now free" is that people equate it to "developers are not needed", as if they were only there for coding. While this is easy to say, it requires some confidence and discipline from leaders. It may require slowing down initially, making sure all the team is learning (not just the early adopters), encouraging more avenues like mob programming, and actively making sure learnings are going into the team's setup (maybe that developer anti-pattern is now the 100X). It means rethinking review and documentation processes. That requires buy-in from managers to give the team the empowerment to do this retooling and reskilling. 

Teams already geared for high throughput have a head start



## You have two customers now. 



## Ability to absorb changes and experiments 



## What's next

This is the first piece in a series. In the next ones I will look at how the day to day SDLC changes when agents are doing most of the execution, what the Factory vs Studio framing tells us about where AI fits in the team, and the patterns I have seen in teams that have made the jump. These are observations from teams I have worked with, not a finished theory. I will be wrong about plenty. The point is to put it all down while it is fresh, and build from there.

