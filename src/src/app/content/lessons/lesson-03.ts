import { FileStatus } from '../../enums/file-status';
import { FileType } from '../../enums/file-type';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { doc } from '../doc';

export const lesson03: Lesson = {
    id: 'choosing-what-to-save',
    number: 3,
    title: 'Choosing what to save',
    minutes: 5,
    summary: 'How to save some changes and leave the rest for later.',
    topics: [
        {
            term: 'Staging area',
            plain: 'Next snapshot',
            definition: 'Where you collect the changes that go into your next commit.',
        },
        {
            term: 'Stage',
            plain: 'Pick for the next snapshot',
            definition: 'Put a changed file in the staging area so the next commit includes it.',
        },
        {
            term: 'Unstage',
            plain: 'Take it back out',
            definition: 'Move a file out of the staging area. Your edits stay in the file.',
        },
    ],
    workspace: {
        config: { showStaging: true, showOrigin: false },
        files: [
            {
                name: 'pancakes',
                content: doc(
                    'Pancakes',
                    '1 egg',
                    '1 cup flour',
                    '1 cup milk',
                    '1 pinch of salt',
                    '1 handful of blueberries',
                    '1 spoon of maple syrup',
                ),
                type: FileType.Doc,
                modifiedOn: '2026-10-02',
                status: FileStatus.Changed,
                staged: false,
            },
            {
                name: 'groceries',
                content: 'eggs\nflour\nbutter\nmilk\nchoc\n',
                type: FileType.Txt,
                modifiedOn: '2026-10-02',
                status: FileStatus.Changed,
                staged: false,
            },
            {
                name: 'cookies',
                content: doc('Cookies', '2 cups flour', '1 cup butter', '1 cup sugar'),
                type: FileType.Doc,
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'notes',
                content: 'The pancakes are from a box mix.\nBuy more box mix.\n',
                type: FileType.Txt,
                modifiedOn: '2026-10-02',
                status: FileStatus.New,
                staged: false,
            },
        ],
        history: [
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
    recap: "You saved the syrup, left the shopping list for later, and kept a dark secret out of the family records. That's staging. You decide what every snapshot holds.",
    steps: [
        {
            id: '3.1',
            title: 'Pick what goes in',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "You've been busy. The syrup in pancakes.md is done, the shopping list is half written, and notes.txt is brand new.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Commit everything and you get one messy snapshot. Staging lets you pick. Whatever you stage waits in the staging area for the next snapshot.',
                },
                {
                    type: TextType.Details,
                    text: 'Git calls this git add. The staging area is also called the index. Until now, Commit staged every change for you behind the scenes.',
                },
            ],
            task: 'Press Stage on pancakes.md.',
            done: "pancakes.md is in the staging area now, ready for the next snapshot. The other files didn't move, and they won't until you move them.",
            // Check. pancakes.md is staged.
            actions: [{ type: 'stage', file: 'pancakes' }],
        },
        {
            id: '3.2',
            title: 'Stage a new file',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "New files go through staging too. Stage notes.txt and take a peek at what's inside.",
                },
                {
                    type: TextType.Details,
                    text: "Staging a new file is how Git starts tracking it. Once it's in a snapshot, Git watches it like every other file.",
                },
            ],
            task: 'Press Stage on notes.txt.',
            done: 'notes.txt is in the staging area too. Wait. Its first line says "The pancakes are from a box mix." That secret can\'t go in the family recipe book.',
            // Check. notes.txt is staged.
            actions: [{ type: 'stage', file: 'notes' }],
        },
        {
            id: '3.3',
            title: 'Take it back out',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Unstage takes a file out of the next snapshot. It doesn't delete anything. Your notes stay in your working files, and the secret stays safe.",
                },
                {
                    type: TextType.Details,
                    text: 'Unstage never touches your work. It only changes what goes in the next snapshot. The command is git restore with the staged option. Lesson 12 shows how to make Git ignore a file for good.',
                },
            ],
            task: 'Press Unstage on notes.txt.',
            done: 'Crisis avoided. notes.txt is back in your working files, still New, and the box mix stays between you and Git.',
            // Check. notes.txt is not staged and still shows New.
            actions: [{ type: 'unstage', file: 'notes' }],
        },
        {
            id: '3.4',
            title: 'Take a snapshot',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "Now commit. Only what's in the staging area goes in. The half written list and the secret stay out, right where you left them.",
                },
                {
                    type: TextType.Details,
                    text: 'This is why staging exists. You can work on five things at once and still save them as five clean snapshots. Real Git even lets you stage some lines of a file and leave the rest.',
                },
            ],
            task: 'Press Commit with the message Add maple syrup.',
            done: "Snapshot 4 holds the syrup and nothing else. One snapshot, one idea. A year from now you'll still know what it did.",
            // Check. Snapshot 4 is in local history and holds only pancakes.md. groceries.txt still shows Changed, and notes.txt still shows New.
            actions: [{ type: 'commit', message: 'Add maple syrup' }],
        },
    ],
};
