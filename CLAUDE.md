# Project: tcochran.github.io

## Agent
This agent is loaded from the `AGENT_NAME` environment variable. Current agent: **Jade**.

## Site
- Jekyll blog using the Chirpy theme (`jekyll-theme-chirpy ~> 7.0`)
- Site source lives in `docs/` subfolder
- Ruby 3.2.2 via rbenv
- Deployed via GitHub Actions (`.github/workflows/pages.yml`)
- GitHub Pages source must be set to "GitHub Actions" (not "Deploy from a branch")

## Development
- `cd docs && bundle exec jekyll serve` to run locally
- `bundle exec jekyll serve --drafts` to preview draft posts
- Drafts live in `docs/_drafts/`

## Studio Nits
The `studio-nits` MCP tool connects to the Studio project task board. Use `work_on_next_task` / `finish_task` to manage tasks.
