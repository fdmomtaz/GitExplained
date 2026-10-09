# Workspace actions plan

This plan covers what happens when you press a button in the lesson workspace. It lists what we found while reviewing the `lesson-ui` branch and the decisions we made about actions, off task moves, and the cheeky notes. Pick it up from the order of work at the bottom.

## Where things stand

- The engine (`services/workspace-engine.ts`) can play lessons 1, 2, 3, and 5 from start to end. Lesson 4 stops at View, 6 at inspect, 7 at New branch, 8 and 9 at Pull, 10 at New pull request, 11 at Fork, and 12 needs buttons the engine lacks as well.
- The player (`pages/lesson/lesson-player.ts`) finishes a step once you press every action in its list. Edit, Delete, and New file work at any time. Every other button only works when the step asks for it.
- Files are plain text with no extension. Lesson text calls them "the pancakes file", and file content uses the `lines()` helper.
- The New file box asks for a name and blocks names that already exist.
- File row buttons look the same on every step. They never glow or change color to hint at the task.

## Bugs we found

1. Lesson 2 asks for things the app can't do. Step 2.2 says to type a commit message and 2.4 says to pick the clearest one. Commit just uses the lesson's message, so nothing is typed or picked, and the 2.4 wrong move never shows.
2. Pressing the asked button on a file you already deleted makes the engine throw inside the click. Nothing shows on screen, and the step can't finish until you think of Reset step.
3. Push copies your working files to origin, including edits you never committed. Real Git only pushes snapshots. The engine doesn't store what each snapshot holds, which is the root cause.
4. An extra Edit marks a file Changed even though its text didn't change. In lessons 1 and 2 the next Commit saves it as a change.
5. The ahead count is local snapshots minus origin snapshots. Once Sam pushes in lesson 6 it goes below zero, and the workspace says "Everything is in sync" when you're behind.
6. Edit doesn't update the file's Modified on date.
7. Deleting a file after Start tracking leaves no trace. Real Git shows it as a change to commit.
8. The legend explains Changed and New in lesson 1 before Start tracking, when neither can show up.
9. Extra moves vanish at Next step, because each step rebuilds the workspace from the lesson script. Nothing tells the learner.

## Gaps that block later lessons

- The engine needs the remaining buttons, lesson by lesson.
- Nothing shows what's in a file. Edit opens nothing, so lines like "Its first line says The pancakes are from a box mix" point at text you never see.
- There's no commit message box and no way to click a snapshot. Several tasks need one, like "Click Snapshot 5" and picking a line in Resolve.

## Decisions

### The workspace is a stage you can wander

The lessons are a script with exact files, snapshots, and running gags, so the workspace can't be a free sandbox. You can still do things the step didn't ask for. Those moves happen for real, a note says they weren't the plan, and the story decides what's there when the next step starts.

### Every press goes through one check

Each button press becomes an action, like delete pancakes or edit groceries. The player compares it with the step's remaining actions and lands on one of three outcomes.

1. **Required.** The action is on the list. It happens and the step moves forward.
2. **Harmless extra.** It isn't on the list and nothing breaks. It happens, and one of the "not the plan" notes shows.
3. **Blocking extra.** It isn't on the list and it breaks the story. It happens, and one of the "you broke it" notes shows and points at Reset step.

All buttons become pressable at all times, including Stage, Unstage, and Commit, so a disabled button never gives the answer away.

### How we spot a blocking move

After an extra move, the player does a dry run. It takes the new workspace and replays every action the lesson still has to do, this step's remaining actions and every later step's actions, through the engine. If any of them throws, the move is blocking.

- A move that stops this step from finishing is a dead end, like deleting the groceries file when the task is to edit it.
- A move that stops a later step is a story break, like deleting the pancakes file in 1.1 when 1.2 needs it. Next step would bring the file back, which teaches the opposite of lesson 1, so we treat it as blocking too.
- The dry run ignores "can't do yet" errors for buttons the engine doesn't have. It gets more complete as the engine learns them.
- It won't catch moves that change a snapshot without breaking anything, like staging an extra file. Those count as harmless.

The engine should export the list of buttons it supports, so the dry run and `workspace-engine.spec.ts` stop guessing from error text.

### The notes

Five "not the plan" lines and three "you broke it" lines. Show one at random but never the same one twice in a row, the way the cheer lines rotate in `LessonService`. Draft wording follows. Read it aloud in the app before it ships.

Not the plan

1. Sure, that happened. It just wasn't on today's menu.
2. Bold move. Not the one we needed, but bold.
3. Done! Also, not the plan. Check your task again.
4. That works, it just doesn't help this step. Peek at the task.
5. Nice try, chef. The recipe asked for something else.

You broke it

1. Uh oh. The story still needs that. Press Reset step to bring it back.
2. Well, that's gone, and the next part needed it. Press Reset step.
3. In a real folder that would be gone for good. Lucky for you, there's Reset step.

The note sits where the wrong move message sits now, under the task. "Not the plan" uses a soft info style and "you broke it" uses the warning style, so a harmless extra never reads as a mistake.

### Remove wrongMove

Only three steps use it, and the new check covers them.

| Step | Mistake | Where it goes |
|---|---|---|
| 1.1 | Deleting the newest pancakes file | Blocking extra, because 1.2 needs the file |
| 2.4 | Picking "stuff" as the commit message | The commit message picker, as a reaction to a bad pick |
| 4.x | Discarding the notes file | Blocking extra, once the engine has Discard |

Move the teaching sentence from the 1.1 and lesson 4 wrong moves into those steps' own text, so the idea lands even when nobody makes the mistake. Add a per step note later only if the generic ones feel flat. Remove `wrongMove` from `models/step.ts`, the three lessons, `lessons.spec.ts`, README's step table, and CLAUDE.md, and drop the player's "asked button on the wrong file" rule.

### Action enums

- Add `enums/action-type.ts` with an `ActionType` enum for all 26 actions, next to `FileStatus` and `TextType`.
- Next to it, a `BUTTON` table maps each action to its exact button name, like `EXTENSION` did for file types. It replaces `LABELS` in the action bar and the labels in `ICONS`, and the notes use it ("Your task asks for Commit").
- `FileActionType` becomes a union of enum members, `ActionType.Edit | ActionType.Delete | ActionType.Stage | ActionType.Unstage`.
- Events in `models/workspace-event.ts` get their own `EventType` enum (Push, Comment, Approve, MergePullRequest), so what you press stays apart from what others do.
- Templates that pass `['push']` or `@case ('edit')` expose the enum from their component.
- Add a spec check that every step's task names the button of each action it lists.

## Order of work

1. `ActionType`, `BUTTON`, and `EventType`, plus the task check in the spec.
2. Remove `wrongMove` and move its teaching lines into the step text.
3. The press check with the three outcomes, the dry run, and the notes. Make every button pressable. This fixes bugs 2 and 4 on the way, since an extra Edit should only mark a file Changed when its text differs.
4. A commit message box that supports typing (2.2) and picking (2.4).
5. Small engine fixes, bugs 3, 5, 6, 7, and 8.
6. Teach the engine the remaining buttons, one lesson at a time, starting with lesson 4.

## Other cleanups

- `plans/lesson-service.md` is mostly out of date. Mark it as history or delete it.
- Lesson 3 says "the notes file" five times in three steps. Vary it in the body and done text, and keep the plain name in tasks.
- The step progress bar has no label for screen readers.
