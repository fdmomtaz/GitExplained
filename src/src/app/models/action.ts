import { WorkspaceFile } from './workspace-file';

/** A button you press. Some actions carry `files`, the results the engine can't guess. */
export type Action =
    | { type: 'delete' | 'stage' | 'unstage' | 'ignore'; file: string }
    | { type: 'discard'; file: string; files: WorkspaceFile[] }
    | { type: 'edit'; file: string; content: string }
    | { type: 'newFile'; file: string; content: string }
    | { type: 'startTracking' | 'commit'; message: string }
    | { type: 'view'; snapshot: string; files: WorkspaceFile[] }
    | { type: 'revert'; snapshot: string; message: string; files: WorkspaceFile[] }
    | { type: 'backToNow'; files: WorkspaceFile[] }
    | { type: 'connect' | 'push' }
    | { type: 'pull'; files?: WorkspaceFile[] }
    | { type: 'newBranch' | 'switch' | 'deleteBranch'; branch: string }
    | { type: 'merge'; branch: string; message: string; files: WorkspaceFile[] }
    | { type: 'resolve'; file: string; content: string }
    | { type: 'newTag'; name: string };
