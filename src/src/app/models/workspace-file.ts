import { FileStatus } from '../enums/file-status';

export interface WorkspaceFile {
    name: string; // 'pancakes', no extension
    content: string; // plain text
    modifiedOn: string; // ISO date
    status: FileStatus;
    staged: boolean;
}
