import { EnumOption } from './converter';

/** The buttons you press in the workspace. */
export enum ActionType {
    Delete = 'delete',
    Stage = 'stage',
    Unstage = 'unstage',
    Ignore = 'ignore',
    Discard = 'discard',
    Edit = 'edit',
    NewFile = 'newFile',
    StartTracking = 'startTracking',
    Commit = 'commit',
    Inspect = 'inspect', // click a snapshot to read it, nothing changes
    View = 'view',
    Revert = 'revert',
    BackToNow = 'backToNow',
    Connect = 'connect',
    Push = 'push',
    Pull = 'pull',
    NewBranch = 'newBranch',
    DeleteBranch = 'deleteBranch',
    Switch = 'switch',
    Merge = 'merge',
    Resolve = 'resolve',
    NewPullRequest = 'newPullRequest',
    MergePullRequest = 'mergePullRequest',
    Fork = 'fork', // copies upstream to origin
    Clone = 'clone', // copies origin to your workspace
    NewTag = 'newTag',
    MatchWords = 'matchWords', // the recap quiz in lesson 12, built from every lesson's topics
}

/** The button names. The file row buttons also get a hint for their tooltip and the legend. */
export const ActionTypeOptions: EnumOption<ActionType>[] = [
    { identifier: ActionType.Delete, label: 'Delete', hint: 'Remove this file from the folder.' },
    {
        identifier: ActionType.Stage,
        label: 'Stage',
        hint: 'Pick this change for your next snapshot.',
    },
    {
        identifier: ActionType.Unstage,
        label: 'Unstage',
        hint: 'Leave this change out of your next snapshot.',
    },
    { identifier: ActionType.Ignore, label: 'Ignore' },
    { identifier: ActionType.Discard, label: 'Discard' },
    { identifier: ActionType.Edit, label: 'Edit', hint: 'Change what is in this file.' },
    { identifier: ActionType.NewFile, label: 'New file' },
    { identifier: ActionType.StartTracking, label: 'Start tracking' },
    { identifier: ActionType.Commit, label: 'Commit' },
    { identifier: ActionType.Inspect, label: 'Inspect' },
    { identifier: ActionType.View, label: 'View' },
    { identifier: ActionType.Revert, label: 'Revert' },
    { identifier: ActionType.BackToNow, label: 'Back to now' },
    { identifier: ActionType.Connect, label: 'Connect to GitHub' },
    { identifier: ActionType.Push, label: 'Push' },
    { identifier: ActionType.Pull, label: 'Pull' },
    { identifier: ActionType.NewBranch, label: 'New branch' },
    { identifier: ActionType.DeleteBranch, label: 'Delete branch' },
    { identifier: ActionType.Switch, label: 'Switch' },
    { identifier: ActionType.Merge, label: 'Merge' },
    { identifier: ActionType.Resolve, label: 'Resolve' },
    { identifier: ActionType.NewPullRequest, label: 'New pull request' },
    { identifier: ActionType.MergePullRequest, label: 'Merge pull request' },
    { identifier: ActionType.Fork, label: 'Fork' },
    { identifier: ActionType.Clone, label: 'Clone' },
    { identifier: ActionType.NewTag, label: 'New tag' },
    { identifier: ActionType.MatchWords, label: 'Match words' },
];
