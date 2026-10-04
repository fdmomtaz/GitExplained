export enum FileType {
    Txt = 'txt', // plain text
    Doc = 'doc', // rich text in the Optimus editor (Quill), stored as the HTML it reads and writes
}

/** Shown after a file's name. Doc files keep .md because the lesson text calls them that. */
export const EXTENSION: Record<FileType, string> = {
    [FileType.Txt]: '.txt',
    [FileType.Doc]: '.md',
};
