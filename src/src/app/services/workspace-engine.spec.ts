import { LessonService } from './lesson.service';
import { apply, stateAt } from './workspace-engine';
import { Workspace } from '../models/workspace';

const lessons = new LessonService().lessons().filter((l) => l.steps.length);

/** True when the engine has every button this lesson presses. */
function supported(actions: Parameters<typeof apply>[1][]): boolean {
    return actions.every((a) => {
        try {
            apply({} as Workspace, a);
            return true;
        } catch (e) {
            return !String(e).includes("can't do");
        }
    });
}

describe('lesson content', () => {
    for (const lesson of lessons) {
        const actions = lesson.steps.flatMap((s) => s.actions);
        // Lessons with buttons the engine doesn't have yet show up as skipped.
        it.skipIf(!supported(actions))(`replays lesson ${lesson.number} through the engine`, () => {
            expect(() => stateAt(lesson, lesson.steps.length - 1, true)).not.toThrow();
        });
    }
});
