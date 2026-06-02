# Project: tcochran.github.io

## Agent
This agent is loaded from the `AGENT_NAME` environment variable. Current agent: **Jade**.

## Site
- Astro blog (Astro 6, Tailwind 4 via `@tailwindcss/vite`, MDX, RSS, sitemap)
- Source lives in `web/`
- Deployed to Vercel — every push to `main` triggers a production deploy, every other branch gets a preview URL
- Project: `dev-effectiveness` on the `tcochran` Vercel account

## Development
- `cd web && npm install` (first run only)
- `cd web && npm run dev` — local dev server, drafts visible
- `cd web && npm run build` — production build, drafts excluded from listings

## Content
- Posts: `web/src/content/posts/<slug>.md` (or `.mdx`)
- Links (Willison-style link blog): `web/src/content/links/<slug>.md`
- Frontmatter schema: `web/src/content.config.ts`
- `draft: true` — post URL still builds in production but the post is excluded from the homepage, tag pages, and RSS feed. Flip to `false` (or remove the line) to list it.

## Analytics
- PostHog via `posthog-js`, initialized in `web/src/components/Analytics.astro` and included from `BaseLayout`.
- Env vars (set in Vercel and optionally in `web/.env` for local): `PUBLIC_POSTHOG_KEY` (required to enable) and `PUBLIC_POSTHOG_HOST` (defaults to `https://us.i.posthog.com`).
- Uses PostHog's default persistence (localStorage + cookie) so anonymous IDs persist across page loads and sessions.

## SDLC
Trunk-based: commit directly to `main` unless a change needs review. Before any push to `main`:

1. `cd web && npm run build` — must succeed.
2. `cd web && npm run dev` and load the site in Chrome via the `claude-in-chrome` MCP tools (homepage + at least one post page). Verify the page renders and there are no console errors beyond the known dev-toolbar module-loader race.
3. `npm audit` — should report 0 vulnerabilities. If it doesn't, fix before pushing.
4. Then commit and push.

Skipping the Chrome check is not allowed for changes that touch `web/` — type checks and `astro build` pass plenty of things that break at runtime (CSS regressions, hydration errors, broken layouts).

## Studio
The `studio-ai` MCP tool connects to the Studio project task board. Use `work_on_next_task` / `submit_for_review` to manage tasks.
