---
name: work_on_task
description: Pull the next Studio task and work it end-to-end through the SDLC using trunk-based development. Work on trunk; only cut a short-lived branch when a change needs review. Trigger when the user says "work on the next task", "pick up a task", "what's next", or asks to start the next item from the Studio task board.
---

# work_on_task

A lightweight SDLC loop for tasks tracked in Studio (`studio-ai` MCP). This skill is intentionally minimal and will evolve.

## Development model: trunk-based

- **Default to working on trunk** (`main`). Small, low-risk changes (typos, content edits, dependency bumps, drafts) commit straight to trunk and push.
- **Branch only when review is needed.** Cut a short-lived branch, open a PR, get the review, merge, delete the branch. The branch exists for the duration of the review, not longer.
- **No long-lived feature branches.** If a task is too big to land on trunk in a day or two, split it.
- **Never force-push trunk.** Never skip hooks.

## When to use this skill
- User asks to start the next task, pick something off the board, or continue the queue.
- User references a specific Studio task and wants to begin work.

## Steps

1. **Claim the task.** Call `mcp__studio-ai__work_on_next_task` (or `get_task` if a specific task was named). Surface the task title, ID, and acceptance criteria to the user before doing anything else.
2. **Confirm scope.** If the task is ambiguous or larger than a short-lived PR can absorb, stop and align with the user before writing code.
3. **Decide the path.**
   - **Trunk path:** small, safe, no review needed → commit on `main` and push.
   - **Review path:** anything that should be reviewed → cut a short-lived branch `task/<id>-<short-slug>`.
4. **Implement.** Make the change. Follow repo conventions. Keep the diff focused on the task — no drive-by refactors.
5. **Verify.** Run the relevant checks (build, tests, lint). For this repo, that includes `cd web && npm run build`.
6. **Commit.** One commit per logical change. Reference the task ID in the message.
7. **If review path: open PR.** Use `gh pr create`. Title short; body links the Studio task and summarizes change + test plan. Keep the PR small enough to review in one sitting.
8. **Submit for review.** Call `mcp__studio-ai__submit_for_review` with the PR URL so the task moves to `review` and reviewers are auto-assigned.
9. **Start the dev server for the user to review.** After submitting for review, run the dev server in the background (`cd web && npm run dev`) and surface the local URL (e.g. http://localhost:4321) plus the specific pages worth visiting for this task. The user does not want to run the server themselves. Leave it running until the PR is merged; stop it as part of the post-merge reset.
10. **Merge and delete.** Once approved, merge and delete the branch. Do not let it linger.
11. **Reset local to trunk HEAD.** After the merge, sync the local repo back to a clean state:
    - **Precondition:** working tree must be clean (no uncommitted changes, no in-progress work). If not clean, stop and surface the dirty files to the user — do **not** discard their work.
    - `git checkout main` (or whatever the trunk branch is)
    - `git pull --ff-only`
    - `git branch -d <merged-branch>` to delete the local branch
    - `git fetch --prune` to drop the deleted remote tracking ref
    - Confirm with the user before running anything destructive if the precondition check is ambiguous.

## Notes
- If a step fails (build break, hook rejection), fix the underlying issue rather than bypassing.
- This skill is a starting point. Refine it as the workflow matures.
