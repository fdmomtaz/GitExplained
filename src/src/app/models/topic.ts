/** A Git term a lesson teaches. The glossary is built from these. */
export interface Topic {
    term: string; // the Git word, 'Commit'
    plain: string; // the name the lessons use, 'Snapshot'
    definition: string;
}
