import { Lesson } from '../../models/lesson';
import { Topic } from '../../models/topic';
import { WorkspaceConfig } from '../../models/workspace-config';

// Lessons 2 to 12 only carry what the lesson cards and glossary need. Each one moves into its
// own lesson file, with its workspace and steps, once its text is polished.
function draft(
    number: number,
    id: string,
    title: string,
    summary: string,
    topics: Topic[],
    config: WorkspaceConfig,
): Lesson {
    return {
        id,
        number,
        title,
        minutes: 5,
        summary,
        topics,
        workspace: {
            config,
            files: [],
            history: [],
            branch: 'main',
            branches: ['main'],
            origin: null,
        },
        steps: [],
        recap: '',
    };
}

const local: WorkspaceConfig = { showStaging: false, showOrigin: false };
const staging: WorkspaceConfig = { showStaging: true, showOrigin: false };
const shared: WorkspaceConfig = { showStaging: true, showOrigin: true };

export const draftLessons: Lesson[] = [
    draft(
        2,
        'taking-snapshots',
        'Taking snapshots',
        'Save a moment in time with a message.',
        [
            {
                term: 'Commit',
                plain: 'Snapshot',
                definition:
                    'A saved snapshot of your changes, with a short note that describes them.',
            },
            {
                term: 'History',
                plain: 'Local history',
                definition:
                    'The ordered list of every snapshot in a repository. Git also calls it the log.',
            },
        ],
        local,
    ),
    draft(
        3,
        'choosing-what-to-save',
        'Choosing what to save',
        'Pick only some changes for the next snapshot.',
        [
            {
                term: 'Staging area',
                plain: 'Next snapshot',
                definition: 'Where you collect the changes that go into your next commit.',
            },
            {
                term: 'Stage',
                plain: 'Pick for the next snapshot',
                definition:
                    'Put a changed file in the staging area so the next commit includes it.',
            },
            {
                term: 'Unstage',
                plain: 'Take it back out',
                definition: 'Move a file out of the staging area. Your edits stay in the file.',
            },
        ],
        staging,
    ),
    draft(
        4,
        'going-back-in-time',
        'Going back in time',
        'Look at old snapshots and undo mistakes.',
        [
            {
                term: 'Discard',
                plain: 'Throw away an edit',
                definition: 'Put a file back the way it was in your last snapshot.',
            },
            {
                term: 'Revert',
                plain: 'Undo a snapshot',
                definition:
                    'Make a new snapshot that reverses an earlier one and keeps the history intact.',
            },
        ],
        staging,
    ),
    draft(
        5,
        'sending-to-origin',
        'Sending to origin',
        'Put your snapshots on GitHub so others can use them.',
        [
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
        ],
        shared,
    ),
    draft(
        6,
        'getting-updates',
        'Getting updates',
        "Bring Sam's changes into your own copy.",
        [
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
        shared,
    ),
    draft(
        7,
        'branches',
        'Branches',
        'Try an idea without touching the main recipe book.',
        [
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
        shared,
    ),
    draft(
        8,
        'merging',
        'Merging',
        'Bring a finished idea back into main.',
        [
            {
                term: 'Merge',
                plain: 'Combine branches',
                definition: 'Bring the changes from one branch into another.',
            },
        ],
        shared,
    ),
    draft(
        9,
        'when-changes-collide',
        'When changes collide',
        'Decide what stays when you and Sam change the same line.',
        [
            {
                term: 'Conflict',
                plain: 'Changes that collide',
                definition:
                    'Two people changed the same line, and Git needs you to choose which version stays.',
            },
        ],
        shared,
    ),
    draft(
        10,
        'asking-before-merging',
        'Asking before merging',
        'Propose a change and get it reviewed.',
        [
            {
                term: 'Pull request',
                plain: 'A request to merge',
                definition: 'On GitHub, a proposal to merge your branch so others review it first.',
            },
            {
                term: 'Review',
                plain: 'A second pair of eyes',
                definition:
                    'Someone reads your pull request, leaves comments, and approves it before it merges.',
            },
        ],
        shared,
    ),
    draft(
        11,
        'copying-a-project',
        'Copying a project',
        "Add a recipe to a project you don't own.",
        [
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
        shared,
    ),
    draft(
        12,
        'good-habits',
        'Good habits',
        'Keep private files out and mark finished versions.',
        [
            {
                term: 'Ignore',
                plain: 'Keep out of Git',
                definition: 'Tell Git to never track a file, like private notes or passwords.',
            },
            {
                term: 'Tag',
                plain: 'A named version',
                definition:
                    'A label on one snapshot, like Summer edition, so you find it again later.',
            },
            {
                term: 'Release',
                plain: 'A finished version to share',
                definition:
                    'A tagged version you publish on GitHub so others download that exact copy.',
            },
        ],
        shared,
    ),
];
