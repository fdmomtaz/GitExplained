# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project context is in README.md. Read it first.

## What this repo is

Mostly a writing project. The main work is lesson text in Markdown plus a read only snapshot of the website design. The repo also holds the website app in `src/`, which is in its early stages.

- `docs/study-plan.md` holds the curriculum, lesson outlines, and open questions. `docs/step-text.md` holds the panel text, step by step.
- Both are snapshots of tabs in the live Claude Doc (link in README). The doc wins when they disagree. Edit the doc with the Claude Docs tools, then refresh the matching file in `docs/`.
- `design/` is a snapshot of the Claude Design project. Don't edit it. Read it to learn what the text must fit.
- `src/` is the Angular app (`git-explained`). The lesson text has no build step, but the app does.

## The app in `src/`

- Angular 22, standalone and zoneless. Optimus UI for components, with the Aura preset set in `src/src/app/app.config.ts`. Tailwind CSS v4 with `@openng/optimus-ui-tailwindcss` for layout, spacing, and theme colors (`bg-primary`, `text-surface-500`).
- Optimus is a PrimeNG fork with the same API. Import from `@openng/optimus-ui/<component>` (for example `ButtonModule` from `@openng/optimus-ui/button`). Don't install `primeng` or `@primeuix/*`.
- Optimus styles live in the `optimus` CSS layer, ordered `theme, base, optimus`, so Tailwind utilities override component styles. Keep that order if you touch `provideOptimus`.
- Run npm and `ng` commands from `src/` (`npx ng serve`, `npx ng build`, `npx ng test`). Run `npx ng build` after changes to confirm the app still compiles.
- Indent with 4 spaces. `.editorconfig` and `.prettierrc` in `src/` enforce it, so run `npx prettier --write` on files you touch.
- Keep one `.gitignore` at the repo root and one `README.md` at the root. Don't add them inside `src/`. When `ng` or a schematic creates one, merge it into the root file and delete it.
- npm 12 blocks fetching remote tarballs, so `npm install --package-lock-only` fails. A plain `npm install` works.

## How the text plugs into the design

- `design/Git Tutorial Final.dc.html` is the current design for the app (landing, lesson, Lessons, Glossary, About). Copy its layout and styling, not its content. Lesson data comes from `LessonService`. Refresh it from the Claude Design project when the design changes.
- `design/Git Tutorial.dc.html` is the older draft. It defines a `STEPS` array. Each step is `{ title, action, target, body: [paragraph, paragraph], task, doneMsg }`. `body` is a list of paragraphs, so write one or two separate paragraphs, not one block.
- `action` and `target` drive the self check (for example `action: 'stage', target: 'notes.txt'`). The **Check** line in `docs/step-text.md` should map to an action on a file.
- `fill()` replaces any `{name}` with metaphor text from `SETS` (plain, photo, shipping, desk). Only `{at0}` to `{at3}` and `{T3}` are safe in lesson text. Any other curly brace word breaks. A token must read naturally in all four metaphors ("on the shelf", "in the warehouse").
- The design's `BTNS` only has Edit, Stage, Unstage, Commit, and Push. The intro of `docs/step-text.md` lists the extra buttons the lessons need. Use those exact names in tasks.
- The design's current `STEPS` content is old placeholder text that teaches staging first. Don't copy its voice or order. Lesson 2 hides staging and lesson 3 introduces it.
- **Check**, **Wrong move**, **Workspace**, and **More details** have no field in the design yet. Keep writing them anyway.

## Your job on this project

- You write the curriculum and the lesson text. Visual design is done separately in Claude Design. Don't focus on design unless asked. Work on the app only when asked.
- Teach Git **concepts**, not the command line or any tool. Real commands only go in the More details box.
- Audience: absolute beginners and non developers with short attention spans. One idea per step, about 40 words of body text.
- Don't talk about "your computer" or "Sam's computer". The workspace already shows local and origin. Teammates' snapshots just appear on origin.
- Polish one lesson completely before touching the next. Lesson 1 in `docs/step-text.md` is the template for format and voice. Update the Status column in README's curriculum table when a lesson is polished.
- Keep text compatible with the design: the `STEPS` fields (`title`, `body`, `task`, `doneMsg`), the button names, and the metaphor tokens `{at0}` to `{at3}` and `{T3}`.
- The live doc (link in README) is the source of truth. `docs/` is a snapshot. Refresh it after doc changes.

## Writing rules (from the user, apply to all prose you write for them)

- Active voice. Address the reader as "you". Plain, everyday words. Conversational.
- Definitive statements, not conditionals ("this improves", not "this might improve").
- NO dash characters of any kind. No hyphens in compound words (write "step by step", "non developers", "half done"), no en dashes, no em dashes.
- No colons, semicolons, asterisks, emojis, hashtags, clichés, jargon, or marketing language.
- No AI filler ("it's important to note", "as we can see", "game changer", "streamline", "boosting", "not just X but Y", "let's explore").
- Mix short, medium, and long sentences for rhythm.

Markdown syntax (list markers, table separators, bold labels) is fine. The rendered text must follow the rules.

Quick check before handing text back, run on the lesson you touched.

```
grep -nE '[-–—:;*]' docs/step-text.md
```

Hits inside Markdown syntax, file names (`pancakes.md`), or the More details command examples are fine. Anything in rendered prose is not.

## Lesson voice

Use a relatable voice centered on the learner. Open from something they've done ("You've probably done this..."), then show how Git fixes it. Write full, natural sentences with an occasional short one ("Names lie.").

Avoid:
- Choppy runs of fragments ("Now there are three. Check the dates. Funny thing.") that read like a children's book.
- Cutesy lines that talk down ("Much better", "Funny thing").
- Done messages that repeat what the screen already shows. They should add meaning.
- Vague lines that sound nice but say nothing ("Git is watching", "Right now this is a plain folder").

The user called the first draft "dummy and weird" for exactly these reasons and picked this voice out of three samples.
