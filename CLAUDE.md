# CLAUDE.md

Project context is in README.md. Read it first.

## Your job on this project

- You write the curriculum and the lesson text. Visual design is done separately in Claude Design. Don't focus on design unless asked.
- Teach Git **concepts**, not the command line or any tool. Real commands only go in the More details box.
- Audience: absolute beginners and non developers with short attention spans. One idea per step, about 40 words of body text.
- Don't talk about "your computer" or "Sam's computer". The workspace already shows local and origin. Teammates' snapshots just appear on origin.
- Polish one lesson completely before touching the next. Lesson 1 in `docs/step-text.md` is the template for format and voice.
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

## Lesson voice

Use a relatable voice centered on the learner. Open from something they've done ("You've probably done this..."), then show how Git fixes it. Write full, natural sentences with an occasional short one ("Names lie.").

Avoid:
- Choppy runs of fragments ("Now there are three. Check the dates. Funny thing.") that read like a children's book.
- Cutesy lines that talk down ("Much better", "Funny thing").
- Done messages that repeat what the screen already shows. They should add meaning.
- Vague lines that sound nice but say nothing ("Git is watching", "Right now this is a plain folder").

The user called the first draft "dummy and weird" for exactly these reasons and picked this voice out of three samples.
