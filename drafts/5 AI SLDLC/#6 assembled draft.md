Maximizing Developer Effectiveness in the AI era.

Five years ago, I wrote Maximizing Developer Effectiveness, comparing the practices I see at highly effective teams versus less effective ones. With the explosion of AI coding agents, I have been wondering whether the advice is still valid. Are feedback loops, developer happiness, cognitive overload, etc. the right things to optimize? With agents doing the majority of the work would the right focus be maximizing team effectiveness with AI agents or maximizing agent effectiveness? If “code is free” do we need developers? 

Developers are still critical in software development. At least for now. Even with reports of projects being written by agents, if you look closely, there are developers and architects, designing, giving precise technical instructions, reviewing and debugging issues. Tasks that have always been a part of developing software. However the shape of work developers do day-to-day is changing. No longer should developers have to remember APIs, syntactic or basic algorithms, they don’t have to spend time tedious low value tasks, like changing configuration, adding logging and fixing the build. We have reached the point a well scoped simple task with a clear specification and an efficient harness, can be written entirely by agent. 

However we shouldn’t think of Agents as purely execution machines, they can also help developers with creating, performing research, doing quick prototypes, or just being a rubber duck to keep us focused. This happens in a more interactive pairing mode. 

With opens up discussion about the role of developer. What kind of work can be offloaded off to agents? What are the new jobs to be done, and how should a platform team optimize for them? 

Beyond the tactical developer tasks. AI opens up opportunities to consider how teams should work together. The days of the two pizza teams are gone, when you can quickly pull a cross functional team, supported by a swarm of agents. How do teams function and collaborate in the AI era? We also hear that AI will free up developers to work on those high value tasks, but what are they? And how do we empower the developers to find them? 

I have spent the last couple of years helping, observing, and having discussions with teams adopting AI tools. I have seen teams initially struggle and reject, some get mild improvements, and others skyrocket. I have seen seasoned developers being completely against it, and then a few months later be one of the converted. To try to answer (or at least explore) the aforementioned questions these topics. Rather than a long article, I will treat this more like a theme, and share the learnings in a set of short articles. As we are trying to understand this fast-moving AI landscape, they won't always be fully coherent strategies, just what I have observed and some of the tips I have employed.  We will start this exploration by looking at the original concepts of the article.
Feedback Loops are still key 

My central thesis of my original article was to focus on the outcomes developers are trying to accomplish, through a series of feedback loopsl validate my code change works, validate it integrates correctly, etc. They are small, micro feedback loops, but they compound over time to produce higher quality work and better outcomes for customers. My first thought is, does this still apply in AI era, does efficiency matter so much? You can just kick off the agents in the background, and it can work while you are sleeping, to figure stuff out, to be as efficient without a developer physically doing it. It turns out that fast high quality feedback loops are more important than ever. There is a few reasons; 

* To get the best out of AI, agents need short, quality validation cycles. Without them, the agent is guessing, and we know agents love to infer and guess when they don't have all the right information. If we provide a concrete way to validate and get signals, it drastically improves the quality. In a same way a developer works, the more coffident an agetn they can be a change will work and be valuable, then  

* A developer still has supervise a lot of tasks, today for a lot of complex or discovery tasks, it's critical the developer needs to supervise, pair with the agent, to offer quick in the moment feedback to the agent. Only small deterministic tasks can really safely be backgrounded to an async worker. While a developer can multi-task, and swap to other agents, when one is running a slow process, there is only so much context a developer can remember (what is the token limit for a developer?). 

* Efficient token use will improve the booth context management and the cost of the solutions you are building (particular workflows that are covered by subscriptions). A good feedback cycle will mean it is not continually doing probes, trail and error, or having to rework after feedback, that is very costly in terms of feedback loops. 

Highly Effective Teams using AI are all in. 

The teams that I have observed to become increased productivity (and we explore the signals of this later on). The key thing is to actually embrace AI. Trialing is over. The teams that are actively transforming their workflows, exploring where AI can be used for their the team day to day process, and in addition to using it to . To as much as possible they no longer do any coding or operational changes by hand, and making that as a team decision is the biggest points. As the manager, the principal engineer, junior dev and senior devs are all onboard. They are exploring learning, and reinventing together. 

I hear a lot about "coding is not the bottleneck anymore", or coding is now free. there is a lot to unpack, in this statement. It sort of depends what you mean by coding, if you mean literally typing our code in particular syntax and calling APIs, that the statement. holds no longer the bottleneck. However, that isn't a developer jobs, a developer's main job is building working software. Writing code that is high quality, fufil the companies standards, and fufils the requirements of the stands, and can be released, observed and supported. Is the developer's job, whether that is encompassed in coding or not, can be debating I am sure it's not free and it is still a bottleneck. What is dangerous about the coding is now free, is people equare that to developers are not need, as they were there for coding. While this is easy to say, it requires some confiden and discilpie from leaders, it may require slowing initially, making sure all the team is learning (not just the early adopters), encouraging more avenues, like mob programming, actively making sure learning are going into the teams setup (maybe that developer anti-pattern is now the 100X). Rethinking review process and documentation processes. That reuiqes a lose buy from the manager and managers to give the empowerment for the team to do this retooling and reskiling. 

Teams already geared for high throughput have a head start



## You have two customers now. 

We used to have to optmize for just the developers, but now platform teams have two distinact customers with different needs, the developer and agent. We have to optimize for Developer and the Agent's experience. 

Before Agentic approaches, a good engineering organization has taken a custoer centric view to optimization. They built products that solves their customer problems, the developer, instead of falling to old trap of guessing what they need. With semainal atiles likes SPACE Accceltae there has a gowing recongiation of this with platform teams following this approach, or organization had create developer experinece teams. They employed VSMS, interesview, pairing with customers, conducted surveys. 

The definition of a how is developing has change. With the advent of applications, like lovable, that quickly turn designs or specs into working. The it is no longer just developer or engineers that are building, it is product manager, designers etc. While you can treat the applications like prototype, a lot of team is still fluent in a technical background, an effecitve team is embracing this, work with product mangers so set expectation on what are useful prorotype and setting up thier engineering platform, so that small changes can be quickly implmented by other members of the teams and reviewed by quality contoler agents and develoeprs. 

With both the changes to agentic experience and the defintion of who is developering it worth redigning the charter of deeloper experience teams and explores the customers jounreys for all these cases. 

## Ability to absorb changes and experiments 



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

