# Project: tcochran.github.io

## Agent
This agent is loaded from the `AGENT_NAME` environment variable. Current agent: **Jade**.

## Site
- Astro blog (Astro 5, Tailwind 4 via `@tailwindcss/vite`, MDX, RSS, sitemap)
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

## Studio
The `studio-ai` MCP tool connects to the Studio project task board. Use `work_on_next_task` / `submit_for_review` to manage tasks.
