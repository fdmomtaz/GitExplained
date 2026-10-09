import { EnumOption } from './converter';

export enum FileStatus {
    Unchanged = 'unchanged',
    Changed = 'changed',
    New = 'new',
    Conflict = 'conflict',
    Ignored = 'ignored',
}

export const FileStatusOptions: EnumOption<FileStatus>[] = [
    { identifier: FileStatus.Unchanged, label: 'Unchanged' },
    {
        identifier: FileStatus.Changed,
        label: 'Changed',
        hint: 'Git sees that this file is different from the last snapshot.',
    },
    { identifier: FileStatus.New, label: 'New', hint: 'Git has never saved this file.' },
    {
        identifier: FileStatus.Conflict,
        label: 'Conflict',
        hint: 'Two changes touch the same lines. You pick which one to keep.',
    },
    { identifier: FileStatus.Ignored, label: 'Ignored' },
];
