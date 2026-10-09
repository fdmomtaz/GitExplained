import { ActionType } from '../../enums/action-type';
import { FileStatus } from '../../enums/file-status';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { lines } from '../lines';

export const lesson07: Lesson = {
    id: 'branches',
    number: 7,
    title: 'Branches',
    minutes: 6,
    summary: 'How to try an idea without touching the version everyone uses.',
    topics: [
        {
            term: 'Branch',
            plain: 'A separate line of work',
            definition:
                'A parallel line of history where you try an idea without touching the main version.',
        },
        {
            term: 'Main',
            plain: 'The main branch',
            definition: 'The branch most projects treat as the official version.',
        },
        {
            term: 'Switch',
            plain: 'Move to a branch',
            definition: 'Change which branch you work on. Your files change to match it.',
        },
    ],
    workspace: {
        config: { showStaging: true, showOrigin: true },
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
                    '1 cup of chocolate chips',
                ),
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'soup',
                content: lines(
                    'Soup',
                    '3 potatoes',
                    '1 onion',
                    '4 cups of water',
                    '1 handful of croutons',
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
                id: '8',
                message: 'Fix potato spelling',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
            { id: 'sam2', message: 'Add croutons', author: 'Sam', when: 'earlier', branch: 'main' },
            {
                id: 'sam1',
                message: 'Add soup recipe',
                author: 'Sam',
                when: 'earlier',
                branch: 'main',
            },
            {
                id: '7',
                message: 'Add chocolate chips',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
            {
                id: '6',
                message: 'Undo Add 10 cups of salt',
                author: 'You',
                when: 'earlier',
                branch: 'main',
            },
            {
                id: '5',
                message: 'Add 10 cups of salt',
                author: 'You',
                when: 'earlier',
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
        origin: {
            label: 'Origin',
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
                        '1 cup of chocolate chips',
                    ),
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
                {
                    name: 'soup',
                    content: lines(
                        'Soup',
                        '3 potatoes',
                        '1 onion',
                        '4 cups of water',
                        '1 handful of croutons',
                    ),
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
            ],
            history: [
                {
                    id: '8',
                    message: 'Fix potato spelling',
                    author: 'You',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: 'sam2',
                    message: 'Add croutons',
                    author: 'Sam',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: 'sam1',
                    message: 'Add soup recipe',
                    author: 'Sam',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: '7',
                    message: 'Add chocolate chips',
                    author: 'You',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: '6',
                    message: 'Undo Add 10 cups of salt',
                    author: 'You',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: '5',
                    message: 'Add 10 cups of salt',
                    author: 'You',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: '4',
                    message: 'Add maple syrup',
                    author: 'You',
                    when: 'earlier',
                    branch: 'main',
                },
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
            pullRequests: [],
        },
        upstream: null,
    },
    recap: "You built a whole second version of the pancakes without touching the one Sam cooks from. That's what branches are for. Try anything you like, and main stays safe.",
    steps: [
        {
            id: '7.1',
            title: 'Make a branch',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'You want to try vegan pancakes. But Sam cooks from the pancake recipe every morning, and a failed experiment would ruin breakfast.',
                },
                {
                    type: TextType.Paragraph,
                    text: 'A branch is a separate line of snapshots. You try things there, and main stays as it is.',
                },
                {
                    type: TextType.Details,
                    text: 'main is just the first branch. Nothing about it is special. Older projects call it master. The command is git branch.',
                },
            ],
            task: 'Press New branch and name it vegan.',
            done: 'vegan starts at your latest snapshot. Right now it matches main, but not for long.',
            // Check. A vegan branch starts from your latest snapshot.
            actions: [{ type: ActionType.NewBranch, branch: 'vegan' }],
        },
        {
            id: '7.2',
            title: 'Switch to it',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Making a branch doesn't put you on it. That's a separate move.",
                },
                {
                    type: TextType.Details,
                    text: "The command is git switch. Git keeps a pointer called HEAD on the branch you're using.",
                },
            ],
            task: 'Press Switch and pick vegan.',
            done: "You're on vegan now. Every snapshot you take lands here, and main won't feel a thing.",
            // Check. Your current branch is vegan.
            actions: [
                {
                    type: ActionType.Switch,
                    branch: 'vegan',
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
                                '1 cup of chocolate chips',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'soup',
                            content: lines(
                                'Soup',
                                '3 potatoes',
                                '1 onion',
                                '4 cups of water',
                                '1 handful of croutons',
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
            id: '7.3',
            title: 'Work on the branch',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Time for the experiment. Swap the egg for a mashed banana and save it.',
                },
                {
                    type: TextType.Details,
                    text: 'A branch is a label that moves forward with every commit. vegan moved forward, and main stayed where it was.',
                },
            ],
            task: 'Press Edit to swap the egg for a banana in the pancakes file, then stage it and commit.',
            done: "The banana snapshot is on vegan. main still has the egg, so Sam's breakfast is safe.",
            // Check. The new snapshot is on vegan only.
            actions: [
                {
                    type: ActionType.Edit,
                    file: 'pancakes',
                    content: lines(
                        'Pancakes',
                        '1 mashed banana',
                        '1 cup flour',
                        '1 cup milk',
                        '1 pinch of salt',
                        '1 handful of blueberries',
                        '1 spoon of maple syrup',
                    ),
                },
                { type: ActionType.Stage, file: 'pancakes' },
                { type: ActionType.Commit, message: 'Swap the egg for a banana' },
            ],
        },
        {
            id: '7.4',
            title: 'Share the branch',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Branches can go to origin too. That way Sam can try the banana version without touching main.',
                },
                {
                    type: TextType.Details,
                    text: 'The first push of a new branch creates it on origin. After that, push and pull work on it the same way they do on main.',
                },
            ],
            task: 'Press Push.',
            done: 'Origin shows vegan next to main. Sam can now judge your banana pancakes, which is a little scary.',
            // Check. Origin shows a vegan branch next to main.
            actions: [{ type: ActionType.Push }],
        },
        {
            id: '7.5',
            title: 'Switch back',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Now switch back to main and keep an eye on the pancakes file.',
                },
                {
                    type: TextType.Details,
                    text: "Git swaps your files when you switch. If your edits clash with the other branch, Git won't let you switch until you commit or discard them.",
                },
            ],
            task: 'Press Switch and pick main.',
            done: "The egg is back. Your working files always match the branch you're on, so one folder can hold many versions of the recipe book.",
            // Check. Your current branch is main, and pancakes has the egg again.
            actions: [
                {
                    type: ActionType.Switch,
                    branch: 'main',
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
                                '1 cup of chocolate chips',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                        {
                            name: 'soup',
                            content: lines(
                                'Soup',
                                '3 potatoes',
                                '1 onion',
                                '4 cups of water',
                                '1 handful of croutons',
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
