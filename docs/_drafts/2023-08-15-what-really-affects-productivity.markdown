---
layout: post
title:  "What really affects developer productivity"
date:   2023-08-15 15:36:13 -0600
categories: developer productivity
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">


In the [previous post][post1-developer-productivity], we examined what developer productivity means. How when we look at developer productivity we often look to development efficiency – how fast can we code & deploy? and items that are easily measurable. To explore this further, this is a list of imediments that developers end up wasting time and energy on. This list was accumlated from research during the early stage of productivity optimization projects, typically using a mixure of observation, root cause analysis, interviews, and surveys

#### What really affects developer productivity?

##### Overengineering
A developer is constructing a complex solution that is flexible or scalable when there isn't indication that will be needed soon. It could be building to handle performance requirements that will make little noticable difference to the customer experience, designing for future customer and traffic growth when the product is an MVP stage, or creating a complex class design to allow for every eventuality.

##### Misunderstanding of requirements
Building the wrong thing due to a misunderstanding of the desired outcomes and requirements of the feature, usually with their product or design counterparts. Either not enough information was shared, or it was not clear enough. Often due to a different interpretation of words or diagrams than what was intended. The misunderstanding gets caught late and introduces more rework if the developer doesn't collaborate often.

##### Not to Standard
A developer doesn't understand what quality (code, architecture, security, performance, testing) their architect, quality team, or colleagues are looking for. Code commits continually get rejected or deployments are sent back late in the cycle. Coding conventions and design principles are often not agreed upon and documented, and different people can have widely different viewpoints.

##### Building like a static project 
Product features are not split up in a way that allows for incremental product evolution. The feature requires multiple stories, and months go by before we can put it in front of a customer. There is a high chance that code will have to be rebuilt by the developer. A worse situation is that the team ignores metrics and feedback because of the sunk developement cost, so the low-value features stay in the code base, and makes the codebase more complex. 

##### Missing Required skills
The developer doesn't have enough experience or hasn’t completed adequate training in the technologies and tools they are using. They spend a lot of time learning while under pressure to deliver. If the team does not collaborate often (e.g. rotation or pairing), the problem could be discovered late.

##### Feature doesn’t have outcome success criteria 
Story does not have a defined metric they are trying to influence or a change in user behavior they are expecting to observe.  This makes it difficult for the developer to help to optimize the feature. They are forced to code to a specificaiton, losing potential valuable ideas or simplication suggetsionss. An antipattern, is a design created in a vacuum that is expected to be created to the pixel. 

##### Cannot find up to date information 
It is challenging for a developer to find information for existing, code, libraries and web service APIs. They waste time hunting, this might be both lack of support from the provider team that own it, or it might be findablity and quality of documentation. 

##### Development tooling is difficult to maintain
The developer spends a lot of time getting their development env (local or cloud) to work correctly & effencily, keeping it up to date, and reconfiguring for their various tasks they have to. 

##### Development slow and cognitively draining
Local compile times and testing times are neadlessly slow. The scripting to manage the local enviroment is confusing and complex. Developer finds it hard to learn, especcially when first joining and habbits haven't been formed. 

##### Lacking product & business context 
A lot of time is wasted creating detailed explanations in stories because the developer lacks a basic understanding of the business domain and the product strategy goals. The developer has doesn't have understanding of the product personas, and how the customer uses the product, everything has to documented, and "thrown over the wall".

##### The developer does not have confidence in their CI solution 
The test coverage (unit, integration & smoke) is not adequate and unstable, the developer does not rely on it, holds back pushing until they can manually test. They do not do the required refactoring for fear of breaking existing code. Another anti-pattern is the testing is out of phase and owned by another, team will also cause the developer not to rely on it. 

##### Deployments are delayed and opaque
After completing development, the feature is deployed & released at a later date by a different team, the feedback on changes of SLAs and product metrics is not passed on. This means that developers don't learn how their changes are affecting customers and production reliablity, so the quality of their work doesn't improve. 

##### Current software is low quality & low reliability
The developer spends a substantial amount of time doing support and bug fixes rather than new feature development. Navigating and developing in the codebase proves challenging due to its convoluted, intricate, and untested nature, extending the time for feature development. 

##### Developer is afraid to ask for help 
The developer may refrain from seeking assistance due to a lack of confidence. They could be relatively junior or new to the company, possibly grappling with imposter syndrome. In cases where the team hasn't fostered an environment of vulnerability, certain personalities might find it challenging to voice their concerns or seek help.

##### Unspired or Unmotivated
The developer's lack of productivity may stem from a lack of belief in the company's mission or a feeling of disempowerment due to their leadership and management. This may be due to not having enough information about the mission, or reasoning behind it being shared; it may also be due to personality & communication style. 

##### Not incentivized
The developer is less inclined to put in extra effort because they do not perceive personal benefits in terms of career advancement, personal development, or financial gain from their work.


The list is not in any order; we find most of these problems at every client. They are difficult things that you can't "solve"; you just have to continually work on to get better.  Depending on the context, they might affect it in different ways. For example, some of my clients productivity is completely sapped by the development enviroment, CI, and deployment issues. Other client's productivity is destroyed by lack of collaboration with the product and customers, and the developers are just building what they want. 

You would notice a few themes in this list: collaboration, motivation, environmental friction, feedback, and customer focus. These are very aligned with the ideas of developer experience (DevEX).

QUOTE FROM DEVEX

CONTINUES ON 

[post1-developer-productivity]:/developer/productivity/2023/08/25/developer-productivity.html














