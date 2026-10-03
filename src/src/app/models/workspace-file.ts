import { FileStatus } from '../enums/file-status';
import { FileType } from '../enums/file-type';

export interface WorkspaceFile {
    name: string; // 'pancakes.md'
    content: string; // plain text for Txt files, HTML for Doc files
    type: FileType;
    modifiedOn: string; // ISO date, shown as "Friday" in lesson 1
    status: FileStatus;
    staged: boolean;
}
