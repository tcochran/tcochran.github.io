---
layout: post
title:  "What really affects developer productivity"
date:   2023-08-15 15:36:13 -0600
categories: developer productivity
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Merriweather&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet">

**Overengineering a solution**\
A developer is building a complex solution that is very flexible and scalable to handle a huge load, when which is likely not needed. It could be built to handle performance requirements that will make little difference to the customer experience. A complex class heirarchect allow for every eventuality when the initial design is not even proven out.

**Misunderstanding the product feature goals & design**\
Building the wrong thing due to a misunderstanding of the desired outcomes of the feature. Either the information wasn’t shared, or it was not clear enough, or there was some misunderstanding. This becomes worse if feedback cycles are long.

**Not building to the required standards**\
A developer doesn't understand what quality (code, architecture, security, performance, testing) their architect, quality team, or colleagues are looking for, and continually gets code commits rejected. Code standards are often not agreed upon, and different people can have widely different viewpoints.

**Delayed feedback**\
Product features are not split up in a way that allows for incremental product evolution. All software requirements are hypotheses until a customer uses it. If the feature requires multiple stores, or months go by before we can put it in front of a customer, there is a high chance that a large amount of code will have to be rebuilt. A worse situation is that because of the sunk cost, the team ignores metrics and feedback so the low value features stay in the code base.

**Required skills**\
The developer does not have experience or haven’t completed adequate training in the tools they are using, and spends a lot of time learning while under pressure to deliver. If the team does not practice any rotation or pairing, the problem could be discovered late.
