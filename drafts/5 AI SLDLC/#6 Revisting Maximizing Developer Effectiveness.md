# Maximizing Developer Effectiveness in the AI era

Five years ago, I wrote Maximizing Developer Effectiveness, comparing the practices I saw at highly effective teams versus less effective ones. With the explosion of LLMs and AI coding agents over the last few years, revolutionizing software development, I have been curious if the advice in the article is still valid. Are feedback loops, developer happiness, and cognitive overload the right things to optimize for? Do we still need an efficient developer experience, when we can have agent swarms running overnight performing complex tasks? Has developer productivity been solved, so that our focus should now be on maximizing team effectiveness, or maximizing agent effectiveness?

For the last couple of years I have been helping, observing, and having discussions with teams adopting AI tools. Some struggled and rejected it, some got mild improvements, and others skyrocketed. Seasoned developers who started out completely against AI became, a few months later, some of its greatest proponents. Along with a few collaborators, I will try to answer (or at least explore) these questions. Rather than one long article, it will be a theme: a set of short pieces sharing what we are learning from the organizations we work with. We are all still figuring out this fast-moving technology, so these won't always be fully coherent strategies, just what we have observed and what has worked.

We are going to start the series by exploring some of the hypotheses from the original article, before going deeper in subsequent articles.

<!-- ===== MINI-ESSAY 1: Developers' New Role ===== -->

## Developers are still critical in software development

The previous hypothesis was: a motivated developer is a productive one. They are expensive and difficult to hire. An engineering leader should optimize for their sentiment. To maximize output they need to create an environment that nurtures their talents. The industry has changed dramatically since then. If agents are doing the coding, what is the developer role?

Developers are still critical. When you look closely at projects that are reported as being coded entirely by AI, there are developers and architects driving and feeding the AI agents. They still write requirements with colleagues and customers, and use their experience and expertise to thoughtfully design evolvable applications. They give technical direction, although now it’s often in prose rather than code. They review code, find quality issues, and harden it for security and scalability. They operate the software, building a picture of customer behavior and usage profiles to continuously improve the application, and debug whatever comes up. They even contribute product ideas. These are tasks that have always been a part of developing quality and valuable software. It is what we actually pay effective developers to do; coding is just one ingredient, albeit a very important and time-consuming part. Some of the misunderstanding comes from what we mean by coding, and the value that developers bring to a product development team. The danger is that if we equate the developer to just being a coder, robotically fulfilling requirements, it becomes understandable why the developer role might be questioned. 

The outcomes are the same. The shape of the work has changed completely. In a team that is using AI effectively, the coding is easier and quicker. No longer do developers have to remember APIs, syntax, or basic algorithms. Creating unit tests or examining logs to debug issues can be delegated to an agent. The low value tasks, the small annoying toil that interrupts flow and has an outsized effect on productivity, are being reduced, with platform teams knocking them off one by one. Tasks like fixing a build, changing configuration, or producing on-call reports are taken care of by custom agents. 

LLMs and coding agents have reached a quality where a well-scoped task with a clear specification and an efficient harness can be written entirely by an agent, with minimal steering from a developer. This has shifted the emphasis of the developer onto writing the requirements and building the harness. Developers on effective teams have become more disciplined in putting their thoughts down, creating acceptance criteria, technical design, explaining the goals of a feature, giving richer context to agents and colleagues, and avoiding silos of knowledge. 

It is wrong to think of AI agents as purely execution machines; teams also use them to innovate: assisting ideation, performing research, building quick prototypes to test with customers, or acting as a rubber duck to keep the developer focused.


<!-- ===== MINI-ESSAY 2: Absorbing Change / Bottlenecks Amplified ===== -->

## Existing developer bottlenecks are amplified. Teams already geared for high throughput have a head start.

This speed only comes if our existing engineering practices and platform can absorb the amount of change produced. Coding tasks are completed faster, which puts pressure on downstream systems and processes. The existing issues that weren't previously prioritized become bottlenecks. Legacy technical debt, poor documentation, ineffective testing practices and ineffective collaboration are amplified and exposed by agents. If we aren't careful, we have made coding cheaper but shifted the bottlenecks, so the end result is only marginal gains for customers.

