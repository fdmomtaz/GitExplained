# Git Explained

A free, hands on course that teaches the ideas behind Git to beginners and people who don't write code. There's no command line and nothing to install. You press buttons in a small pretend project, watch your files move from place to place, and learn why each move matters.

## How it works

Each lesson page puts the lesson text on the left and a live workspace on the right, a layout borrowed from the [Angular tutorial](https://angular.dev/tutorials/learn-angular). Every step teaches one idea in a few short sentences and gives you one task. You do the task in the workspace, the step checks itself, and the next step unlocks.

Plain words come first. A closed **More details** box sits next to the text it explains and holds the real Git terms and commands for anyone who wants them.

### The workspace

The workspace shows up to four places. Each lesson only reveals the ones it needs, one at a time.

| Place | Shows up in | What lives there |
| --- | --- | --- |
| Working files | Lesson 1 | The files you edit right now |
| Local history | Lesson 1 | Every snapshot you saved |
| Staging area | Lesson 3 | Changes picked for the next snapshot |
| Origin (GitHub) | Lesson 5 | The shared copy everyone works from |

### The story

The whole course follows one small family recipe book with pancakes, cookies, soup, and a shopping list. Sam joins in lesson 6 as a teammate who loves soup and can't spell. Alex owns the public cookbook you add to in lesson 11. Along the way you hide a box mix secret, undo 10 cups of salt, and settle the milk wars.

## Curriculum

12 lessons, 51 steps, about an hour in total.

| # | Lesson | Git words | Steps | Status |
| --- | --- | --- | --- | --- |
| 1 | What is a repository | repository | 3 | Full draft |
| 2 | Taking snapshots | commit, history | 4 | Full draft |
| 3 | Choosing what to save | staging area, stage, unstage | 4 | Full draft |
| 4 | Going back in time | discard, revert | 4 | Full draft |
| 5 | Sending to origin | origin, push, ahead | 4 | Full draft |
| 6 | Getting updates | pull, behind | 5 | Full draft |
| 7 | Branches | branch, main, switch | 5 | Full draft |
| 8 | Merging | merge | 4 | Full draft |
| 9 | When changes collide | conflict | 4 | Full draft |
| 10 | Asking before merging | pull request, review | 5 | Full draft |
| 11 | Copying a project | fork, clone | 5 | Full draft |
| 12 | Good habits | ignore, tag, release | 4 | Full draft |

A few choices shape the whole course.

- It teaches concepts, not the command line or any one app.
- Lesson 2 saves snapshots without staging. Lesson 3 introduces staging once snapshots feel familiar.
- Lesson 1 opens on a messy folder with no Git at all, so you feel the problem before you see the fix.

## Project status

The text for all 12 lessons is drafted. The site has its landing, lessons, glossary, and about pages. The lesson page and the workspace that runs each step are still being built, so you can't take the course in the browser yet.

Open questions

- Should each lesson have one video, or each step?
- Should learners type commit messages and branch names, or pick them from a list?
- Are Sam and Alex the final names?

## Running the site

The site is an [Angular](https://angular.dev/) app in `src/`. It uses [Optimus UI](https://optimus.openng.org/) for components and [Tailwind CSS](https://tailwindcss.com/) v4 for layout. You need Node.js and npm. Run these commands from the `src` folder.

```bash
npm install                 # first time only
npx ng serve                # dev server at http://localhost:4200
npx ng build                # production build in dist/
npx ng test --watch=false   # unit tests, including the lesson writing checks
```

## Project layout

| What | Where |
| --- | --- |
| Lessons, one file each | `src/src/app/content/lessons/lesson-NN.ts` |
| Writing and format checks for every lesson | `src/src/app/content/lessons/lessons.spec.ts` |
| The shape of a lesson, a step, and the workspace | `src/src/app/models/` |
| Site pages | `src/src/app/pages/` |
| The original course outline | `docs/study-plan.md` |
| Guidance for AI coding agents, with the full writing rules | `CLAUDE.md` |

## Working on the lessons

Each lesson is one TypeScript file. It holds the lesson card, the workspace the lesson starts with, and its steps. Lesson 1 is the template for format and voice.

A step has these parts.

| Part | What it is |
| --- | --- |
| Title | 5 words or fewer. It also shows in the step picker |
| Body | 1 or 2 short paragraphs, 10 to 50 words in total, plus at most one More details box placed after the paragraph it explains |
| Task | One sentence that names the exact button to press |
| Done | Shows once the task is done. It adds meaning or a joke and never just repeats the screen |
| Wrong move | Optional. A nudge for a likely mistake |
| Actions | The moves the task asks for. The step is done once you make all of them |

The writing is plain and friendly, at a middle school reading level, with one idea per step. Lesson text never uses dashes, colons, semicolons, or asterisks, and the tests fail if it does. `CLAUDE.md` has the full writing rules and voice guide.

The story carries from one lesson to the next. If you change the files, snapshots, or branches a lesson leaves behind, update the next lesson's starting workspace to match. Run the tests and a build before you send a change.

Code uses 4 spaces for indents. Prettier and `.editorconfig` in `src/` already follow that.

## License

[MIT](LICENSE). That covers the code and the lesson text.
