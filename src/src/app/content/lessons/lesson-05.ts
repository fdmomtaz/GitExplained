import { FileStatus } from '../../enums/file-status';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { lines } from '../lines';

export const lesson05: Lesson = {
    id: 'sending-to-origin',
    number: 5,
    title: 'Sending to origin',
    minutes: 5,
    summary: 'How to put your snapshots on GitHub so other people can use them.',
    topics: [
        {
            term: 'Origin',
            plain: 'The shared copy',
            definition:
                'The usual name for the copy of your repository on GitHub that everyone works from.',
        },
        {
            term: 'Push',
            plain: 'Send to origin',
            definition: 'Upload your new snapshots to origin so others see them.',
        },
        {
            term: 'Ahead',
            plain: 'Not sent yet',
            definition: "Your copy is ahead when you have snapshots that origin doesn't have yet.",
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
                content: lines('Cookies', '2 cups flour', '1 cup butter', '1 cup sugar'),
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
        origin: null,
        upstream: null,
    },
    recap: 'Your recipe book now lives in two places, your local history and origin. They only match when you push, and you decide when that happens.',
    steps: [
        {
            id: '5.1',
            title: 'Meet origin',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'So far, every snapshot lives in your local history and nowhere else. Nobody else can see the recipe book, let alone help with it.',
                },
                {
                    type: TextType.Paragraph,
                    text: "Origin is a copy of the project on GitHub. It's the shared copy everyone works from, and you only connect it once.",
                },
                {
                    type: TextType.Details,
                    text: 'Git calls any copy of the project somewhere else a remote. Almost everyone names the main one origin. The command is git remote add.',
                },
            ],
            task: 'Press Connect to GitHub.',
            done: 'Origin is connected and completely empty. Connecting only makes the link. Nothing moves until you send it.',
            // Check. Origin is connected and has no snapshots.
            actions: [{ type: 'connect' }],
        },
        {
            id: '5.2',
            title: 'Push',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Pushing sends your snapshots to origin. Only snapshots travel. Edits you haven't committed stay where they are, so your secret notes are safe.",
                },
                {
                    type: TextType.Details,
                    text: "The command is git push. Push sends commits, never loose edits or staged files. That's why origin has no staging area.",
                },
            ],
            task: 'Press Push.',
            done: 'Origin now has all six snapshots, salt incident included. Anyone with access can read the whole history of the recipe book.',
            // Check. Origin history matches local history.
            actions: [{ type: 'push' }],
        },
        {
            id: '5.3',
            title: "You're ahead",
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'The cookies need chocolate chips. Add them and save a snapshot like you always do.',
                },
                {
                    type: TextType.Paragraph,
                    text: "Keep an eye on origin while you work. It won't budge.",
                },
                {
                    type: TextType.Details,
                    text: "Git never syncs on its own. Ahead counts the snapshots you have that origin doesn't. The command git status tells you how far ahead you are.",
                },
            ],
            task: 'Press Edit to add chocolate chips to the cookies file, then stage it and commit.',
            done: "Snapshot 7 is in your local history, but origin still has six. Local history says 1 ahead, which means you have a snapshot origin doesn't.",
            // Check. Snapshot 7 is in local history and not on origin.
            actions: [
                {
                    type: 'edit',
                    file: 'cookies',
                    content: lines(
                        'Cookies',
                        '2 cups flour',
                        '1 cup butter',
                        '1 cup sugar',
                        '1 cup of chocolate chips',
                    ),
                },
                { type: 'stage', file: 'cookies' },
                { type: 'commit', message: 'Add chocolate chips' },
            ],
        },
        {
            id: '5.4',
            title: 'Push again',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Pushing isn't a one time thing. Every new snapshot waits until you push it.",
                },
                {
                    type: TextType.Details,
                    text: 'Many people push at the end of every work session. Small, frequent pushes mean less to sort out when a teammate works on the same files.',
                },
            ],
            task: 'Press Push.',
            done: "Origin has Snapshot 7 too, and ahead drops back to 0. Commit as often as you like, and push when you're ready to share.",
            // Check. Origin history matches local history again.
            actions: [{ type: 'push' }],
        },
    ],
};
