import { lesson01 } from '../../content/lessons/lesson-01';
import { LessonPlayer } from './lesson-player';

describe('LessonPlayer', () => {
    it('finishes a step once every action is done', () => {
        const player = new LessonPlayer(lesson01);
        player.press('delete', 'pancakes final v2');
        expect(player.done()).toBe(false);
        player.press('delete', 'pancakes final');
        expect(player.done()).toBe(true);
        expect(player.workspace().files.map((f) => f.name)).toEqual(['pancakes', 'groceries']);
    });

    it('does a wrong move and puts it back on reset', () => {
        const player = new LessonPlayer(lesson01);
        player.press('delete', 'pancakes');
        expect(player.wrong()).toBe(true);
        expect(player.asks('delete')).toBe(false);
        expect(player.canPress('delete')).toBe(true);
        player.reset();
        expect(player.wrong()).toBe(false);
        expect(player.workspace().files).toHaveLength(4);
    });

    it('lets you edit and delete when the step asks for something else', () => {
        const player = new LessonPlayer(lesson01);
        player.goTo(1);
        player.press('edit', 'groceries');
        player.press('delete', 'groceries');
        expect(player.wrong()).toBe(false);
        expect(player.done()).toBe(false);
        expect(player.workspace().files.map((f) => f.name)).not.toContain('groceries');
    });

    it('marks nothing changed before Start tracking', () => {
        const player = new LessonPlayer(lesson01);
        player.press('edit', 'groceries');
        expect(player.workspace().files.find((f) => f.name === 'groceries')!.status).toBe(
            'unchanged',
        );
    });
});
