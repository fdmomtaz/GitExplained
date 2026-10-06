# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project context is in README.md. Read it first. Maintainers may keep private links and personal notes in `CLAUDE.local.md`, which is gitignored. Read it when it exists, and never copy its contents into tracked files.

## What this repo is

Mostly a writing project. The main work is lesson text, which ships inside the website app in `src/`.

- The lessons live in `src/src/app/content/lessons/lesson-NN.ts`, listed in `index.ts`. These TS files are the source of truth for the lesson text, the starting workspace, and each step's actions. Lessons get reviewed in the running app, not in the files.
- Write Doc file content with the `doc(title, ...lines)` helper from `src/src/app/content/doc.ts`, not raw HTML.
- `lessons.spec.ts` next to the lessons checks the writing rules and each step's shape. Run `npx ng test --watch=false` from `src/` after editing a lesson.
- `docs/study-plan.md` is the original outline of the curriculum. It's out of date, so don't edit it or treat it as current.

## The app in `src/`

- Angular 22, standalone and zoneless. Optimus UI for components, with the Aura preset set in `src/src/app/app.config.ts`. Tailwind CSS v4 with `@openng/optimus-ui-tailwindcss` for layout, spacing, and theme colors (`bg-primary`, `text-surface-500`).
- Optimus is a PrimeNG fork with the same API. Import from `@openng/optimus-ui/<component>` (for example `ButtonModule` from `@openng/optimus-ui/button`). Don't install `primeng` or `@primeuix/*`.
- Optimus styles live in the `optimus` CSS layer, ordered `theme, base, optimus`, so Tailwind utilities override component styles. Keep that order if you touch `provideOptimus`.
- Run npm and `ng` commands from `src/` (`npx ng serve`, `npx ng build`, `npx ng test`). Run `npx ng build` after changes to confirm the app still compiles.
- Indent with 4 spaces. `.editorconfig` and `.prettierrc` in `src/` enforce it, so run `npx prettier --write` on files you touch.
- Keep one `.gitignore` at the repo root and one `README.md` at the root. Don't add them inside `src/`. When `ng` or a schematic creates one, merge it into the root file and delete it.
- npm 12 blocks fetching remote tarballs, so `npm install --package-lock-only` fails. A plain `npm install` works.

## How the text plugs into the design

- The visual design lives outside this repo, in a Claude Design project. `CLAUDE.local.md` has the link when you have access. Copy its layout and styling, not its content. Lesson data comes from `LessonService`.
- A step (`src/src/app/models/step.ts`) has a `body`, plus `task`, `done`, and an optional `wrongMove`. `body` holds one or two paragraphs and at most one More details block, in reading order. Put More details right after the paragraph it explains, never first. The paragraph after it must make sense to someone who never opens the box.
- In the app a step is done once you press every action in its `actions` list. **Check** and **Workspace** notes are comments above the actions, for whoever builds the workspace engine.
- Write the plain wording for places, like "in the staging area". The app has no metaphor tokens, and the spec rejects curly braces.
- Use these exact button names in tasks. Edit, Stage, Unstage, Commit, Push, Start tracking, Delete, New file, Discard, View, Back to now, Revert, Connect to GitHub, Pull, New branch, Switch, Merge, Delete branch, Resolve, New pull request, Merge pull request, Fork, Clone, Ignore, New tag, and Reset step.
- From lesson 3 on, staging is visible, so any task that edits and saves says "then stage it and commit" and lists a stage action.
- Lesson 2 hides staging and lesson 3 introduces it. Any design placeholder text that teaches staging earlier is out of date.
- **Check**, **Wrong move**, **Workspace**, and **More details** have no place in the design yet. Keep writing them anyway.

## Your job on this project

- You write the curriculum and the lesson text. Visual design is done separately in Claude Design. Don't focus on design unless asked. Work on the app only when asked.
- Teach Git **concepts**, not the command line or any tool. Real commands only go in the More details box.
- Audience: absolute beginners and non developers with short attention spans. Write at a middle school reading level. One idea per step. Body text runs from about 10 to 50 words, and it should vary from step to step.
- Don't talk about "your computer" or "Sam's computer". The workspace already shows local and origin. Teammates' snapshots just appear on origin.
- Lesson 1 is the template for format and voice. Update the Status column in README's curriculum table when the maintainer signs off on a lesson.
- The story carries across lessons. When you change what a lesson leaves behind (files, snapshots, branches), update the next lesson's starting workspace to match.
- After editing a lesson, run `npx ng test --watch=false` and then `npx ng build` from `src/`.

## Writing rules (for all prose in this repo, including lesson text and docs)

- Active voice. Address the reader as "you". Plain, everyday words. Conversational.
- Definitive statements, not conditionals ("this improves", not "this might improve").
- NO dash characters of any kind. No hyphens in compound words (write "step by step", "non developers", "half done"), no en dashes, no em dashes.
- No colons, semicolons, asterisks, emojis, hashtags, clichés, jargon, or marketing language.
- No AI filler ("it's important to note", "as we can see", "game changer", "streamline", "boosting", "not just X but Y", "let's explore").
- Mix short, medium, and long sentences for rhythm.

Code and Markdown syntax is fine. The text a reader sees must follow the rules.

`lessons.spec.ts` checks the lesson text for dashes, colons, semicolons, asterisks, and curly braces. The rest of the rules you check yourself.

## Lesson voice

Fun, not boring. The course wants jokes and funny moments, like the done message in 1.1 ("Well, who knew. The file called final wasn't the final version"). Keep it at a middle school reading level, never posh.

- Open from something the learner has done, then show how Git fixes it.
- Vary the shape of steps. Some bodies are one short line, some are two paragraphs. Don't let every step read the same way.
- Use the running gags. The box mix secret in notes.txt (lessons 3 and 12), the salt incident (lesson 4), Sam who loves soup and can't spell (lesson 6 on), the milk wars (lesson 9), and hungry Alex (lesson 11).
- Done messages add meaning or a joke. They never just repeat what the screen shows.
- Sentences that follow each other should connect. Read each step aloud and cut anything that sounds robotic.

Avoid:
- Vague lines that sound nice but say nothing ("Git is watching").
- Fancy words where a plain one works ("muddled", "intact", "identical").
- Choppy runs of fragments that read like a children's book. One short punchline is fine. Three in a row is not.
