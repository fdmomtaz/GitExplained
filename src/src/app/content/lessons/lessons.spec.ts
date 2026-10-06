import { TextType } from '../../enums/text-type';
import { cheers } from '../cheers';
import { lessons } from './index';

// The writing rules from CLAUDE.md. Rendered text never has these.
const BANNED = /[-–—:;*{}]/;

describe('cheers', () => {
    it('follow the writing rules', () => {
        for (const cheer of cheers) expect(cheer).not.toMatch(BANNED);
    });
});

describe('lessons', () => {
    for (const lesson of lessons) {
        describe(`lesson ${lesson.number}`, () => {
            it('follows the writing rules', () => {
                const texts = [
                    lesson.title,
                    lesson.summary,
                    lesson.recap,
                    ...lesson.steps.flatMap((step) => [
                        step.title,
                        step.task,
                        step.done,
                        step.wrongMove ?? '',
                        ...step.body.map((block) => block.text),
                    ]),
                ];
                for (const text of texts) expect(text).not.toMatch(BANNED);
            });

            for (const step of lesson.steps) {
                it(`step ${step.id} has the right shape`, () => {
                    const count = (type: TextType) =>
                        step.body.filter((block) => block.type === type).length;
                    expect(count(TextType.Paragraph)).toBeGreaterThanOrEqual(1);
                    expect(count(TextType.Paragraph)).toBeLessThanOrEqual(2);
                    expect(count(TextType.Details)).toBeLessThanOrEqual(1);
                    expect(step.body[0].type).toBe(TextType.Paragraph);
                    expect(step.task).not.toBe('');
                    expect(step.done).not.toBe('');
                    expect(step.actions.length).toBeGreaterThan(0);
                });
            }
        });
    }
});
