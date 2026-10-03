import { Step } from './step';
import { Topic } from './topic';
import { Workspace } from './workspace';

export interface Lesson {
    id: string; // 'what-is-a-repository', used in the URL
    number: number;
    title: string;
    minutes: number;
    summary: string; // lesson card line, also the teaser at the end of the previous lesson
    topics: Topic[]; // terms the lesson teaches, which also fill the glossary
    workspace: Workspace; // the workspace when the lesson opens
    steps: Step[];
    recap: string; // End of lesson paragraph
}
