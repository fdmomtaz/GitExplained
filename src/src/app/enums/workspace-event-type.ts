/** Things other people do once a step is done. */
export enum WorkspaceEventType {
    Push = 'push',
    Comment = 'comment', // on the open pull request
    Approve = 'approve', // on the open pull request
    MergePullRequest = 'mergePullRequest',
}
