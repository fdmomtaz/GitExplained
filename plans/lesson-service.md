# Lesson service plan

This plan covers the models and services that give the app its lessons and steps. It follows the final design in Claude Design (`Git Tutorial Final.dc.html`) and the 12 lesson curriculum in `docs/study-plan.md`.

## Decisions

- The workspace mimics Git. It doesn't implement it. It only needs to look right for the moves each lesson asks for.
- The models follow the 12 lesson curriculum, not the 8 lessons in the final design. The models don't depend on the count. Only the content files do.
- Lesson content lives in typed files inside the app. There is no backend. A service reads the files, so moving to an API later only changes that service.
- Each lesson has a starting workspace. Each step asks for one action. The engine replays the actions to build the workspace for any step, the same way the design's `world()` does.
- One idea per step. A step lists its actions, usually just one. Step 1.1 has two, because deleting both old copies is one idea. Steps that mix ideas still get split, like 5.3 (Edit and Commit, then Push), 6.4, 7.3, 7.5, and 8.1.
- The engine only does simple list moves, like marking a file Changed or adding a snapshot to history. Anything it can't guess, like a file's text after a merge, comes from the lesson content.
- The metaphor tokens (`{at0}` to `{at3}`, `{T3}`) are gone. Lesson text uses the plain wording.
- A step is done once you press every button it asks for, on the files it names, in any order. There is no separate Check field. The Check line in the doc stays as a note for whoever writes the step.
- All the text of a step lives in `body`, in reading order. Each block says what kind of text it is, matching the bold labels in `docs/step-text.md`.
- The next lesson comes from `number`. Its `summary` serves as the teaser at the end of a lesson, so there is no `upNext` field.
- The glossary has no file or service of its own. The Glossary page builds it from every lesson's `topics`.
- Progress only knows three states per lesson, not started, in progress, and completed. Steps aren't saved, so reopening a lesson starts at step 1.
- Every file is plain text, and file names have no extension. Learners see "pancakes", not "pancakes.md", and the lesson text says "the pancakes file".

## Content models

You write these by hand, and the app only reads them.

```ts
export interface Lesson {
    id: string;             // 'what-is-a-repository', used in the URL
    number: number;
    title: string;
    minutes: number;
    summary: string;        // lesson card line, also the teaser at the end of the previous lesson
    topics: Topic[];        // terms the lesson teaches, which also fill the glossary
    workspace: Workspace;   // the workspace when the lesson opens
    steps: Step[];
    recap: string;          // End of lesson paragraph
}

export interface Step {
    id: string;             // '1.2'
    title: string;          // also shows in the step picker
    body: TextBlock[];      // all the step's text, in reading order
    actions: Action[];      // the moves the task asks for, in any order, usually just one
}

export enum TextType {
    Paragraph = 'paragraph',    // the normal body text, 1 or 2 per step
    Task = 'task',              // the Your task box
    Done = 'done',              // shown once the step is done
    Details = 'details',        // the closed More details box
    WrongMove = 'wrongMove',    // shown when you press the right button on the wrong file
}

export interface TextBlock {
    type: TextType;
    text: string;
}

export interface Topic {
    term: string;           // the Git word, 'Commit'
    plain: string;          // the name the lessons use, 'Snapshot'
    definition: string;
}
```

Step 1.3 as an example.

```ts
{
    id: '1.3',
    title: 'Git notices changes',
    body: [
        { type: TextType.Paragraph, text: "You don't have to remember which files you touched..." },
        { type: TextType.Paragraph, text: 'Try it. Add something to the shopping list.' },
        { type: TextType.Task, text: 'Press Edit to add milk to the groceries file.' },
        { type: TextType.Done, text: "Git marked the groceries file as Changed, but it didn't save anything..." },
        { type: TextType.Details, text: "The command git status lists every file that's different..." },
    ],
    actions: [{ type: 'edit', file: 'groceries', content: '...' }],
}
```

The lesson page doesn't show the blocks top to bottom. It picks them by type. Paragraphs go in the body, Task goes in the task box, Done shows once you finish, and Details sits closed at the bottom.

