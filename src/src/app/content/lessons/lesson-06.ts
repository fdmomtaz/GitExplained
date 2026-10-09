import { ActionType } from '../../enums/action-type';
import { FileStatus } from '../../enums/file-status';
import { Remote } from '../../enums/remote';
import { TextType } from '../../enums/text-type';
import { WorkspaceEventType } from '../../enums/workspace-event-type';
import { Lesson } from '../../models/lesson';
import { lines } from '../lines';

export const lesson06: Lesson = {
    id: 'getting-updates',
    number: 6,
    title: 'Getting updates',
    minutes: 6,
    summary: "How to bring in other people's work, and why you pull before you push.",
    topics: [
        {
            term: 'Pull',
            plain: 'Get updates',
            definition: 'Bring new snapshots from origin into your own copy.',
        },
        {
            term: 'Behind',
            plain: 'Missing updates',
            definition: "Your copy is behind when origin has snapshots you haven't pulled yet.",
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
                name: 'notes',
                content: lines('The pancakes are from a box mix.', 'Buy more box mix.'),
                modifiedOn: '2026-10-02',
                status: FileStatus.New,
                staged: false,
            },
        ],
        history: [
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
                    content: lines('Soup', '3 potatos', '1 onion', '4 cups of water'),
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
            ],
            history: [
                {
                    id: 'sam1',
                    message: 'Add soup recipe',
                    author: 'Sam',
                    when: 'this morning',
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
    recap: "You pulled in Sam's soup, fixed a typo, got turned away, and pulled again. That's the rhythm of working with someone. Pull, work, commit, pull, push.",
    steps: [
        {
            id: '6.1',
            title: 'Sam was here',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Meet Sam, your new recipe book partner. Sam loves soup and can't spell. Sam just pushed a soup recipe to origin.",
                },
                {
                    type: TextType.Paragraph,
                    text: "Now look at your working files. No soup. Git never brings in other people's work until you ask.",
                },
                {
                    type: TextType.Details,
                    text: 'Git finds new snapshots on origin with git fetch, which downloads them without touching your files. Apps like GitHub Desktop fetch on their own every few minutes.',
                },
            ],
            task: "Click Sam's new snapshot on origin.",
            done: "That's Sam's soup. Local history says 1 behind, which means origin has a snapshot you don't.",
            // Check. You clicked Sam's snapshot, and local history shows 1 behind.
            actions: [{ type: ActionType.Inspect, snapshot: 'sam1' }],
        },
        {
            id: '6.2',
            title: 'Pull',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Pull brings new snapshots from origin and updates your files to match.',
                },
                {
                    type: TextType.Details,
                    text: 'Pull is two moves in one. git fetch downloads the snapshots, and then git merge adds them to your work.',
                },
            ],
            task: 'Press Pull.',
            done: "The soup file is in your working files now, and you're 0 behind. You and Sam are looking at the same recipe book again.",
            // Check. soup is in working files, and local history shows 0 behind.
            actions: [
                {
                    type: ActionType.Pull,
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
                            content: lines('Soup', '3 potatos', '1 onion', '4 cups of water'),
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
            id: '6.3',
            title: "Fix Sam's typo",
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Sam's soup calls for 3 potatos. That's not how you spell potatoes, and you can't let it slide.",
                },
                {
                    type: TextType.Details,
                    text: "You and Sam work at the same time. Neither of you sees the other's snapshots until they reach origin and get pulled in.",
                },
            ],
            task: 'Press Edit to fix the spelling in the soup file, then stage it and commit.',
            done: "Fixed and saved, so you're 1 ahead. Meanwhile, Sam was busy too and just pushed another snapshot to origin. Croutons, it looks like.",
            // Check. Your spelling fix is a new snapshot in local history.
            // Workspace. Once the step is done, Sam's second snapshot, Add croutons, shows up on origin.
            actions: [
                {
                    type: ActionType.Edit,
                    file: 'soup',
                    content: lines('Soup', '3 potatoes', '1 onion', '4 cups of water'),
                },
                { type: ActionType.Stage, file: 'soup' },
                { type: ActionType.Commit, message: 'Fix potato spelling' },
            ],
            events: [
                {
                    type: WorkspaceEventType.Push,
                    target: Remote.Origin,
                    snapshot: {
                        id: 'sam2',
                        message: 'Add croutons',
                        author: 'Sam',
                        when: 'just now',
                        branch: 'main',
                    },
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
                                '3 potatos',
                                '1 onion',
                                '4 cups of water',
                                '1 handful of croutons',
                            ),
                            modifiedOn: '2026-10-02',
                            status: FileStatus.Unchanged,
                            staged: false,
                        },
                    ],
                },
            ],
        },
        {
            id: '6.4',
            title: 'Push gets refused',
            body: [
                { type: TextType.Paragraph, text: 'Your fix is ready. Send it to origin.' },
                {
                    type: TextType.Details,
                    text: "Git refuses on purpose. If it took your push as is, Sam's croutons snapshot would be lost. Git's message says the push was rejected because origin has work you don't have.",
                },
            ],
            task: 'Press Push.',
            done: "Origin said no. It has Sam's croutons and you don't, and Git refuses any push that would wipe out someone else's work.",
            // Check. The push was refused, and origin didn't change.
            actions: [{ type: ActionType.Push }],
        },
        {
            id: '6.5',
            title: 'Pull, then push',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'The fix is easy. Pull first to get the croutons, then push your spelling fix on top.',
                },
                {
                    type: TextType.Details,
                    text: 'When you both have new snapshots, Pull joins them. Real Git does it with a merge snapshot, or by putting yours on top with the rebase option. Lesson 8 covers merging.',
                },
            ],
            task: 'Press Pull, then press Push.',
            done: "Origin has Sam's croutons and your spelling fix. Pull before you push, every time, and Git stops turning you away.",
            // Check. Origin has your snapshot and both of Sam's.
            actions: [
                {
                    type: ActionType.Pull,
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
                { type: ActionType.Push },
            ],
        },
    ],
};
