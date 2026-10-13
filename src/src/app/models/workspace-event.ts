import { Remote } from '../enums/remote';
import { WorkspaceEventType } from '../enums/workspace-event-type';
import { Snapshot } from './snapshot';
import { WorkspaceFile } from './workspace-file';

/** Something another person does once a step is done, like Sam pushing to origin. */
export type WorkspaceEvent =
    | {
          type: WorkspaceEventType.Push;
          target: Remote;
          snapshot: Snapshot;
          files: WorkspaceFile[];
      }
    | {
          type: WorkspaceEventType.Comment | WorkspaceEventType.Approve;
          author: string;
          text: string;
      }
    | { type: WorkspaceEventType.MergePullRequest; author: string; target: Remote };
