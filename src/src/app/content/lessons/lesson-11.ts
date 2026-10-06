import { FileStatus } from '../../enums/file-status';
import { FileType } from '../../enums/file-type';
import { TextType } from '../../enums/text-type';
import { Lesson } from '../../models/lesson';
import { doc } from '../doc';

export const lesson11: Lesson = {
    id: 'copying-a-project',
    number: 11,
    title: 'Copying a project',
    minutes: 6,
    summary: "How to add to a project you don't own.",
    topics: [
        {
            term: 'Fork',
            plain: 'Your own copy on GitHub',
            definition:
                "A copy of someone else's repository under your GitHub account, so you can change it freely.",
        },
        {
            term: 'Clone',
            plain: 'Copy a project',
            definition: 'Download a full copy of a repository, including its whole history.',
        },
    ],
    workspace: {
        config: { showStaging: true, showOrigin: true },
        files: [],
        history: null,
        branch: 'main',
        branches: ['main'],
        origin: null,
        upstream: {
            label: "Alex's Cookbook",
            files: [
                {
                    name: 'waffles',
                    content: doc('Waffles', '2 eggs', '2 cups flour', '1 cup milk'),
                    type: FileType.Doc,
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
                {
                    name: 'crepes',
                    content: doc('Crepes', '2 eggs', '1 cup flour', '2 cups milk'),
                    type: FileType.Doc,
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
                {
                    name: 'french toast',
                    content: doc(
                        'French toast',
                        '4 slices of bread',
                        '2 eggs',
                        '1 spoon of cinnamon',
                    ),
                    type: FileType.Doc,
                    modifiedOn: '2026-10-02',
                    status: FileStatus.Unchanged,
                    staged: false,
                },
            ],
            history: [
                {
                    id: 'alex3',
                    message: 'Add french toast',
                    author: 'Alex',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: 'alex2',
                    message: 'Add crepes',
                    author: 'Alex',
                    when: 'earlier',
                    branch: 'main',
                },
                {
                    id: 'alex1',
                    message: 'Add waffles',
                    author: 'Alex',
                    when: 'earlier',
                    branch: 'main',
                },
            ],
            pullRequests: [],
        },
    },
    recap: "You copied a project you don't own, added to it, and sent your change back. Fork, clone, commit, push, pull request. That's how strangers on the internet help each other.",
    steps: [
        {
            id: '11.1',
            title: 'Make your own copy',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Alex runs a big public cookbook on GitHub. It has waffles, crepes, and french toast. No pancakes. Somebody has to fix this.',
                },
                {
                    type: TextType.Paragraph,
                    text: "You can't push to Alex's project, because it isn't yours. A fork is your own copy of it on GitHub, and you can push to that one all you want.",
                },
                {
                    type: TextType.Details,
                    text: 'A fork lives on GitHub, under your name. It remembers where it came from, which is how a pull request finds its way back to the original later.',
                },
            ],
            task: "Press Fork on Alex's Cookbook.",
            done: "You now have your own copy of the cookbook on GitHub. Alex's cookbook hasn't changed, and Alex has no idea what's coming.",
            // Check. Your fork of the cookbook shows up as origin.
            actions: [{ type: 'fork' }],
        },
        {
            id: '11.2',
            title: 'Clone your fork',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Your fork lives on GitHub, but you need a copy you can edit. Clone copies the whole project into your working files, history and all.',
                },
                {
                    type: TextType.Details,
                    text: "The command is git clone. It downloads every snapshot, not just the latest files. Cloning also sets up origin for you, so there's nothing to connect.",
                },
            ],
            task: 'Press Clone on your fork.',
            done: 'Every cookbook file came along, and so did every snapshot. Your fork is origin for this copy, so Push and Pull already know where to go.',
            // Check. Working files and local history show the cookbook.
            actions: [{ type: 'clone' }],
        },
        {
            id: '11.3',
            title: 'Add your recipe',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'You know this part by heart. Add the file, then save a snapshot.',
                },
                {
                    type: TextType.Details,
                    text: 'Big projects often have rules for file names and commit messages. Their README or contributing guide tells you what they are.',
                },
            ],
            task: 'Press New file and name it pancakes.md, then stage it and commit.',
            done: 'The cookbook finally has pancakes, at least in your local history. Nobody else can see them yet.',
            // Check. pancakes.md is in a new snapshot in local history.
            actions: [
                {
                    type: 'newFile',
                    file: 'pancakes',
                    content: doc(
                        'Pancakes',
                        '1 egg',
                        '1 cup flour',
                        '1 cup milk',
                        '1 pinch of salt',
                    ),
                    fileType: FileType.Doc,
                },
                { type: 'stage', file: 'pancakes' },
                { type: 'commit', message: 'Add pancakes' },
            ],
        },
        {
            id: '11.4',
            title: 'Push to your fork',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Push sends your snapshot to your fork, the same way it did with the recipe book.',
                },
                {
                    type: TextType.Details,
                    text: "Your fork also falls behind when Alex adds other people's recipes. GitHub has a Sync fork button that brings those changes into your fork.",
                },
            ],
            task: 'Press Push.',
            done: "Your fork has the pancakes, but Alex's Cookbook still doesn't. A fork never sends anything back to the original by itself.",
            // Check. Your fork has pancakes.md, and Alex's Cookbook doesn't.
            actions: [{ type: 'push' }],
        },
        {
            id: '11.5',
            title: 'Send it to Alex',
            body: [
                {
                    type: TextType.Paragraph,
                    text: 'Pull requests work between projects too. This one asks Alex to pull your recipe from your fork into the cookbook.',
                },
                {
                    type: TextType.Details,
                    text: 'This is how open source works. Anyone can fork a public project and suggest a change. The owner looks it over and decides. Most big projects ask you to read their contributing guide first.',
                },
            ],
            task: "Press New pull request and pick your fork into Alex's Cookbook.",
            done: "Alex merged it in under a minute. Alex was clearly hungry. Your recipe is now part of a project you don't own, and Alex still got the final say.",
            // Check. Alex's Cookbook has pancakes.md.
            // Workspace. Alex merges the pull request right after you open it.
            actions: [{ type: 'newPullRequest', from: 'Your fork', into: "Alex's Cookbook" }],
            events: [{ type: 'mergePullRequest', author: 'Alex', target: 'upstream' }],
        },
    ],
};
