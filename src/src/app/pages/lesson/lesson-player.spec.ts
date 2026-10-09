import { signal } from '@angular/core';
import { lesson01 } from '../../content/lessons/lesson-01';
import { lesson02 } from '../../content/lessons/lesson-02';
import { ActionType } from '../../enums/action-type';
import { FileStatus } from '../../enums/file-status';
import { Lesson } from '../../models/lesson';
import { LessonPlayer } from './lesson-player';

describe('LessonPlayer', () => {
    it('finishes a step once every action is done', () => {
        const player = playing(lesson01);
        player.press(ActionType.Delete, 'pancakes final v2');
        expect(player.done()).toBe(false);
        player.press(ActionType.Delete, 'pancakes final');
        expect(player.done()).toBe(true);
        expect(player.workspace().files.map((f) => f.name)).toEqual(['pancakes', 'groceries']);
    });

    it('does a wrong move and puts it back on reset', () => {
        const player = playing(lesson01);
        player.press(ActionType.Delete, 'pancakes');
        expect(player.wrong()).toBe(true);
        expect(player.asks(ActionType.Delete)).toBe(false);
        expect(player.canPress(ActionType.Delete)).toBe(true);
        player.reset();
        expect(player.wrong()).toBe(false);
        expect(player.workspace().files).toHaveLength(4);
    });

    it('lets you edit and delete when the step asks for something else', () => {
        const player = playing(lesson01);
        player.goTo(1);
        player.press(ActionType.Edit, 'groceries');
        player.press(ActionType.Delete, 'groceries');
        expect(player.wrong()).toBe(false);
        expect(player.done()).toBe(false);
        expect(player.workspace().files.map((f) => f.name)).not.toContain('groceries');
    });

    it('marks nothing changed before Start tracking', () => {
        const player = playing(lesson01);
        player.press(ActionType.Edit, 'groceries');
        expect(player.workspace().files.find((f) => f.name === 'groceries')!.status).toBe(
            FileStatus.Unchanged,
        );
    });

    it('makes the new file the step asks for and marks it new', () => {
        const player = playing(lesson02);
        player.goTo(lesson02.steps.findIndex((s) => s.actions[0].type === ActionType.NewFile));
        player.press(ActionType.NewFile, 'cookies');
        expect(player.done()).toBe(true);
        expect(player.workspace().files.find((f) => f.name === 'cookies')!.status).toBe(
            FileStatus.New,
        );
    });

    it('counts a new file with the wrong name as the wrong move', () => {
        const player = playing(lesson02);
        player.goTo(lesson02.steps.findIndex((s) => s.actions[0].type === ActionType.NewFile));
        player.press(ActionType.NewFile, 'cookie');
        expect(player.wrong()).toBe(true);
        expect(player.done()).toBe(false);
    });

    it('starts over when the lesson changes', () => {
        const lesson = signal<Lesson | undefined>(lesson01);
        const player = new LessonPlayer();
        player.play(lesson);
        player.goTo(1);
        player.press(ActionType.Delete, 'groceries');
        lesson.set(lesson02);
        expect(player.index()).toBe(0);
        expect(player.workspace()).toBe(lesson02.workspace);
        lesson.set(undefined);
        expect(player.ready()).toBe(false);
    });
});

function playing(lesson: Lesson): LessonPlayer {
    const player = new LessonPlayer();
    player.play(signal(lesson));
    return player;
}