For example, if the coding portion of a task now takes half a day instead of 3 days, the code review that took a day on average is now, more often than not, longer than it takes to develop the feature. Or a flaky E2E suite that takes 4 hours and often requires rework. With more changes coming through, teams can become overwhelmed. They either slow down at these bottlenecks or, worse, drop their quality standards and let unreliable, unvalidated changes reach customers, especially under top-down pressure to show the value of AI. 

This really isn't about AI. It's about effective engineering: being able to move at speed, safely. There have been 20 years of improvement in this field, from teams learning what it takes to work as large, nimble teams. These practices are, for the most part, what you need to maximize the impact of AI. The companies that already had them in place, the ones closer to "higher effectiveness" in my old table, have a head start: they can safely absorb the change and turn AI into real impact.  

None of these were built for AI. They are the investments teams made to keep their own developers productive, and the same foundations now make agents productive too: 

* **DevOps and continuous delivery**: checks that let a change reach production with minimal human interaction, so the team absorbs the increased flow of changes.
* **Cloud-based developer environments**: the same technology spins up an agent environment. 
* **A balanced test pyramid with good observability and MTTR**, instead of large flaky regression suites, reduces the risk AI introduces. 
* **Modularized codebases**: a developer can work on isolated changes without breaking others, which lets agents work in parallel.
* **API-first services with self-service onboarding**, rather than ticket-based handoffs, can be driven directly by an agent. 
* **Discoverable knowledge**: documentation and context made consumable by an agent, not just a human.  

There is still work to make these consumable by an agent rather than a human, but they are the capabilities that let teams benefit from AI quickly. It is not all bad news: AI also makes it easier to fix issues in your development platform, or the architectural problems you have been putting off. For a leader who wants real impact from AI, this means understanding the team's maturity on these practices and investing to improve them, rather than hoping that adopting coding tools alone will move the needle. 



<!-- ===== MINI-ESSAY 3: Platform Has Two Customers ===== -->

## You have two customers now: the developer and the agent

Over the last five years, helped by frameworks like DORA and SPACE and tools like Backstage, the industry recognized that developer experience matters. It changed platform engineering, which began taking a customer-based approach. We would employ techniques from UX to try to understand the motivations of developers and what they actually need, rather than assuming they already knew (a common anti-pattern). Companies created developer experience departments and hired heads of developer experience. Now, with the rapid arrival of AI, those platform teams are struggling to catch up: they have at least two customers, the developer and the agent (and probably more). It is no longer enough to optimize for developer experience; we have to optimize for the agent's experience too. 

Now, with the rapid arrival of AI, those platform teams are struggling to keep up with the changing shape of the developer's job, agents consuming their capabilities, and non-developers using the system. Platform teams need to change their mission from optimizing developer experience to also focusing on agentic experience and builder experience. 

For builder experience: previously it was very difficult for non-developers to build; they simply couldn't. Moving away from thinking of the person as a coder or a developer, and expanding it to a builder, allows us to think more holistically about how to build software and get it in front of customers. If you treat non-developers as a nuisance, you will end up with a shadow IT problem, so it's better to embrace it and consider the tooling for all the personas. This means we have to do more research, more VSM, understanding jobs to be done and personas. We don't have to start from scratch: over the last couple of years there has been a massive amount of experimentation, often in people's spare time, and if we can harvest those tools and ideas, turn them into hardened capabilities, and work with the motivated individuals, we have a head start. It's important to understand how a product manager and designer are creating prototypes. There are cases where a builder creates a prototype that then has to be rebuilt and hardened, but there are other places where they should be writing specifications that can be fed directly to the agent, collaborating with a developer on the design. For some subsets of changes, a developer may have very minimal involvement, for example small changes, particularly to UI, when there is a solid design system and patterns in place. This assumes you have a good harness with your engineering principles in place, and a solid safety net: regression tests, observability and good MTTR. 

