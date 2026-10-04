import { FileStatus } from '../../enums/file-status';
import { FileType } from '../../enums/file-type';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';

export const lesson01: Lesson = {
    id: 'what-is-a-repository',
    number: 1,
    title: 'What is a repository',
    minutes: 4,
    summary: 'Why your folders fill up with copies, and how Git stops it.',
    topics: [
        {
            term: 'Repository',
            plain: 'Project folder',
            definition: 'A folder of files whose history Git keeps track of.',
        },
    ],
    workspace: {
        config: { showStaging: false, showOrigin: false },
        files: [
            {
                name: 'pancakes final',
                content: '<h1>Pancakes</h1><p>1 egg</p><p>1 cup flour</p>',
                type: FileType.Doc,
                modifiedOn: '2026-09-28',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'pancakes final v2',
                content: '<h1>Pancakes</h1><p>1 egg</p><p>1 cup flour</p><p>1 cup milk</p>',
                type: FileType.Doc,
                modifiedOn: '2026-09-30',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'pancakes',
                content:
                    '<h1>Pancakes</h1><p>1 egg</p><p>1 cup flour</p><p>1 cup milk</p><p>1 pinch of salt</p>',
                type: FileType.Doc,
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'groceries',
                content: 'eggs\nflour\nbutter\n',
                type: FileType.Txt,
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
        ],
        history: null,
        branch: 'main',
        branches: ['main'],
        origin: null,
    },
    steps: [
        {
            id: '1.1',
            title: 'The messy folder',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You've probably done this. You change a file, get nervous, and save a copy just in case. A week later you have three versions and you're not sure which one is current.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'This recipe book has that problem. Find the newest pancake recipe by its date.',
                },
                { type: TextType.Task, text: 'Press Delete on the two older pancake files.' },
                {
                    type: TextType.Done,
                    text: "Notice the file called final wasn't the newest. Names lie. Git fixes this by keeping one file and remembering every version of it for you.",
                },
                {
                    type: TextType.WrongMove,
                    text: 'That was the newest one. In a normal folder, deleted means gone for good. Press Reset step and try again.',
                },
                {
                    type: TextType.Details,
                    text: "Copies feel safe, but they don't tell you what changed or why. Git stores every version inside the project with a note about each change, so you never keep copies by hand again.",
                },
            ],
            actions: [
                { type: 'delete', file: 'pancakes final' },
                { type: 'delete', file: 'pancakes final v2' },
            ],
        },
        {
            id: '1.2',
            title: 'Start tracking',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You want the safety of those copies without the mess. That's what a repository gives you.",
                },
                {
                    type: TextType.Paragraph,
                    text: "A repository is a folder where Git keeps every version of every file. When you start one, Git saves your files as they are right now. That's your first snapshot.",
                },
                { type: TextType.Task, text: 'Press Start tracking.' },
                {
                    type: TextType.Done,
                    text: 'From now on, you can always get back to this exact moment, no matter what you change later.',
                },
                {
                    type: TextType.Details,
                    text: "Real Git does this in two moves. git init turns the folder into a repository by adding a hidden .git folder, and your first commit saves the snapshot. Here we did both at once. You'll often hear repository shortened to repo.",
                },
            ],
            actions: [{ type: 'startTracking', message: 'Start of the recipe book' }],
        },
        {
            id: '1.3',
            title: 'Git notices changes',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You don't have to remember which files you touched. Git compares each file to the last snapshot and spots the differences for you.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Try it. Add something to the shopping list.',
                },
                { type: TextType.Task, text: 'Press Edit to add milk to groceries.txt.' },
                {
                    type: TextType.Done,
                    text: "Git marked groceries.txt as Changed, but it didn't save anything. Saving is always your call. That's the next lesson.",
                },
                {
                    type: TextType.Details,
                    text: "The command git status lists every file that's different from the last snapshot. Files Git has never saved show up as New. Git calls those untracked.",
                },
            ],
            actions: [{ type: 'edit', file: 'groceries', content: 'eggs\nflour\nbutter\nmilk\n' }],
        },
    ],
    recap: 'You started with three copies of one recipe and no idea which was right. Now you have one copy of each file and a snapshot you can always go back to.',
};
