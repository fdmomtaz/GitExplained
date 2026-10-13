import { LessonState } from '../enums/lesson-state';
import { Lesson } from '../models/lesson';
import { ProgressService } from './progress.service';

/** A ProgressService that finds `saved` in local storage. */
function loading(saved: string): ProgressService {
    vi.stubGlobal('localStorage', { getItem: () => saved, setItem: () => undefined });
    return new ProgressService();
}

const lesson = (id: string) => ({ id }) as Lesson;

describe('ProgressService', () => {
    afterEach(() => vi.unstubAllGlobals());

    it('drops saved values that are not a lesson state', () => {
        const progress = loading(JSON.stringify({ a: LessonState.Completed, b: 'done', c: 3 }));
        expect(progress.state(lesson('a'))).toBe(LessonState.Completed);
        expect(progress.state(lesson('b'))).toBe(LessonState.NotStarted);
        expect(progress.state(lesson('c'))).toBe(LessonState.NotStarted);
    });

    it('starts fresh when the saved progress is not an object', () => {
        expect(loading('"oops"').state(lesson('a'))).toBe(LessonState.NotStarted);
        expect(loading('null').state(lesson('a'))).toBe(LessonState.NotStarted);
    });
});