A wrong move is pressing the button the task asks for on a different file. Each file has its own buttons, so you never pick a file first. Edit and Delete are always enabled, like in a real folder. Pressing them when the step asks for something else just makes the move, and an Edit only marks the file Changed. Every other button is enabled only when the step asks for it. The page shows the step's WrongMove text if it has one, or a plain Try again message if not. Reset step is always in the footer.

What some of these fields are for.

| Field | Why it's there |
| --- | --- |
| `topics` | The terms a lesson teaches, from the Git words column in the README. They show as tags on the Lessons page, and the Glossary page lists them all with a link back to the lesson. |
| `recap` | The End of lesson paragraph in `docs/step-text.md`, shown after the last step. |
| `workspace` | The workspace when the lesson opens. Its `config` sets which panels the lesson uses. |

## Workspace

```ts
export interface WorkspaceConfig {
    showStaging: boolean;       // false in lessons 1 and 2, where Commit saves every change
    showOrigin: boolean;        // true from lesson 5 on
}

export enum FileStatus {
    Unchanged = 'unchanged',
    Changed = 'changed',
    New = 'new',
    Conflict = 'conflict',
    Ignored = 'ignored',
}

export interface WorkspaceFile {
    name: string;               // 'pancakes', no extension
    content: string;            // plain text
    modifiedOn: string;         // ISO date, shown as "Friday" in lesson 1
    status: FileStatus;
    staged: boolean;
}

export interface Snapshot {
    id: string;
    message: string;            // 'Add blueberries'
    author: string;             // 'You' or 'Sam'
    when: string;               // shown as "Mon" or "just now"
    branch: string;             // 'main', or 'vegan' in lesson 7
    tags?: string[];            // 'Summer edition' in lesson 12
}

export interface Origin {
    label: string;              // 'Origin'
    files: WorkspaceFile[];
    history: Snapshot[];        // newest first
}

export interface Workspace {
    config: WorkspaceConfig;
    files: WorkspaceFile[];
    history: Snapshot[] | null; // newest first, null until Start tracking in 1.2
    branch: string;             // the branch you're on
    branches: string[];
    origin: Origin | null;      // null until Connect to GitHub in lesson 5
}
```

What each Workspace field is for.

| Field | What it holds |
| --- | --- |
| `config` | Which panels the lesson uses. It's set when the lesson opens and never changes. |
| `files` | Your working files. Each file carries its own status and whether it's staged, the same way the design's `world()` does it. The staging panel shows the files where `staged` is true. |
| `history` | Your snapshots, newest first. Each one says which branch it's on, so lesson 7 can draw one line per branch. It's null while the folder isn't a repository yet, like at the start of lesson 1, and the history panel stays hidden. Real Git works the same way. A folder is a repository only once it has a history. |
| `branch` | The branch you're on. Switch changes it. |
| `branches` | Every branch name. Before lesson 7 it only holds main. |
| `origin` | The shared copy, with its own files and history. Sam's snapshots show up here. |

## Actions

An action is a button you press. One union covers every button in the lessons. Some actions carry `files`. Those are the results the engine can't guess, written into the content. View, Back to now, Discard, Revert, Merge, and a Pull that ends in a conflict all use it.

```ts
export type Action =
    | { type: 'delete' | 'stage' | 'unstage' | 'ignore'; file: string }
    | { type: 'discard'; file: string; files: WorkspaceFile[] }
    | { type: 'edit'; file: string; content: string }
    | { type: 'newFile'; file: string; content: string }
    | { type: 'startTracking' | 'commit'; message: string }
    | { type: 'view'; snapshot: string; files: WorkspaceFile[] }
    | { type: 'revert'; snapshot: string; message: string; files: WorkspaceFile[] }
    | { type: 'backToNow'; files: WorkspaceFile[] }
    | { type: 'connect' | 'push' }
    | { type: 'pull'; files?: WorkspaceFile[] }
    | { type: 'newBranch' | 'switch' | 'deleteBranch'; branch: string }
    | { type: 'merge'; branch: string; message: string; files: WorkspaceFile[] }
    | { type: 'resolve'; file: string; content: string }
    | { type: 'newTag'; name: string };
```

What the engine does for each button.

