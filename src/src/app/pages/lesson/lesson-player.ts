import { computed, signal, WritableSignal } from '@angular/core';
import { Action, ActionType } from '../../models/action';
import { Workspace } from '../../models/workspace';
import { Lesson } from '../../models/lesson';
import { apply, stateAt } from '../../services/workspace-engine';

/** Buttons that work on any file at any time, the way they do in a real folder. */
const ALWAYS_ON: ActionType[] = ['edit', 'delete', 'newFile'];

/** Plays one lesson. The lesson page makes a new player whenever the lesson changes. */
export class LessonPlayer {
    readonly index = signal(0);
    /** How many steps are done. Steps up to this one can be opened. */
    readonly doneCount = signal(0);
    readonly workspace: WritableSignal<Workspace>;
    /** The step's actions you haven't done yet. */
    readonly remaining: WritableSignal<Action[]>;
    /** You pressed the button the step asks for on the wrong file. Only Reset step helps now. */
    readonly wrong = signal(false);
    /** The file your last asked for press changed, so the workspace can point at it. */
    readonly touched = signal<string | undefined>(undefined);

    readonly step = computed(() => this.lesson.steps[this.index()]);
    readonly done = computed(() => this.index() < this.doneCount());
    readonly isLast = computed(() => this.index() === this.lesson.steps.length - 1);

    constructor(readonly lesson: Lesson) {
        this.workspace = signal(lesson.workspace);
        this.remaining = signal(lesson.steps[0].actions);
    }

    /** The step still asks for this button. */
    asks(type: ActionType): boolean {
        return !this.wrong() && this.remaining().some((a) => a.type === type);
    }

    canPress(type: ActionType): boolean {
        return ALWAYS_ON.includes(type) || this.asks(type);
    }

    press(type: ActionType, file?: string): void {
        const options = this.asks(type) ? this.remaining().filter((a) => a.type === type) : [];
        const match = options.find((a) => !('file' in a) || a.file === file);
        if (match) {
            this.workspace.update((ws) => apply(ws, match));
            this.remaining.update((r) => r.filter((a) => a !== match));
            this.touched.set(file);
            if (this.remaining().length === 0) {
                this.doneCount.update((n) => Math.max(n, this.index() + 1));
            }
            return;
        }
        // Not what the step asks for, so do the plain move. An edit just marks the file
        // changed. Pressing the asked button on the wrong file is the step's wrong move.
        this.workspace.update((ws) => apply(ws, freeMove(ws, type, file!)));
        if (options.length) this.wrong.set(true);
    }

    goTo(index: number): void {
        const done = index < this.doneCount();
        this.index.set(index);
        this.workspace.set(stateAt(this.lesson, index, done));
        this.remaining.set(done ? [] : this.lesson.steps[index].actions);
        this.wrong.set(false);
        this.touched.set(undefined);
    }

    reset(): void {
        this.goTo(this.index());
    }

    back(): void {
        this.goTo(this.index() - 1);
    }

    next(): void {
        this.goTo(this.index() + 1);
    }
}

function freeMove(ws: Workspace, type: ActionType, file: string): Action {
    if (type === 'newFile') return { type, file, content: '' };
    if (type !== 'edit') return { type, file } as Action;
    return { type, file, content: ws.files.find((f) => f.name === file)!.content };
}
