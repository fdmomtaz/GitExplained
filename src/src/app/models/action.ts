import { ActionType } from '../enums/action-type';
import { WorkspaceFile } from './workspace-file';

/** A button you press. Some actions carry `files`, the results the engine can't guess. */
export type Action =
    | {
          type: ActionType.Delete | ActionType.Stage | ActionType.Unstage | ActionType.Ignore;
          file: string;
      }
    | { type: ActionType.Discard; file: string; files: WorkspaceFile[] }
    | { type: ActionType.Edit; file: string; content: string }
    | { type: ActionType.NewFile; file: string; content: string }
    | { type: ActionType.StartTracking | ActionType.Commit; message: string }
    | { type: ActionType.Inspect; snapshot: string }
    | { type: ActionType.View; snapshot: string; files: WorkspaceFile[] }
    | { type: ActionType.Revert; snapshot: string; message: string; files: WorkspaceFile[] }
    | { type: ActionType.BackToNow; files: WorkspaceFile[] }
    | { type: ActionType.Connect | ActionType.Push }
    | { type: ActionType.Pull; files?: WorkspaceFile[] }
    | { type: ActionType.NewBranch | ActionType.DeleteBranch; branch: string }
    | { type: ActionType.Switch; branch: string; files: WorkspaceFile[] }
    | { type: ActionType.Merge; branch: string; message: string; files: WorkspaceFile[] }
    | { type: ActionType.Resolve; file: string; content: string }
    | { type: ActionType.NewPullRequest; from: string; into: string } // a branch name, or a project label in lesson 11
    | { type: ActionType.MergePullRequest }
    | { type: ActionType.Fork | ActionType.Clone }
    | { type: ActionType.NewTag; name: string }
    | { type: ActionType.MatchWords };
