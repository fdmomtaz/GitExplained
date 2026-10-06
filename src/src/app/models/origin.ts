import { PullRequest } from './pull-request';
import { Snapshot } from './snapshot';
import { WorkspaceFile } from './workspace-file';

export interface Origin {
    label: string; // 'Origin', or "Alex's Cookbook" for the upstream in lesson 11
    files: WorkspaceFile[];
    history: Snapshot[]; // newest first
    pullRequests: PullRequest[]; // the Pull requests tab, from lesson 10
}