| Button | What changes |
| --- | --- |
| Edit | Sets the file's content and marks it Changed, unless it's New. |
| New file | Adds a file marked New. |
| Delete | Removes the file. |
| Stage, Unstage | Flips `staged` on the file. |
| Start tracking | Creates `history` with the first snapshot in it. |
| Commit | Adds a snapshot on the current branch. The staged files go back to Unchanged. When staging is hidden, every Changed and New file does. |
| Discard, Revert | Puts the files from the action in place. Revert also adds a snapshot. |
| View, Back to now | Puts the files from the action in place. View brings in the files from an old snapshot, and Back to now brings back the current ones. |
| Connect to GitHub | Creates `origin`, empty. |
| Push | Copies snapshots origin doesn't have yet. It gets refused when origin has a snapshot you don't. |
| Pull | Copies origin's new snapshots and files into yours. |
| New branch, Switch, Delete branch | Changes `branches` and `branch`. |
| Merge | Adds a merge snapshot and puts the action's files in place. |
| Resolve | Sets the file's content and clears Conflict. |
| Ignore | Marks the file Ignored. |
| New tag | Adds the tag to your latest snapshot. |

Being ahead of origin or behind it is never stored. The app compares `history` with `origin.history`.

## Services

| Service | Job |
| --- | --- |
| `LessonService` | Gives `lessons()` and `lesson(id)` from `src/app/content/lessons/lesson-01.ts` and the rest. The calls are synchronous because the content ships with the app. Moving to an API later only changes this service. |
| Workspace engine | Pure functions. `apply(ws, action)` returns the next state. `stateAt(lesson, step, done)` replays the lesson's starting workspace plus every earlier step's action. |
| `ProgressService` | Saves whether each lesson is not started, in progress, or completed, to localStorage, with signals. It drives the lesson labels and the Start or Continue buttons. The lesson page calls `start()` when a lesson opens and `complete()` after the last step. It doesn't track steps. |
| `LessonPlayer` | A store scoped to the lesson page. It tracks the current step, whether it's done, Reset step, Back, and Next. |

A Vitest test replays every lesson through the engine. It fails when a step asks for an action the workspace can't make at that point. It also checks that every step has exactly one Task and one Done, at most one Details and one WrongMove, and one or two Paragraphs. That catches broken content before anyone clicks through it.

## Status

| Piece | State |
| --- | --- |
| Content models, workspace models, actions | Done, one file per interface in `models/` and one per enum in `enums/` |
| `LessonService` | Done |
| `ProgressService` | Done. The lesson page calls `start()` and `complete()` |
| Workspace engine | Done for Delete, Edit, Stage, Unstage, Start tracking, Commit, Connect to GitHub, and Push. Other buttons throw until a lesson needs them |
| `LessonPlayer` and the lesson page | Done. Three file lists (working, staging, origin) with buttons on each file, and a plain list for each history. Draft lessons show a not ready yet page |
| Vitest content test | Done, plus player tests |
| Lesson 1 content | Done, with workspace, steps, and recap |
| Lessons 2 to 12 content | Card details and topics only. Steps, workspace, and recap wait until each lesson's text is polished |

## Later

- Sam working in the middle of a lesson. Lesson 6 can start with Sam's snapshot already on origin. Step 6.3 needs Sam to push again partway through, and lesson 9 needs Sam to change the same line you did. That needs some way for a step to change origin before you act. We'll design it when lesson 6 gets polished.
- Pull requests in lessons 10 and 11, and Alex's cookbook as a second origin in lesson 11. Those lessons are still outlines, so their models wait until the steps are written.

## Open questions

1. Tokens. `docs/step-text.md`, the live doc, and CLAUDE.md still use `{at0}` and the others. Should we swap them for the plain wording and update the rules?
2. "Your computer". The final design calls the local panel "Your computer · Local copy". CLAUDE.md says to avoid that phrase. Which one does the app use?
3. Typing. Do you type commit messages and branch names, or pick them from a list? Picking means Step gets a `choices` field. Typing means the step has to accept any text. This blocks the engine and `LessonPlayer`.
4. File names. Settled. Names have no extension and every file is plain text.
5. Keeping text in sync. Do we copy lesson text into the TS files by hand, or build them from `docs/step-text.md` with a script? A script keeps one source of truth. The bold labels already map to text block types, so only each step's action would need a fixed format in the Markdown.
