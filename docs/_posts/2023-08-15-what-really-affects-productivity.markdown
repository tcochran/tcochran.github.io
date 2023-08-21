---
layout: post
title:  "What really affects developer productivity"
date:   2023-08-15 15:36:13 -0600
categories: developer productivity
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">


In the previous post, we examined what developer productivity means. How we often look to only to aspects relateated to improving developement efficiency or items that are easily measurable.  To explore this futurer, this is a list of issues that developers end up wasting time and energy on. This list was accumlated from research during the early stage of productivity discovery projects, using 1:1 and surveys to capture information.

##### Overengineering
A developer is constructing a complex solution that is flexible and scalable when there isn't indication that will be needed. It could be building to handle performance requirements that will make little difference to the  customer experience, designing for future customer and traffic growth when the product is an MVP, or creating a complex class design to allow for every eventuality.

##### Misunderstanding the product feature goals & design
Building the wrong thing due to a misunderstanding of the desired outcomes of the feature. Either not enough information was shared, or it was not clear enough. Often due to a different interpretation of the meaning of words or visuals than what was intended. The misunderstanding gets caught late and introduces more rework if the developer doesn't collaborate with product and design counterparts often. 

##### Not building to the required standards
A developer doesn't understand what quality (code, architecture, security, performance, testing) their architect, quality team, or colleagues are looking for. Code commits continually get rejected or deployments are sent back late in the cycle. Coding conventions and design princles are often not agreed upon and documented, and different people can have widely different viewpoints.

##### Delayed Feedback
Product features are not split up in a way that allows for incremental product evolution. The feature requires multiple stories, and months go by before we can put it in front of a customer. There is a high chance that  code will have to be rebuilt. A worse situation is that the team ignores metrics and feedback because of the sunk developement cost, so the low-value features stay in the code base.

##### Missing Required skills
The developer does not have enough experience or hasn’t completed adequate training in the technologies and tools they are using, and spends a lot of time learning while under pressure to deliver. If the team does not practice any rotation or pairing, the problem could be discovered late.

##### Feature doesn’t have outcome success criteria 
Story does not have a defined metric they are trying to impove or a change in user behavior that they are expecting to observe, this makes it difficult to the developer to help to optimize. They are forced to code to a specificaiton, losing potential valuable ideas. 

##### Cannot find up to date information 
It is challenging for a developer to find information for existing, code, libraries and web service APIs. They waste time hunting, this might be both lack of support from the team that own it, or it might be finablity and quality of documentation. 

##### Development tooling is difficult to maintain
The developer spends a lot of time getting their development env (local or cloud) to work correctly, keeping it up to date, and reconfiguring for their various use cases. 

##### Development slow and cognitively draining
Local compile times and testing times are neadlessly slow. The scripting to manage the local enviroment is confusing and complex. Developer finds it hard to learn, espeically when first joining and habbits haven't been formed. 

##### Lacking product & business context 
A lot of time is wasted creating detailed explanation in stories because the developer lacks a basic understanding of the domain and the product goals. The developer has doesn't have understanding of the product personas, and how the customer uses the product, everything has to documented, and "thrown over the wall".

##### The developer does not have confidence in their CI solution 
The test coverage (unit, integration & smoke) is not adequate and unstable, the developer does not rely on it, holds back pushing until they can manually test. They do not do the required refactoring for fear of breaking existing code. Another anti-pattern is the testing is out of phase and owned by another, will also cause the developer not to rely on it. 

##### Deployments are delayed and opaque
After completing development, the feature is deployed & released at a later date by a different team, the feedback on changes of SLAs and product metrics are not passed on. This means that developers don't learn how their changes are affecting customers and production installation so the quality of their work doesn't improve. 

##### Current software is low quality & low reliability
The developer spends substantial amount of time doing support and bug fixing rather than new feature development. Navigating and developing in the codebase proves challenging due to convoluted, intricate, and untested nature, extending the time for feature build.s 

##### Developer is afraid to ask for help 
The developer may refrain from seeking assistance due to a lack of confidence. They could be relatively junior or new to the company, possibly grappling with imposter syndrome. In cases where the team hasn't fostered an environment of vulnerability, certain personalities might find it challenging to voice their concerns or seek help.

##### Unspired or Unmotivated
The developer's lack of productivity may stem from a lack of belief in the company's mission or a feeling of disempowerment due to their leadership and management.

##### Not incentivized
The developer is less inclined to put in extra effort because they do not perceive personal benefits in terms of career advancement, personal development, or financial gain from their work.












