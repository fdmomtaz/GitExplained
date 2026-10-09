import { EnumOption } from './converter';

/** Saved in local storage, so keep the values as they are. */
export enum LessonState {
    NotStarted = 'notStarted',
    InProgress = 'inProgress',
    Completed = 'completed',
}

export const LessonStateOptions: EnumOption<LessonState>[] = [
    { identifier: LessonState.NotStarted, label: 'Not started' },
    { identifier: LessonState.InProgress, label: 'In progress' },
    { identifier: LessonState.Completed, label: 'Completed' },
];
