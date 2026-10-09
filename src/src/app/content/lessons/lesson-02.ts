import { ActionType } from '../../enums/action-type';
import { FileStatus } from '../../enums/file-status';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { lines } from '../lines';

export const lesson02: Lesson = {
    id: 'taking-snapshots',
    number: 2,
    title: 'Taking snapshots',
    minutes: 5,
    summary: 'How to save your work as snapshots, and why each one needs a clear message.',
    topics: [
        {
            term: 'Commit',
            plain: 'Snapshot',
            definition: 'A saved snapshot of your changes, with a short note that describes them.',
        },
        {
            term: 'History',
            plain: 'Local history',
            definition:
                'The ordered list of every snapshot in a repository. Git also calls it the log.',
        },
    ],
    workspace: {
        config: { showStaging: false, showOrigin: false },
        files: [
            {
                name: 'pancakes',
                content: lines('Pancakes', '1 egg', '1 cup flour', '1 cup milk', '1 pinch of salt'),
                modifiedOn: '2026-10-02',
                status: FileStatus.Unchanged,
                staged: false,
            },
            {
                name: 'groceries',
                content: lines('eggs', 'flour', 'butter', 'milk'),
                modifiedOn: '2026-10-02',
                status: FileStatus.Changed,
                staged: false,
            },
        ],
        history: [
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
    recap: 'You saved the milk, the blueberries, and a whole new recipe. Each one sits in a snapshot with a message that explains it, and each snapshot is a moment you can always return to.',
    steps: [
        {
            id: '2.1',
            title: 'Change a file',
            body: [
                {
                    type: TextType.Paragraph,
                    text: "When you write something that matters, you probably press save every few minutes. Git's version of save is the snapshot, and you already took one in lesson 1. It records every file as it is, all at once.",
                },
                {
                    type: TextType.Paragraph,
                    text: 'Before you take one, give the pancakes an upgrade.',
                },
                {
                    type: TextType.Details,
                    text: 'Git tracks changes line by line. It sees one new line in the pancake recipe and one on the grocery list, and later it shows you just those lines. The command git diff lists them.',
                },
            ],
            task: 'Press Edit to add blueberries to the pancakes file.',
            done: 'Two files are Changed now, the milk and the blueberries. Neither one is saved. Right now they exist only in your working files and nowhere else.',
            // Check. pancakes shows Changed.
            actions: [
                {
                    type: ActionType.Edit,
                    file: 'pancakes',
                    content: lines(
                        'Pancakes',
                        '1 egg',
                        '1 cup flour',
                        '1 cup milk',
                        '1 pinch of salt',
                        '1 handful of blueberries',
                    ),
                },
            ],
        },
        {
            id: '2.2',
            title: 'Take a snapshot',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'A snapshot saves every changed file at once, plus a short message about what you did. Git calls a snapshot a commit. Same thing, fancier word.',
                },
                {
                    type: TextType.Details,
                    text: 'A commit stores your files, your message, your name, and the time. Git also gives it an ID, a long string of letters and numbers. Real Git asks you to pick files with git add before git commit. Here Commit does both.',
                },
            ],
            task: 'Press Commit and type a message, like Add blueberries and milk.',
            done: "Saved. Both edits went into one snapshot, because Commit grabs everything that changed. Sometimes you won't want that, and lesson 3 shows you how to pick.",
            // Check. Snapshot 2 is in local history, and pancakes and groceries show Unchanged.
            actions: [{ type: ActionType.Commit, message: 'Add blueberries and milk' }],
        },
        {
            id: '2.3',
            title: 'Add a new file',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'A recipe book with no cookies is just a sad pamphlet. Add some.',
                },
                {
                    type: TextType.Paragraph,
                    text: 'Git spots new files the same way it spots changes. It marks each one New until it lands in a snapshot.',
                },
                {
                    type: TextType.Details,
                    text: 'Git calls new files untracked. It leaves them alone until they go into a commit, and then it watches them like every other file. The command git status lists untracked files in their own group.',
                },
            ],
            task: 'Press New file and name it cookies.',
            done: "New means Git has never saved this file. Delete it now and it's gone for good, like those pancake copies in lesson 1. No pressure.",
            // Check. cookies shows New.
            actions: [
                {
                    type: ActionType.NewFile,
                    file: 'cookies',
                    content: lines('Cookies', '2 cups flour', '1 cup butter', '1 cup sugar'),
                },
            ],
        },
        {
            id: '2.4',
            title: 'Write a good message',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Picture yourself six months from now, hunting for the day you added cookies. You scroll through history and find "stuff", "stuff 2", and "fixed it". Good luck.',
                },
                {
                    type: TextType.Paragraph,
                    text: 'A good message says what changed, in a few plain words.',
                },
                {
                    type: TextType.Details,
                    text: 'Teams start a message with a verb, like Add, Fix, or Remove. Keep the first line under about 50 characters. Add more lines below it when you need to explain why. The command git log shows every snapshot with its message.',
                },
            ],
            task: 'Press Commit and pick the clearest message.',
            done: 'Your history now reads like a diary of the recipe book, minus the drama. Anyone can follow it, including future you, who will be grateful.',
            wrongMove:
                "That doesn't say what changed. Future you won't find anything with it. Press Reset step and pick again.",
            // Check. Snapshot 3 says Add cookie recipe, and cookies shows Unchanged. The other choices are "stuff" and "Update files".
            actions: [{ type: ActionType.Commit, message: 'Add cookie recipe' }],
        },
    ],
};
