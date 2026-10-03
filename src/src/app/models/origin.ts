import { Snapshot } from './snapshot';
import { WorkspaceFile } from './workspace-file';

export interface Origin {
    label: string; // 'Origin'
    files: WorkspaceFile[];
    history: Snapshot[]; // newest first
}
