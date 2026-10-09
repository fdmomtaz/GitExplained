import { ActionType } from '../enums/action-type';
import { FileStatus } from '../enums/file-status';
import { Action } from '../models/action';
import { Lesson } from '../models/lesson';
import { Workspace } from '../models/workspace';
import { WorkspaceFile } from '../models/workspace-file';

/** The workspace at step `index`: the lesson's start plus every earlier step, and this one too when `done`. */
export function stateAt(lesson: Lesson, index: number, done: boolean): Workspace {
    return lesson.steps
        .slice(0, done ? index + 1 : index)
        .flatMap((s) => s.actions)
        .reduce(apply, lesson.workspace);
}

/** The workspace after one button press. It mimics Git and only covers the buttons the lessons use so far. */
export function apply(ws: Workspace, action: Action): Workspace {
    switch (action.type) {
        case ActionType.Delete:
            find(ws, action.file);
            return { ...ws, files: ws.files.filter((f) => f.name !== action.file) };
        case ActionType.Edit: {
            // Before Start tracking nothing watches the folder, so nothing gets marked.
            const status = find(ws, action.file).status;
            const watched = ws.history && status !== FileStatus.New;
            return update(ws, action.file, {
                content: action.content,
                status: watched ? FileStatus.Changed : status,
            });
        }
        case ActionType.NewFile: {
            if (ws.files.some((f) => f.name === action.file)) {
                throw new Error(`There's already a file called ${action.file}`);
            }
            const file: WorkspaceFile = {
                name: action.file,
                content: action.content,
                modifiedOn: new Date().toISOString(),
                // Before Start tracking nothing watches the folder, so nothing gets marked.
                status: ws.history ? FileStatus.New : FileStatus.Unchanged,
                staged: false,
            };
            return { ...ws, files: [...ws.files, file] };
        }
        case ActionType.Stage:
            return update(ws, action.file, { staged: true });
        case ActionType.Unstage:
            return update(ws, action.file, { staged: false });
        case ActionType.StartTracking:
            return commit({ ...ws, history: [] }, action.message);
        case ActionType.Commit:
            if (!ws.history) throw new Error('Commit needs Start tracking first');
            return commit(ws, action.message);
        case ActionType.Connect:
            return { ...ws, origin: { label: 'Origin', files: [], history: [], pullRequests: [] } };
        case ActionType.Push:
            if (!ws.origin || !ws.history) throw new Error('Push needs history and origin');
            return {
                ...ws,
                origin: {
                    ...ws.origin,
                    history: ws.history,
                    files: ws.files
                        .filter((f) => f.status !== FileStatus.New)
                        .map((f) => ({ ...f, status: FileStatus.Unchanged, staged: false })),
                },
            };
        default:
            throw new Error(`The workspace can't do ${action.type} yet`);
    }
}

/** Saves a snapshot. Without staging it saves every change, with staging only the staged files. */
function commit(ws: Workspace, message: string): Workspace {
    const history = ws.history ?? [];
    const saved = (f: WorkspaceFile) =>
        ws.config.showStaging ? f.staged : f.status !== FileStatus.Unchanged;
    return {
        ...ws,
        files: ws.files.map((f) =>
            saved(f) ? { ...f, status: FileStatus.Unchanged, staged: false } : f,
        ),
        history: [
            {
                id: String(history.length + 1),
                message,
                author: 'You',
                when: 'just now',
                branch: ws.branch,
            },
            ...history,
        ],
    };
}

function find(ws: Workspace, name: string): WorkspaceFile {
    const file = ws.files.find((f) => f.name === name);
    if (!file) throw new Error(`No file called ${name}`);
    return file;
}

function update(ws: Workspace, name: string, change: Partial<WorkspaceFile>): Workspace {
    find(ws, name);
    return { ...ws, files: ws.files.map((f) => (f.name === name ? { ...f, ...change } : f)) };
}
