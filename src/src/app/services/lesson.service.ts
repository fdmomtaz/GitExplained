import { Injectable } from '@angular/core';
import { cheers } from '../content/cheers';
import { lessons } from '../content/lessons';
import { Lesson } from '../models/lesson';

/** Reads the lesson content that ships with the app. Moving to an API later only changes this service. */
@Injectable({ providedIn: 'root' })
export class LessonService {
    private readonly all = [...lessons].sort((a, b) => a.number - b.number);

    lessons(): Lesson[] {
        return this.all;
    }

    lesson(id: string): Lesson | undefined {
        return this.all.find((l) => l.id === id);
    }

    /** The cheer for the step at this index, cycling through the list. */
    cheer(index: number): string {
        return cheers[index % cheers.length];
    }
}
