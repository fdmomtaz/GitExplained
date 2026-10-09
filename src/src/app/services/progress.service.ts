import { Injectable, signal } from '@angular/core';
import { LessonState } from '../enums/lesson-state';
import { Lesson } from '../models/lesson';

const STORAGE_KEY = 'git-explained.lessons';

/** Saves which lessons you started or completed, keyed by lesson id. Not started is never stored. */
@Injectable({ providedIn: 'root' })
export class ProgressService {
    private readonly states = signal<Record<string, LessonState>>(this.load());

    state(lesson: Lesson): LessonState {
        return this.states()[lesson.id] ?? LessonState.NotStarted;
    }

    hasStarted(lessons: Lesson[]): boolean {
        return lessons.some((l) => this.state(l) !== LessonState.NotStarted);
    }

    /** The lesson in progress, else the first one you haven't finished, else lesson 1. */
    nextLesson(lessons: Lesson[]): Lesson {
        return (
            lessons.find((l) => this.state(l) === LessonState.InProgress) ??
            lessons.find((l) => this.state(l) !== LessonState.Completed) ??
            lessons[0]
        );
    }

    /** Call when a lesson opens. Reopening a completed lesson keeps it completed. */
    start(lesson: Lesson): void {
        if (this.state(lesson) === LessonState.NotStarted) this.set(lesson, LessonState.InProgress);
    }

    /** Call when you finish the last step. */
    complete(lesson: Lesson): void {
        this.set(lesson, LessonState.Completed);
    }

    private set(lesson: Lesson, state: LessonState): void {
        this.states.update((s) => ({ ...s, [lesson.id]: state }));
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.states()));
        } catch {
            // Progress stays in memory when storage is blocked.
        }
    }

    /** Keeps only the saved values that are still a LessonState. */
    private load(): Record<string, LessonState> {
        try {
            const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
            if (!saved || typeof saved !== 'object') return {};
            const states = Object.values(LessonState) as unknown[];
            return Object.fromEntries(
                Object.entries(saved).filter(([, state]) => states.includes(state)),
            );
        } catch {
            return {};
        }
    }
}
