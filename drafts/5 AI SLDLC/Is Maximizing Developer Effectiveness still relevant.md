

**Maximizing Developer Effectiveness in the AI era.** 

Five years ago, I wrote [Maximizing Developer Effectiveness](https://martinfowler.com/articles/developer-effectiveness.html), comparing the practices I see at highly effective teams versus less effective ones. With the explosion of AI coding agents, I have been wondering whether the advice is still valid. Are feedback loops, developer happiness, cognitive overload, etc. the right things to optimize? With agents doing the work would the right focus be maximizing team effectiveness with AI agents or maximizing agent effectiveness?

Developers are still playing a critical tool. At least for now. Even with reports of projects being built by AI, “with all code written by agent”, if you look closely, there are developers and architects, closely designing, reviewing and giving precise technical instructions. However the work developers do day-to-day is changing. This opens up lot of new questions: What are the new developer outcomes and jobs to be done, and how should we optimize them? What is the new AI developer workflow? How do teams function and collaborate in the AI era? 

I have spent the last couple of years helping, observing, and having discussions with AI Native teams\*. I have seen teams struggle and reject AI, some get mild improvements, and others skyrocket. I have seen seasoned developers being completely against it, and then a few months later be one of the converted. To try to answer (or at least explore) these topics. Rather than a long article, I will treat this more like a theme, and share the learnings I have in a set of short articles. As we are trying to understand this fast-moving AI landscape, they won't always be fully coherent strategies, just what I have observed and some of the tips I have employed. 

We will start this exploration by looking at the original concepts of the article.

**Feedback Loops**

My central thesis was to improve developer experience by focusing on the outcomes of developers through a series of feedback loops that make up the main tasks a developer is trying to accomplish — validate my code change works, validate it integrates correctly, etc. Particularly the small ones (I called them micro feedback loops, it didn't really catch on), the ones that identify paper cuts, are crucial to optimize for AI. I first thought, why does it matter? You can just kick off the agent and it can work while you are sleeping. To get the best out of AI, agents need short, quality validation cycles. Without them, the agent second-guesses, and we know agents love to infer when they are presented an output without the right information. If we provide a concrete way to validate, it helps in some ways to reduce the hallucinations. This typically mirrors what a developer does to validate when they do exploratory testing or run unit tests. A lot of teams pre-AI did their validation manually and only wrote tests before check-in. The agent should also be able to try the functionality, perform ad hoc testing, and load test data. 

**Avoid Handfeeding the agent** 

AI agents will follow the path the human developer does, it will utilize the exisiting developer experience, They have been trained on instructions, knowldege and framekwork design for humans. In most developer experience’s there is friction that we didn’t realize. Some friction is obvious a test suite taking 20 mins instead of 2mins, but other friction that you do less often a developer may not think of it as friciton, for example loading test data when it’s stale, looking scrolling through build logs to find the failure of a build. They are actions the developr is doing to keep the flow of work going.These a small tasks. Some of the friciton may stop the Agent complely, other may slow down the agent or produce inaccurate results. 

If you application is split up into mutliple components, I need to change the API, but the Agent hasn’t taught about how to work that API, we might be thinking that the scope of the Agent is just the component we are working with. Again this is firciotn that was apparent with humans, the action of working with multiple components spread across differents repos, can result it lots of boiler plate code, and busy work keeping them in sync. 

Basically, the agent should be able to do what the developer can do.I see an evolution with developers in maturity. A developer starts by having the agent do the functionality and unit testing, but might have to intervene. I call this handfeeding the AI. To be honest, it doesn't really have much to do with AI. Less effective environments are not automated; they require a developer to be continually running scripts or doing swivel-chair integration between systems.

There is a class of developer friction, that we no longer have to fix so much, as Agents are very good at it. Particulray lbarous tasks, 

