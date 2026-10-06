import { Snapshot } from './snapshot';
import { WorkspaceFile } from './workspace-file';

/** Something another person does once a step is done, like Sam pushing to origin. */
export type WorkspaceEvent =
    | { type: 'push'; target: 'origin' | 'upstream'; snapshot: Snapshot; files: WorkspaceFile[] }
    | { type: 'comment' | 'approve'; author: string; text: string } // on the open pull request
    | { type: 'mergePullRequest'; author: string; target: 'origin' | 'upstream' };
