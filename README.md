# GitExplained

A free, hands on course that teaches Git concepts to absolute beginners and non developers. No command line and no code. You click, watch your files move between places, and learn why each move matters.

The site is called **Git Explained**.

## Where things live

| What | Where |
| --- | --- |
| Study plan and lesson outlines (source of truth) | [Claude Doc, tab "Git Together study plan and lessons"](https://claude.ai/code/artifact/af488e27-c960-41ef-891d-71449053fe82) |
| Step by step panel text (source of truth) | Same doc, tab "Step text" |
| Snapshot of both tabs, Oct 1 2026 | `docs/study-plan.md`, `docs/step-text.md` |
| Website design (in progress, not final) | [Claude Design project](https://claude.ai/design/p/e30d20a1-9bcd-46d6-b163-74b385f19700?file=Git+Tutorial+Final.dc.html) |
| Snapshot of the design and its imports | `design/Git Tutorial Final.dc.html` (current), `design/Git Tutorial.dc.html` (older draft), `design/support.js`, `design/_ds/broadsheet.../` |
| Website app (Angular, Optimus UI, Tailwind) | `src/` |
| Rules for Claude | `CLAUDE.md` |

The doc is the live version. The files in `docs/` are a snapshot. If they disagree, the doc wins. Refresh the snapshot when the doc changes.

## The idea

The page layout follows the [Angular tutorial](https://angular.dev/tutorials/learn-angular). Lesson text sits on the left, and a live workspace sits on the right. Each step gives you one task. You do it in the workspace, the step checks itself, and Next unlocks.

The text does not copy Angular's approach of skipping explanations. Every step teaches one idea in plain words that take about 15 seconds to read. A closed **More details** box holds the technical side, like real Git terms and commands, for anyone who wants it.

### The workspace

Your design shows four places. Each lesson only reveals the ones it needs.

| Place | Shows up in | What lives there |
| --- | --- | --- |
| Working files | Lesson 1 | The files you edit right now |
| Local history | Lesson 1 | Every snapshot you saved |
| Staging area | Lesson 3 | Changes picked for the next snapshot |
| Origin (GitHub) | Lesson 5 | The shared copy everyone uses |

There is no "your computer" or "Sam's computer" panel. Teammates' snapshots just appear on origin.

### The sample project

The whole course uses a small family recipe book. It holds `pancakes.md`, `groceries.txt`, `cookies.md`, `notes.txt`, and `soup.md`. Sam is the teammate from lesson 6 on. Alex owns the public cookbook in lesson 11.

### Metaphor tokens

The design has a metaphor switch with four options (plain, photo, shipping, desk). Lesson text uses tokens so the switch keeps working.

| Token | Plain reads as |
| --- | --- |
| `{at0}` | in your working files |
| `{at1}` | in the staging area |
| `{at2}` | in your local history |
| `{at3}` | on origin |
| `{T3}` | Origin |

## Curriculum

12 lessons, 47 steps, about an hour in total.

| # | Lesson | Git words | Steps | Status |
| --- | --- | --- | --- | --- |
| 1 | What is a repository | repository | 3 | Polished |
| 2 | Taking snapshots | commit, history | 4 | Rough draft |
| 3 | Choosing what to save | staging area, stage, unstage | 4 | Rough draft |
| 4 | Going back in time | discard, revert | 4 | Rough draft |
| 5 | Sending to origin | origin, push | 3 | Rough draft |
| 6 | Getting updates | pull, behind | 4 | Rough draft |
| 7 | Branches | branch, main, switch | 5 | Rough draft |
| 8 | Merging | merge | 4 | Rough draft |
| 9 | When changes collide | conflict | 4 | Outline only |
| 10 | Asking before merging | pull request, review | 4 | Outline only |
| 11 | Copying a project | fork, clone | 4 | Outline only |
| 12 | Good habits | ignore, tag, release | 4 | Outline only |

## Step format

Each step has these parts. The first four map to the fields in the design's `STEPS` array (`title`, `body`, `task`, `doneMsg`).

| Part | Rule |
| --- | --- |
| Title | 5 words or fewer |
| Body | 1 or 2 short paragraphs, about 40 words |
| Task | One sentence that starts with Press or Click |
| Done | Adds meaning. Never just repeats what the screen shows |
| Check | What the workspace tests to mark the step done |
| Wrong move | Message for a likely mistake (only where one is likely) |
| Workspace | What changes on screen (only where something changes) |
| More details | Closed by default, 60 words or fewer, the technical side |

Lesson 1 in `docs/step-text.md` is the template. Every other lesson should match it.

## Decisions so far

- The course teaches concepts, not the command line or any specific tool.
- The audience is absolute beginners and non developers.
- The scope is all 12 lessons, extras included.
- Lesson 2 hides staging. Lesson 3 introduces it. (The design currently teaches staging in its lesson 2, which needs renumbering.)
- Lesson 1 opens on a messy folder with no Git yet.
- The four places get revealed one at a time, with no up front tour.
- The voice is relatable and centered on you, the learner. See `CLAUDE.md`.
- We polish one lesson completely before moving to the next.

## Open questions

- Metaphors. Launch with all four, or only plain or desk?
- Video. One per lesson or one per step? The design shows a 1:40 video per step.
- Typing. Should commit messages and branch names be typed or picked from a list?
- Lesson 1 needs a workspace state with no history panel. Does the layout support it?
- Lesson 11 needs a second origin panel for Alex's cookbook.
- Are the names Sam and Alex final?

## Next steps

1. Review lesson 1 in the doc and finish polishing it.
2. Rewrite lesson 2 in the same format and voice as lesson 1.
3. Keep going one lesson at a time through lesson 12.
4. Feed the finished text into the design's `STEPS` data.

## Running the site

The site is an Angular app in `src/`. It uses [Optimus UI](https://optimus.openng.org/) for its components and [Tailwind CSS](https://tailwindcss.com/) v4 for layout and spacing. The Optimus Tailwind plugin adds theme colors like `bg-primary` as Tailwind classes. Run these commands from the `src` folder.

```bash
npm install      # first time only
npx ng serve     # dev server at http://localhost:4200
npx ng build     # production build in dist/
npx ng test      # unit tests with Vitest
```

Code uses 4 spaces for indents. Prettier and `.editorconfig` in `src/` already follow that.

## Starting a new Claude session

Open Claude Code in this folder. It reads `CLAUDE.md` on its own. Then say something like this.

> Read README.md and docs/step-text.md. Lesson 1 is the template. Let's polish lesson 2.

To work in the live doc instead of the snapshot, give Claude the doc link above. Run `/design-login` first if Claude needs to read the design project.
