# Research Catalog — Developer Effectiveness in the AI Era (series support)

Supporting material for the #6 series. Three sections: **Case studies & examples**, **Data points & findings**, **People to talk to**, plus **Your own material** (the gold only you have).

Convention: tag each entry with the mini-essay it supports (E1–E10, matching the `MINI-ESSAY N` markers in the draft). Public items seeded from this session's web research are marked _[verify before citing]_ — treat them as leads, not gospel.

Mini-essay key: E1 Developers' New Role · E2 Bottlenecks Amplified · E3 Two Customers · E4 Agentic Friction · E5 Feeding the Agent · E6 AI Readiness Check · E7 Metrics · E8 Feedback Loops · E9 Team All In · E10 Experimental / Studio

---

## Case studies & examples (public)

| Item | What it shows | Supports | Source |
|------|---------------|:--------:|--------|
| OpenAI harness engineering field report | Real harness in production: layered architecture enforced by custom linters + structural tests, recurring "garbage collection" that scans for drift and has agents suggest fixes. Their line: "our most difficult challenges now center on designing environments, feedback loops, and control systems." | E4, E6, E8 | openai.com/index/harness-engineering _[verify]_ |
| Stripe "minions" (one-shot end-to-end coding agents) | Pre-push hooks that run relevant linters by heuristic; explicit "shift feedback left"; "blueprints" integrating feedback sensors into the agent workflow. | E6, E8 | stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents _[verify]_ |
| Anthropic — Effective harnesses for long-running agents | Orchestration/verification patterns for keeping long agent runs on track. | E8 | anthropic.com/engineering/effective-harnesses-for-long-running-agents _[verify]_ |
| Böckeler — Harness engineering (Thoughtworks/Fowler) | The reference mental model (guides/sensors, computational/inferential). Cite as the deep technical treatment you simplify + differentiate from. | E8 | martinfowler.com/articles/harness-engineering.html |
| Klarna — Agent Experience ROI | Reportedly ~$40M profit impact from building agent-facing capability into the product layer. Useful as the AX/"two customers" business hook. | E3 | _[verify — number cited in several AX write-ups]_ |
| Thoughtworks "janitor army" / architecture-drift-with-sensors | Anecdotes of tackling drift and API quality with a mix of agents + custom linters. | E4, E8 | Böckeler article, "starting point" section _[verify]_ |

---

## Data points & findings (sharp, citable stats)

| Finding | Why it lands | Supports | Source |
|---------|--------------|:--------:|--------|
| 20,574 real developer–agent sessions analysed; failures cluster into ~7 recurring forms (reading the project, interpreting intent, following rules, bounding actions, executing, reporting). | Rigorous backing for "agents fail in patterned, environmental ways." | E4 | arXiv 2605.29442 _[verify]_ |
| The "80% problem": agent nails ~90%, you burn 5+ hours on the last 10%. "You're not coding anymore, you're supervising" — the babysitting/supervision tax. | Vivid, relatable proof of hand-feeding / micromanagement. | E1, E4, E6 | Addy Osmani, addyo.substack.com/p/the-80-problem-in-agentic-coding _[verify]_ |
| Context files sometimes *reduce* task success and add ~20%+ token cost — more context made agents perform worse. | Counterintuitive, strong: proves "feeding" is engineering, not "dump everything in." | E5 | arXiv 2506.12347 "How Developers Use AI Agents" _[verify]_ |
| Agents mark a feature "done" on green unit tests while it's broken end-to-end. | Direct evidence for "ready for release, not a PR." | E6, E8 | multiple (failure studies) _[verify]_ |
| Agents degrade systematically past ~400k LOC; GPT-5 + OpenHands ~21% resolution on 21-file multi-file tasks. | Concrete ceiling on unsupervised multi-file work. | E4 | Sourcegraph blog; arXiv _[verify]_ |
| HN/industry consensus: "a decent model with a great harness beats a great model with a bad harness." | Backs "the harness (your environment) is the lever." | E8, E2 | HN threads _[verify]_ |

---

## People to talk to

Status key: `idea` (candidate) · `warm` (you know them) · `reached out` · `scheduled` · `done`.

| Name | Relevance | Connection | Status |
|------|-----------|-----------|:------:|
| Cassie Shum | Co-author on the series ideas (#6/#7 in Studio). | warm — collaborator | idea |
| Abi Noda (DX) | DevEx measurement; you've co-written before ("the one with Abi"). Natural peer for the metrics/measurement angle. | warm | idea |
| Laura Tacho (DX) | DevEx measurement / leadership audience overlap. Peer voice on the DevEx→agentic shift. | warm-ish | idea |
| Birgitta Böckeler (Thoughtworks) | Harness engineering author — peer/contrast conversation; could sharpen your differentiation. | idea | idea |
| Chris Ford (Thoughtworks) | Co-ran the coding-sensors experiments. | idea | idea |
| Ned Letcher (Thoughtworks) | "Ambient affordances" — the harnessability angle. | idea | idea |
| Addy Osmani (Google) | "80% problem," agentic coding at scale; big reach if he amplifies. | idea | idea |
| Simon Willison | Practical AI-assisted coding, link-blog reach; great for distribution + a grounded practitioner take. | idea | idea |
| Mathias Biilmann (Netlify) | AX framing — only if you want the agent-experience angle firsthand. | idea | idea |

---

## Your own material (to fill — this is the gold only you have)

Prompts to seed from your consulting/observation work (anonymise as needed):

- The **high-throughput team** you cite (5–10 PRs/week/dev) — who, what changed, did customer value move with it?
- Any team you've actually **run the readiness test** with — the intervention count, the specific friction it exposed, the before/after.
- Concrete **hand-feeding moments** you've watched: the exact manual step a dev does by reflex that the agent can't (restart, stale data, log spelunking) — with a number if you have one (time/tokens wasted).
- A team that **hardened one flow** and what it unlocked.
- "**Seasoned skeptic → proponent**" developers (you reference this arc) — a named-but-anonymised story.
- Any org where **bottlenecks got exposed** by AI (review, flaky E2E) — the specific numbers.

| Story / example | Which essay | Anonymise? | Notes |
|-----------------|:-----------:|:----------:|-------|
| _(add)_ | | | |
