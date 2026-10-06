import { FileStatus } from '../../enums/file-status';
import { FileType } from '../../enums/file-type';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { doc } from '../doc';

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
                content: doc('Pancakes', '1 egg', '1 cup flour'),
                type: FileType.Doc,
                modifiedOn: '2026-09-28',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'pancakes final v2',
                content: doc('Pancakes', '1 egg', '1 cup flour', '1 cup milk'),
                type: FileType.Doc,
                modifiedOn: '2026-09-30',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'pancakes',
                content: doc('Pancakes', '1 egg', '1 cup flour', '1 cup milk', '1 pinch of salt'),
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
        upstream: null,
    },
    recap: 'You started with three copies of one recipe and no clue which one to trust. Now you have one copy of each file and a snapshot you can always go back to. Your days of naming files final v2 REAL are over.',
    steps: [
        {
            id: '1.1',
            title: 'The messy folder',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You've done this. You change a file, get nervous, and save a copy just in case. Then another. A week later you own three versions of the same recipe and trust none of them.",
                },
                {
                    type: TextType.Details,
                    text: "Copies feel safe, but they don't tell you what changed or why. Git stores every version inside the project with a note about each change, so you never keep copies by hand again.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Find the newest pancake recipe. Go by the dates, not the names.',
                },
            ],
            task: 'Press Delete on the two older pancake files.',
            done: "Well, who knew. The file called final wasn't the final version, and v2 wasn't either. Git ends this game for good. It keeps one file and remembers every version of it for you.",
            wrongMove:
                'Oops, that was the newest one. In a normal folder, deleted means gone for good, which is the problem Git solves. Press Reset step and try again.',
            // Check. pancakes final.md and pancakes final v2.md are gone, and pancakes.md is still there.
            actions: [
                { type: 'delete', file: 'pancakes final' },
                { type: 'delete', file: 'pancakes final v2' },
            ],
        },
        {
            id: '1.2',
            title: 'Start tracking',
            body: [
                { type: TextType.Paragraph, text: 'A repository is a folder with a memory.' },
                {
                    type: TextType.Paragraph,
                    text: 'Git remembers every version you save of every file inside it. When you start one, Git saves everything as it is right now, and that becomes your first snapshot.',
                },
                {
                    type: TextType.Details,
                    text: "Real Git does this in two moves. git init turns the folder into a repository by adding a hidden .git folder, and your first commit saves the snapshot. Start tracking does both. You'll often hear repository shortened to repo.",
                },
            ],
            task: 'Press Start tracking.',
            done: "That's Snapshot 1. Your folder is now called working files, and local history keeps your snapshots next to it. Whatever you break from here on, you can always get back to this moment. So go ahead and break things.",
            // Check. The repository exists and local history holds Snapshot 1.
            // Workspace. Your folder becomes working files. Local history slides in next to it with one snapshot, called Start of the recipe book.
            actions: [{ type: 'startTracking', message: 'Start of the recipe book' }],
        },
        {
            id: '1.3',
            title: 'Git notices changes',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You don't have to remember which files you touched. Git compares every file to the last snapshot and keeps a list. It's a little nosy, in a helpful way.",
                },
                {
                    type: TextType.Details,
                    text: "The command git status lists every file that's different from the last snapshot. Files Git has never saved show up as New. Git calls those untracked.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Test it. The shopping list is missing something important.',
                },
            ],
            task: 'Press Edit to add milk to groceries.txt.',
            done: "Caught. Git marked groceries.txt as Changed, but it didn't save a thing. Git notices everything and saves nothing until you say so. That's the next lesson.",
            // Check. groceries.txt shows Changed.
            actions: [{ type: 'edit', file: 'groceries', content: 'eggs\nflour\nbutter\nmilk\n' }],
        },
    ],
};
