import { TextType } from '../enums/text-type';
import { LessonService } from './lesson.service';
import { stateAt } from './workspace-engine';

const lessons = new LessonService().lessons().filter((l) => l.steps.length);

describe('lesson content', () => {
    for (const lesson of lessons) {
        it(`replays lesson ${lesson.number} through the engine`, () => {
            expect(() => stateAt(lesson, lesson.steps.length - 1, true)).not.toThrow();
        });

        for (const step of lesson.steps) {
            it(`gives step ${step.id} the text blocks it needs`, () => {
                const count = (type: TextType) => step.body.filter((b) => b.type === type).length;
                expect(count(TextType.Task)).toBe(1);
                expect(count(TextType.Done)).toBe(1);
                expect(count(TextType.Details)).toBeLessThanOrEqual(1);
                expect(count(TextType.WrongMove)).toBeLessThanOrEqual(1);
                expect(count(TextType.Paragraph)).toBeGreaterThanOrEqual(1);
                expect(count(TextType.Paragraph)).toBeLessThanOrEqual(2);
                expect(step.actions.length).toBeGreaterThan(0);
            });
        }
    }
});
