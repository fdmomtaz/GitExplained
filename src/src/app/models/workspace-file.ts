import { FileStatus } from '../enums/file-status';
import { FileType } from '../enums/file-type';

export interface WorkspaceFile {
    name: string; // 'pancakes', the extension comes from type
    content: string; // plain text for Txt files, HTML for Doc files
    type: FileType;
    modifiedOn: string; // ISO date
    status: FileStatus;
    staged: boolean;
}
