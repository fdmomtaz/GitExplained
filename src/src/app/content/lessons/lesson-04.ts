import { FileStatus } from '../../enums/file-status';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { lines } from '../lines';

export const lesson04: Lesson = {
    id: 'going-back-in-time',
    number: 4,
    title: 'Going back in time',
    minutes: 5,
    summary: 'How to look at old snapshots and undo mistakes without losing anything.',
    topics: [
        {
            term: 'Discard',
            plain: 'Throw away an edit',
            definition: 'Put a file back the way it was in your last snapshot.',
        },
        {
            term: 'Revert',
            plain: 'Undo a snapshot',
            definition:
                'Make a new snapshot that reverses an earlier one and leaves the old one in history.',
        },
    ],
    workspace: {
        config: { showStaging: true, showOrigin: false },
        files: [
            {
                name: 'pancakes',
                content: lines(
                    'Pancakes',
                    '1 egg',
                    '1 cup flour',
                    '1 cup milk',
                    '1 pinch of salt',
                    '1 handful of blueberries',
                    '1 spoon of maple syrup',
                ),
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'groceries',
                content: lines('eggs', 'flour', 'butter', 'milk', 'choc'),
                modifiedOn: '2026-10-02',
                status: FileStatus.Changed,
                staged: false,
            },
            {
                name: 'cookies',
                content: lines(
                    'Cookies',
                    '2 cups flour',
                    '1 cup butter',
                    '1 cup sugar',
                    '10 cups of salt',
                ),
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'notes',
                content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                modifiedOn: '2026-10-02',
                status: FileStatus.New,
                staged: false,
            },
        ],
        history: [
            {
                id: '5',
                message: 'Add 10 cups of salt',
                author: 'You',
                when: 'late last night',
                branch: 'main',
            },
            { id: '4', message: 'Add maple syrup', author: 'You', when: 'earlier', branch: 'main' },
            {
                id: '3',
                message: 'Add cookie recipe',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
            {
                id: '2',
                message: 'Add blueberries and milk',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
            {
                id: '1',
                message: 'Start of the recipe book',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
        ],
        branch: 'main',
        branches: ['main'],
        origin: null,
        upstream: null,
    },
    recap: 'You visited the past, came back, threw away an edit, and undid a salty mistake. Git never erased anything you saved. It added new snapshots instead, so the whole story is still there.',
    steps: [
        {
            id: '4.1',
            title: 'Visit the past',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Every snapshot is a moment you can go back to and look around. Looking changes nothing, so you can't break anything here.",
                },
                {
                    type: TextType.Details,
                    text: "The command is git checkout with a snapshot ID. Git calls this a detached HEAD, which sounds like a horror movie. It only means you're looking at an old snapshot instead of the newest one.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Things got weird last night. Snapshot 5 put 10 cups of salt in the cookies, and nobody knows how. First, visit a simpler time, before cookies existed.',
                },
            ],
            task: 'Click Snapshot 2 and press View.',
            done: "This is the recipe book as it was in Snapshot 2. No cookies, no syrup, no salt. History didn't change at all. You're only visiting.",
            // Check. Working files show the files from Snapshot 2.
            // Workspace. Working files switch to Snapshot 2's version, with a note that says Viewing Snapshot 2.
            actions: [
                {
                    type: 'view',
                    snapshot: '2',
                    files: [
                        {
                            name: 'pancakes',
                            content: lines(
                                'Pancakes',
                                '1 egg',
                                '1 cup flour',
                                '1 cup milk',
                                '1 pinch of salt',
                                '1 handful of blueberries',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'groceries',
                            content: lines('eggs', 'flour', 'butter', 'milk'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'notes',
                            content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.New,
                            staged: false,
                        },
                    ],
                },
            ],
        },
        {
            id: '4.2',
            title: 'Come back to now',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Nice place to visit, but your real work happens in the present. Time to head back.',
                },
                {
                    type: TextType.Details,
                    text: "HEAD is Git's name for where you are right now. Coming back moves HEAD to your newest snapshot.",
                },
            ],
            task: 'Press Back to now.',
            done: "Welcome back. Your files match the latest snapshot again, salt and all. You'll deal with the salt in a minute.",
            // Check. Working files show the latest snapshot.
            actions: [
                {
                    type: 'backToNow',
                    files: [
                        {
                            name: 'pancakes',
                            content: lines(
                                'Pancakes',
                                '1 egg',
                                '1 cup flour',
                                '1 cup milk',
                                '1 pinch of salt',
                                '1 handful of blueberries',
                                '1 spoon of maple syrup',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'groceries',
                            content: lines('eggs', 'flour', 'butter', 'milk', 'choc'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Changed,
                            staged: false,
                        },
                        {
                            name: 'cookies',
                            content: lines(
                                'Cookies',
                                '2 cups flour',
                                '1 cup butter',
                                '1 cup sugar',
                                '10 cups of salt',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'notes',
                            content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.New,
                            staged: false,
                        },
                    ],
                },
            ],
        },
        {
            id: '4.3',
            title: 'Throw away an edit',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Remember the half written shopping list? It ends with the word "choc", and nobody knows what came next.',
                },
                {
                    type: TextType.Paragraph,
                    text: "Discard puts a file back to how it looked in the last snapshot. It's the fastest way to say never mind.",
                },
                {
                    type: TextType.Details,
                    text: "The command is git restore. Discard is one of the few moves Git can't undo, since there's no saved copy to go back to. Use it when you're sure.",
                },
            ],
            task: 'Press Discard on the groceries file.',
            done: 'The groceries file matches the last snapshot again. That edit is gone for real, because it was never in a snapshot. Git can only bring back what you saved.',
            wrongMove:
                'The notes file has never been in a snapshot, so discarding it deletes it for good. Press Reset step and pick the groceries file.',
            // Check. groceries shows Unchanged.
            actions: [
                {
                    type: 'discard',
                    file: 'groceries',
                    files: [
                        {
                            name: 'pancakes',
                            content: lines(
                                'Pancakes',
                                '1 egg',
                                '1 cup flour',
                                '1 cup milk',
                                '1 pinch of salt',
                                '1 handful of blueberries',
                                '1 spoon of maple syrup',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'groceries',
                            content: lines('eggs', 'flour', 'butter', 'milk'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'cookies',
                            content: lines(
                                'Cookies',
                                '2 cups flour',
                                '1 cup butter',
                                '1 cup sugar',
                                '10 cups of salt',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'notes',
                            content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.New,
                            staged: false,
                        },
                    ],
                },
            ],
        },
        {
            id: '4.4',
            title: 'Undo a snapshot',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Now the salt. Snapshot 5 is in history for good, so you can't just delete it.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Revert makes a new snapshot that does the opposite of a bad one. The bad one stays in history as evidence.',
                },
                {
                    type: TextType.Details,
                    text: 'The command is git revert. Git also has git reset, which can erase snapshots. Avoid it on shared work, because other people may already have the snapshots you erase.',
                },
            ],
            task: 'Click Snapshot 5 and press Revert.',
            done: 'Snapshot 6 takes the salt back out, and Snapshot 5 is still there. Git never erases history. It fixes mistakes by adding to it.',
            // Check. Snapshot 6 is in local history, cookies has no salt, and Snapshot 5 is still in history.
            actions: [
                {
                    type: 'revert',
                    snapshot: '5',
                    message: 'Undo Add 10 cups of salt',
                    files: [
                        {
                            name: 'pancakes',
                            content: lines(
                                'Pancakes',
                                '1 egg',
                                '1 cup flour',
                                '1 cup milk',
                                '1 pinch of salt',
                                '1 handful of blueberries',
                                '1 spoon of maple syrup',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'groceries',
                            content: lines('eggs', 'flour', 'butter', 'milk'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'cookies',
                            content: lines(
                                'Cookies',
                                '2 cups flour',
                                '1 cup butter',
                                '1 cup sugar',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'notes',
                            content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.New,
                            staged: false,
                        },
                    ],
                },
            ],
        },
    ],
};
