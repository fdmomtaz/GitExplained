import { Injectable, signal } from '@angular/core';
import { Lesson } from '../models/lesson';

export type LessonState = 'notStarted' | 'inProgress' | 'completed';

const STORAGE_KEY = 'git-explained.lessons';

/** Saves which lessons you started or completed, keyed by lesson id. Not started is never stored. */
@Injectable({ providedIn: 'root' })
export class ProgressService {
    private readonly states = signal<Record<string, LessonState>>(this.load());

    state(lesson: Lesson): LessonState {
        return this.states()[lesson.id] ?? 'notStarted';
    }

    /** The status line under a lesson title. */
    label(lesson: Lesson): string {
        switch (this.state(lesson)) {
            case 'completed':
                return 'Completed';
            case 'inProgress':
                return 'In progress';
            default:
                return 'Not started';
        }
    }

    hasStarted(lessons: Lesson[]): boolean {
        return lessons.some((l) => this.state(l) !== 'notStarted');
    }

    /** The lesson in progress, else the first one you haven't finished, else lesson 1. */
    nextLesson(lessons: Lesson[]): Lesson {
        return (
            lessons.find((l) => this.state(l) === 'inProgress') ??
            lessons.find((l) => this.state(l) !== 'completed') ??
            lessons[0]
        );
    }

    /** Call when a lesson opens. Reopening a completed lesson keeps it completed. */
    start(lesson: Lesson): void {
        if (this.state(lesson) === 'notStarted') this.set(lesson, 'inProgress');
    }

    /** Call when you finish the last step. */
    complete(lesson: Lesson): void {
        this.set(lesson, 'completed');
    }

    private set(lesson: Lesson, state: LessonState): void {
        this.states.update((s) => ({ ...s, [lesson.id]: state }));
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.states()));
        } catch {
            // Progress stays in memory when storage is blocked.
        }
    }

    private load(): Record<string, LessonState> {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') ?? {};
        } catch {
            return {};
        }
    }
}
