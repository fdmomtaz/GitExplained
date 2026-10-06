import { Origin } from './origin';
import { Snapshot } from './snapshot';
import { WorkspaceConfig } from './workspace-config';
import { WorkspaceFile } from './workspace-file';

export interface Workspace {
    config: WorkspaceConfig;
    files: WorkspaceFile[];
    history: Snapshot[] | null; // newest first, null until Start tracking in 1.2
    branch: string; // the branch you're on
    branches: string[];
    origin: Origin | null; // null until Connect to GitHub in lesson 5
    upstream: Origin | null; // someone else's project, only Alex's cookbook in lesson 11
}
