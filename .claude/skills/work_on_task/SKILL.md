---
name: work_on_task
description: Pull the next Studio task and work it end-to-end through the SDLC — branch, implement, commit, open PR, submit for review. Trigger when the user says "work on the next task", "pick up a task", "what's next", or asks to start the next item from the Studio task board.
---

# work_on_task

A lightweight SDLC loop for tasks tracked in Studio (`studio-ai` MCP). This skill is intentionally minimal and will evolve.

## When to use
- User asks to start the next task, pick something off the board, or continue the queue.
- User references a specific Studio task and wants to begin work.

## Steps

1. **Claim the task.** Call `mcp__studio-ai__work_on_next_task` (or `get_task` if a specific task was named). Surface the task title, ID, and acceptance criteria to the user before doing anything else.
2. **Confirm scope.** If the task is ambiguous or larger than a single PR, stop and align with the user before writing code.
3. **Branch.** Create a branch named after the task: `task/<id>-<short-slug>`.
4. **Implement.** Make the change. Follow repo conventions. Keep the diff focused on the task — no drive-by refactors.
5. **Verify.** Run the relevant checks (build, tests, lint). For this repo, that includes `bundle exec jekyll build` from `docs/`.
6. **Commit.** One commit per logical change. Reference the task ID in the message.
7. **Open PR.** Use `gh pr create`. Title should be short; body should link the Studio task and summarize the change + test plan.
8. **Submit for review.** Call `mcp__studio-ai__submit_for_review` with the PR URL so the task moves to `review` and reviewers are auto-assigned.

## Notes
- Never push to `master` directly — always go through a PR.
- If a step fails (build break, hook rejection), fix the underlying issue rather than bypassing.
- This skill is a starting point. Refine it as the workflow matures.
