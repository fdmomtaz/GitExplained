import { WorkspaceFile } from './workspace-file';

/** A button you press. Some actions carry `files`, the results the engine can't guess. */
export type Action =
    | { type: 'delete' | 'stage' | 'unstage' | 'ignore'; file: string }
    | { type: 'discard'; file: string; files: WorkspaceFile[] }
    | { type: 'edit'; file: string; content: string }
    | { type: 'newFile'; file: string; content: string }
    | { type: 'startTracking' | 'commit'; message: string }
    | { type: 'inspect'; snapshot: string } // click a snapshot to read it, nothing changes
    | { type: 'view'; snapshot: string; files: WorkspaceFile[] }
    | { type: 'revert'; snapshot: string; message: string; files: WorkspaceFile[] }
    | { type: 'backToNow'; files: WorkspaceFile[] }
    | { type: 'connect' | 'push' }
    | { type: 'pull'; files?: WorkspaceFile[] }
    | { type: 'newBranch' | 'deleteBranch'; branch: string }
    | { type: 'switch'; branch: string; files: WorkspaceFile[] }
    | { type: 'merge'; branch: string; message: string; files: WorkspaceFile[] }
    | { type: 'resolve'; file: string; content: string }
    | { type: 'newPullRequest'; from: string; into: string } // a branch name, or a project label in lesson 11
    | { type: 'mergePullRequest' }
    | { type: 'fork' | 'clone' } // fork copies upstream to origin, clone copies origin to your workspace
    | { type: 'newTag'; name: string }
    | { type: 'matchWords' }; // the recap quiz in lesson 12, built from every lesson's topics

export type ActionType = Action['type'];

/** The buttons that sit on a file row. */
export type FileActionType = 'edit' | 'delete' | 'stage' | 'unstage';
