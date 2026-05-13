---
title: "Spiking PostHog on a static Astro blog"
date: 2026-05-13
tags: [analytics, posthog, astro, devex]
description: "Notes from wiring PostHog into this blog as a low-stakes spike before adopting it in Studio AI."
draft: true
---

I rebuilt this site on Astro partly so it could double as a spike for [PostHog](https://posthog.com/) — the same tooling I want to evaluate for Studio AI. Studio is the higher-stakes target; the blog is the place to find the sharp edges first.

## What I wanted to learn

- The SDK shape — what does `posthog.init` actually expose, and how much do you have to wire up by hand?
- Whether the autocapture + session replay defaults are reasonable for a content site.
- How feature flags feel end-to-end from a small client.
- Privacy posture — can I run this cookieless without losing the parts I care about?
- Core Web Vitals impact.

## Setup

The integration is one file: `web/src/components/Analytics.astro`. It reads `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_HOST` from the build environment and renders a single client `<script>` that imports `posthog-js` and calls `posthog.init`. The component is included from `BaseLayout`, so every page picks it up. If the key is unset the component renders nothing — local dev stays quiet by default.

```astro
posthog.init(key, {
  api_host: host,
  person_profiles: 'identified_only',
  persistence: 'memory',
  disable_session_recording: false,
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true,
});
```

## Cookieless: yes

`persistence: 'memory'` means no cookies and no `localStorage`. Identity does not persist across page loads — each pageview is effectively a new anonymous user. For a personal blog with no auth and no funnel, that's fine: I want pageview counts, referrer breakdowns, and the ability to spot-check a session replay, not cross-session retention math.

The trade-off is real on the Studio AI side: there, the value of PostHog is exactly the things cookieless gives up (cohorting, retention, funnels keyed to identified users). The plan is to be cookieless here, cookie-based and identified there.

## What worked

_(to be filled in once the dashboard has real data)_

## What didn't

_(ditto — Lighthouse delta, replay quality, flag latency)_

## Recommendations for the Studio AI integration

_(ditto — captured after the spike actually runs)_