Does this mean developer experience is dead? No. As we said at the beginning, the role is still critical. The same optimization principles and techniques we developed for developer experience can be applied to a broader builder definition, and to agents. 


<!-- ===== MINI-ESSAY 4: Agentic Friction / Uncanny Like Humans  (was buried inside Two Customers — now its own section) ===== -->


Every developer has gone through a bumpy journey to understand how to work with AI agents effectively. There is a whole new set of skills: context engineering, specification writing, harness engineering. There is an entirely new workflow their teams must adapt to, and it doesn't come easily to developers who have spent 10 to 20 years honing their habits and muscle memory.

One of the great things about AI coding tools is that they just work. The entry point is simple. The developer launches an IDE with an AI plugin and keeps coding, and it starts offering suggestions. Moving to an agentic flow, you can just tell the agent what you want it to do, and it will code, build and write tests. It feels like magic. Immediately the developer is super productive, or so it appears. 

Agents have an uncanny valley quality: they appear to behave like human developers, but not quite. They slot easily into existing developer workflows and can do the tasks a developer does, because they have been trained on millions of examples of code and documentation written by developers. That training cuts both ways: they learn our common software practices, both the good ones and the bad ones. They are often billed as co-workers, or AI SDEs. This labeling is dangerous, because they behave quite differently, and it undersells what a human developer does.

One common example is getting the agent to follow good testing practices. This can be difficult; without guidance it will always create brittle, mock-based tests. This is because it's been trained on thousands of codebases where testing was an afterthought, inserted to hit a coverage number, which it now mimics.

Despite being created in research labs, they aren't always the most scientific themselves. They are very confident, and trust their own training too much, taking 10 steps forward when they should take 1. They will present a theory as absolute fact, even though they haven't verified it. They won't execute the functionality. They will write the code and present it as done and working. This is because the manual exploratory validations that developers do to validate most features are not in their training set. Agents will often write defensive code without telling you, so your application silently continues in a broken state rather than erroring. These are just a few examples. Every developer has their favorite bugbear. 

There are a lot of minefields that a new developer has to walk through as they learn. That is why the initial productivity can be misleading: coding output goes up, but teams start to hit these problems in review, or at worst as bugs in production. If we don’t address these tendencies, teams lose confidence in the tools. It's important, as a collective, to understand the limitations of the agent's training set. However, we should also remember that models are improving, and are released with different personalities. This constantly moving target also presents a learning challenge for developers. 

We can also correct for this. The agent can learn. If we treat AI exactly like a developer it will continue to cause problems. The trick is to adapt your workflows to how it's built. 

There are well-known principles that the community has developed:

*Signals* An agent is blind unless it has access to signals. Typically it will start with the code, build and test, so it should have access to logs for all of those. However, to be able to problem-solve, it should also have access to environment logs, analytics, and so on. 

*Small, focused scope* The agent's context is limited. Even with larger contexts, it still has extreme recency bias and will ignore things. If we can limit what we are asking the agent to do, it is more likely to follow your instructions and reduce recency bias. This is also key to reducing the number of tokens. 

*Instructions* We don't want the agent to have to make decisions. If we can give it specifications that are deterministic, illustrated through clear goals, acceptance criteria and examples, it will be more likely to follow them. Similar to [continuous delivery](https://martinfowler.com/bliki/ContinuousDelivery.html) best practice, teams break features down into small tasks that each produce a PR and are deployed to production, often small enough to do in an hour. 

*Access to succinct background information* We can give the agent context around the task and its background; however, this should be succinct. It shouldn't have to read a huge wiki, hunting and searching. Teams are creating ways of collecting enterprise information and providing it quickly to agents. 

*Platform capabilities exposed through Skills and MCP* Moving tasks and instructions into Skills and MCP, so an agent only reads them when it needs to rather than holding a large context upfront, also means it is more likely to follow them. 

