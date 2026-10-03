import { Injectable } from '@angular/core';
import { draftLessons } from '../content/lessons/drafts';
import { lesson01 } from '../content/lessons/lesson-01';
import { Lesson } from '../models/lesson';

/** Reads the lesson content that ships with the app. Moving to an API later only changes this service. */
@Injectable({ providedIn: 'root' })
export class LessonService {
    private readonly all = [lesson01, ...draftLessons].sort((a, b) => a.number - b.number);

    lessons(): Lesson[] {
        return this.all;
    }

    lesson(id: string): Lesson | undefined {
        return this.all.find((l) => l.id === id);
    }
}