A way of looking at all of this is information. We are just feeding the agent information, what has become known as [context engineering](https://x.com/karpathy/status/1937902205765607626), a term popularized by Andrej Karpathy and Tobi Lütke. Böckeler did a good [write-up](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) applying it to coding agents. The more relevant, high-quality and focused we can make that information, the more likely we are to get a good result. 

### System thinking, rather than supervising

I think these principles are well known; however, they take work to practice. Applying them requires discipline and a change of emphasis for the developer. The developer spends more time at the beginning of the task, honing it so it is as clear as possible, and continuously improving the agentic experience. This is different from what developers are used to doing. They like to be working with the code, expressing their ideas through code rather than prose, so this skill and discipline takes work. We also have to fight against the "slow machine" like experience of AI, the urge for "just one more try", and instead work on improving the overall system, particularly for less complex tasks. The effective developer treats every run they deploy as a test of the system they have created, practicing kaizen, making small improvements for the next run rather than continually trying to supervise. Over time they reduce the number of coaching interruptions they have to make. 


### Reducing Technical Debt 

Teams find that agents introduce [technical debt](https://martinfowler.com/bliki/TechnicalDebt.html) and quality problems, so-called AI Slop. Conversely, they also find agents are really good at fixing tech debt, performing migrations to new library versions, clearing up anti-patterns, even migrating solutions to a completely different language.


There is one fundamental reason: there is a lot more code being produced. The whole concept of technical debt is that no matter how much you try to avoid it, if you take a pragmatic, evolutionary approach to product development, you will incur debt. This is now happening at a faster rate: more product changes means more technical debt. We have to identify and pay down that debt even faster, otherwise, as teams are finding, it quickly spirals out of control: the agents get bottled up and those gains are erased. In fact, as feature development becomes easier, the team should spend more of their time on the deployment platform, testing infrastructure, the harness and the architecture, to make sure it scales to a large product team, which is effectively what you now have with agents. So it isn't that agents produce more tech debt, it's that we aren't paying it down quickly enough. 

Your ability to spot and measure technical debt will help a lot here, as we use these signals as andon cords, telling us when we need to slow down and switch to working on these continuous improvement tasks. Metrics such as MTTR and linting are invaluable, along with the thoughtful judgment of experienced developers. And of course, having a good way of regularly assessing and prioritizing the backlog of tech debt is even more important.

<!-- ===== MINI-ESSAY 6: AI Readiness Check ===== -->

## A simple AI Readiness Check

One surprising thing teams find as they move to an agentic workflow is the number of manual tasks developers are still doing to get changes out. Often these are little steps to keep the flow going, quick moments of judgment. Some examples: restarting a dev server when it's stuck, refreshing test data, or checking the API schema.  

When a team first moves to an agentic approach, the developer keeps doing these things. I call this hand-feeding the agent, still spooning it perfect little morsels. We haven't taught it to eat yet (let alone to fish, grow crops or farm). It doesn't have the information to overcome these obstacles.

There are also little steps that an agent will figure out how to move forward on, but in an inefficient manner that wastes turns and tokens, like trying to find the error message in a log file or reacting to some poorly documented interface. This agentic friction, these little inefficiencies, will compound over a day's work, in the same way micro-feedback loops do. 

What's interesting is that most of these inefficiencies were a problem for developers too, but they learned habits around them, so it wasn't much of a cognitive burden. As we turn a developer experience into an agentic experience, it's an opportunity to harden the flow, making it efficient and bulletproof for an agent to do these things, part of optimizing your harness. 

One of the difficulties with doing DevEx research is that it can be really hard to find out what the real problem is. Developers don't often want to show what a bad day looks like. We can observe, pair, and run things like diary studies, but it's slow going. As we work with agents this becomes easier: a developer can easily analyze a session they've done to find opportunities. A very effective approach is to ask the agent to conduct a retrospective of the last few weeks of a developer's sessions, finding places where the developer coached the agent and where things were a struggle. Another easy way to generate improvement ideas: when an agent finishes a task and still has its context, ask it to do a retrospective on what it just did.


### Litmus Test

Making this information available to a platform team is gold. However, this often just surfaces tactical issues in the day-to-day. Despite the DevOps movement, the reality is that most teams haven't shifted left as much as they would like, and can't easily get a change out without human intervention and rework. This is often for good reason. It might be an old system, or perhaps the system is finely distributed, or just a focus on product. 

If we want to see the impact of AI, it has to be able to control most of the workflow to get to production. A simple test for your AI readiness is to take a simple task, ideally something deterministic, and take it to the point where the change is "ready for release". This can mean different things to different teams: it might be after checks have run on the PR, or after an overnight regression has run, or once we've integrated with other teams and the QA team has looked at it. The point is it has met the quality bar and we are OK putting it in front of customers. 

We can create a small task. Ask the agent to work on it. Do not give it any additional context or details about the task that aren't already in your task and your dev env. Record everything the developer has to do to keep the agent on track to complete the task, human interventions, gathering data from the developer's environment as you go. Also note down instances where the agent is struggling: doing multiple commands due to confusion or inaccuracy. This is the first goal: how can we get a simple change, one with no subjectivity, all the way to production? Likely this is a cross-team effort. After we have done this, the number of interventions and the agentic friction are your baseline to improve upon. We should also record the time taken and tokens, but that's less important. 

The next step is to go through the human interventions and find the root cause. It may surface many different issues related to the local developer setup, the context, the project management system, the integrations, or the platform it runs on. Some of these things your team can change; others will become feature requests for your platform engineering teams.

This test is a classical qualitative flow analysis, but modified for an agentic era. It is now even more important to do this flow streamlining. It surfaces the friction the team had been quietly absorbing for years. The team knew it was there, the engineering manager knew it was there, but it never got prioritized because the developer found a way around it. The agent doesn't have the developer's judgment about which workarounds are acceptable; it either fails, or worse, succeeds at something subtly wrong. The pressure to fix the underlying friction is finally there.

After the simple task, the test can be expanded to more flows:
* What it takes for an agent to onboard onto a codebase, and what instrumentation has to be added
* How an agent debugs a production issue
* How we spot performance and security issues
* More complex changes that require technical design and approval
* Subjective changes that require input from stakeholders, like design and marketing

While these seem very simple and obvious, I often see the common reaction: to overcomplicate, to create sophisticated metrics and systems, when cross-team collaboration and focused investment are actually what is needed. However, as you get more sophisticated, you can automate the analysis and retrospective, running it asynchronously to perform analysis and generate tasks.



<!-- 
The bar I have been using with teams is: the agent should be able to do what the developer can do. End to end, from a task in the backlog through to working software in a pre production environment, without the developer having to intervene.

So how do you know your developer experience and platform is ready for AI? You can turn that bar into a simple, customer-focused litmus test (the customer is both the agent and the developer).

Take a small task out of your backlog, ideally something simple: a small improvement, something deterministic and not subjective. Something it would have taken a developer under a day to complete.

Ask the agent to work on it. Do not give it any additional context or details about the task that isn't already in your task.

Record what the agent does. Note down everything the developer has to do to keep the agent on track to complete the task. We call these "human interventions".

The end goal is that the software is in a pre-production environment and in a working state. This is important: if the end goal was generating a PR, we can't say whether that software actually fulfills its task and meets your company's quality bar.

Also note down instances where the agent is struggling: doing multiple commands due to confusion or inaccuracy.

After we have done this, we should have a count for human interventions and agent friction. This is your baseline that we can improve upon. We should also record the time taken, but this is less important.

That count isn't an AI problem. It is the friction the team had been quietly absorbing for years. The team knew it was there, the engineering manager knew it was there, but it never got prioritized because the developer found a way around it. The agent doesn't have the developer's judgment about which workarounds are acceptable; it either fails, or worse, succeeds at something subtly wrong. The pressure to fix the underlying friction is finally there.

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

For bonus points, you feed the information collected into an agent to suggest ideas and make small improvements to how it wants to understand information. -->

<!-- ===== MINI-ESSAY 7: Metrics — Tokens, Adoption & Measuring Impact  (9 + 10 merged into one) ===== -->

## Are tokens and adoption numbers the new lines of code metric?

Part of my original article, and the follow-up, was to encourage teams to measure and optimize the things that matter, and if you don't know what to measure, to start with research and understanding. This was in response to an over-emphasis on what SPACE called activity-based metrics, such as lines of code or number of PRs. While monitoring trends and exploring anomalies are useful, teams over-emphasized these metrics because they are concrete and easy to measure: we don't have to think about the messy, human side of software development. In the last few years the activity-based metrics have returned, with companies using adoption numbers or number of tokens. While they are useful for a platform research team to monitor, they are easy to gamify, as we will explore. In the subsequent articles we will explore some of the key feedback loops and jobs to be done that we should measure to improve the agentic experience. For example, adding an agent to a codebase has similarities to onboarding a human developer, but is also different, and should be a lot faster. We will also look at what qualitative studies we can do to understand developer and agentic behavior, and to assess readiness.

That being said, token use has to be managed effectively. An efficient developer experience is no longer just measured by time and quality. Efficient token use will improve both context management and the cost of the solutions you are building (particularly workflows not covered by a subscription). Just don't look at that metric alone.

It does feel like déjà vu, as we continually look for the magical productivity metric that doesn't really exist. The problem we have is that in order to understand the impact of AI, we have to understand the impact of your software, which not all teams are set up to do. We can look at impact from a purely time-saving point of view: a developer can now do a task quicker, so there is more time. We can also look at the amount of software produced. As we adopt AI, those are the things we should look at. As a company matures, and we are consistently getting high-quality changes to production, the measurement question has to change to impact, and the amount of experimentation we have enabled.


<!-- ===== MINI-ESSAY 8: Feedback Loops  (Change Confidence is the lead example) ===== -->

## An agent needs confidence its changes will work

The central thesis of my original article was to focus on the outcomes developers are trying to accomplish, through a series of feedback loops: validate my code change works, validate it integrates correctly, etc. They are small, micro feedback loops, but they compound over time to produce higher quality work faster, and better outcomes for customers.

To get the best out of AI, agents need short quality validation cycles. Without them, the agent is guessing, and we have all experienced how agents love to infer and guess when they don't have all the right information. If we provide a concrete way to validate and get signals, it drastically improves the quality. Often when teams start, they have the agent writing code and tests based purely on the codebase. But that isn't how a developer works: they get information from colleagues, from the wiki, from logs, from regression test output and CI. Ideally the agent can access all of these, and has been trained on how to use them.

The idea of feedback loops can be applied in a lot of places. When an agent has a clear goal, it is very good at optimizing toward it. Folks have started to write about how the secret to agent development is helping the agent do that work: setting up the loop so it can work for itself. We can think of it like an evolutionary algorithm: if we can define a fitness function, then the system will evolve toward it. It doesn't work out of the box: agents often give up after a few tries, or will rabbit hole into a solution. We have to find ways to keep it on course. This is something I certainly agree with, and it was a core part of the micro and macro feedback loops.

In the same way a developer would benefit, the more confident an agent can be that a change will work and be valuable, the more productive it will be. The earlier this validation can take place, the fewer slow rework cycles and unnecessary developer interventions there are. This is easy to say but hard to implement. Having ineffective validation and verification is probably the number one barrier. A lot of organizations probably don't know that they have a problem. They have 100% code coverage on their microservice. What has happened is that the developer actually makes up for the weakness in the validation. They are doing a lot of manual work to verify.

When researching teams, you have to be careful not to just ask about certain practices, but to really understand what it takes to get something out. This certainly isn't a new topic (here is a video from 2008 of me talking about this problem), but a lot of development has been slow; it hasn't been an obvious bottleneck.

A developer still has to explore, by actively supervising and iterating with agents. For complex or discovery tasks, it's critical that the developer actively supervises, monitoring and pairing with the agent to offer quick in-the-moment feedback. A lot of moments of inspiration for a developer come from spending long periods thinking about a problem domain. Trying to do this entirely ahead of a project, in a long specification, is hard and unnatural for a developer; products have to be discovered and evolved. We have been down the road of too much up-front planning before. In addition, trying to juggle too many parallel tasks will result in bugs and missed innovation; after all, the developer, similar to an agent, has a limited context window too.

<!-- ===== MINI-ESSAY 9: Team Is All In ===== -->

## Highly Effective Teams using AI are all in

The teams that become more productive (and we explore the signals of this later on) all share one thing: they actually embrace AI. Trialing is over. The teams that are actively transforming their workflows are exploring where AI can be used in the team's day-to-day process. As much as possible, they no longer do any coding or operational changes by hand, and making that a team decision is the biggest point. The manager, the principal engineer, junior devs and senior devs are all on board. They are exploring, learning, and reinventing together.

I hear a lot about "coding is not the bottleneck anymore", or "coding is now free". There is a lot to unpack in this statement. It sort of depends what you mean by coding. If you mean literally typing out code in a particular syntax and calling APIs, then the statement holds: that is no longer the bottleneck. However, that isn't a developer's job. A developer's main job is building working software. Writing code that is high quality, fulfills the company's standards, meets the requirements, and can be released, observed and supported: that is the developer's job. Whether that is encompassed in "coding" or not can be debated, but I am sure it's not free, and it is still a bottleneck. What is dangerous about "coding is now free" is that people equate it to "developers are not needed", as if they were only there for coding. While this is easy to say, it requires some confidence and discipline from leaders. It may require slowing down initially, making sure all the team is learning (not just the early adopters), encouraging more avenues like mob programming, and actively making sure learnings are going into the team's setup (maybe that developer anti-pattern is now the 100X). It means rethinking review and documentation processes. That requires buy-in from managers to give the team the empowerment to do this retooling and reskilling.

<!-- ===== MINI-ESSAY 10: Experimental Approach / Studio Model ===== -->

## AI allows us to be more experimental

If we address the issues we have mentioned so far, then teams will see real productivity benefits, in terms of engineering power. The question then becomes how to transfer that to your customers.

We need a new operating model. A useful framing is to think about software development as a Studio, like a film studio or a design agency. Historically, software building was treated like a factory, but that is the wrong analogy, as we aren't creating the same thing over and over; we are creating something new and novel. There are some processes that should be "factory-like", built to an exacting quality every time. The Studio is also a leveler: everyone is treated as a builder who can contribute and build ideas. But this means we have to empower them, we have to share information and give access to customer research.

AI has also allowed non-developers to become builders. We want to embrace this and let them be part of the software development process. We build the experimentation infrastructure so that new ideas can be tested with customers who are open to it, and we have analytics in place to learn. With the right safeguards in place, non-developers can contribute small changes. Does a developer need to make a change to a design system? Perhaps not, but there has to be a way to review it.

The notion of a team has changed. When you can quickly pull together a cross-functional pod, have prototypes in days, and MVPs in weeks, the days of needing a big team with two pizzas to feed it are gone. There still needs to be connective tissue between a diverse set of people and skills, but it doesn't make sense to have long-lived tiny teams. Instead, adopt short-lived pods. They are formed around an idea or concept, a hypothesis. If the team thinks it is worth investing in, they quickly build the product. The pod only exists for as long as it takes to validate that the idea is useful.

The team will also have existing products to maintain and operate. As a collective, they can apply AI to reduce that operational burden, building on top of the platform services. They can also assess how much due diligence to put ahead of launching a project. The processes teams used to follow, the planning, the reviewing and rubber stamping, were in part put in place to protect the investment of developers' time. Instead of a long design and documentation review session, can the designer, developer and agent pair together to apply changes? This requires discipline, however, as we know it is very hard to throw away features. We also have to make sure we listen to our customers. Adding lots and lots of new features can make the product complex and overwhelming.

We'll be exploring the ideas of becoming more experimental with AI, and the Studio model of development, in a follow-up article.

## What's next

This is the first piece in a series. In the next ones I will look at how the day-to-day SDLC changes when agents are doing most of the execution, what the Factory vs. Studio framing tells us about where AI fits in the team, and the patterns I have seen in teams that have made the jump. These are observations from teams I have worked with, not a finished theory. I will be wrong about plenty. The point is to put it all down while it is fresh, and build from there.
