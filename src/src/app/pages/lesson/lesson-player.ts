import { computed, Injectable, linkedSignal, Signal, signal } from '@angular/core';
import { ActionType } from '../../enums/action-type';
import { Action } from '../../models/action';
import { Lesson } from '../../models/lesson';
import { Workspace } from '../../models/workspace';
import { apply, stateAt } from '../../services/workspace-engine';

/** Buttons that work on any file at any time, the way they do in a real folder. */
const ALWAYS_ON = [ActionType.Edit, ActionType.Delete, ActionType.NewFile];

/**
 * Plays one lesson. The lesson page provides it, and the workspace parts inject it.
 * Every step's state starts over whenever the page hands it a different lesson.
 */
@Injectable()
export class LessonPlayer {
    private readonly source = signal<Signal<Lesson | undefined>>(signal(undefined));
    private readonly current = computed(() => this.source()());

    /** A lesson with steps is loaded. Read `lesson` and the rest only once this is true. */
    readonly ready = computed(() => !!this.current());

    readonly index = linkedSignal({ source: this.current, computation: () => 0 });
    /** How many steps are done. Steps up to this one can be opened. */
    readonly doneCount = linkedSignal({ source: this.current, computation: () => 0 });
    readonly workspace = linkedSignal(() => this.lesson.workspace);
    /** The step's actions you haven't done yet. */
    readonly remaining = linkedSignal(() => this.lesson.steps[0].actions);
    /** You pressed the button the step asks for on the wrong file. Only Reset step helps now. */
    readonly wrong = linkedSignal({ source: this.current, computation: () => false });
    /** The file your last asked for press changed, so the workspace can point at it. */
    readonly touched = linkedSignal<Lesson | undefined, string | undefined>({
        source: this.current,
        computation: () => undefined,
    });

    readonly step = computed(() => this.lesson.steps[this.index()]);
    readonly done = computed(() => this.index() < this.doneCount());
    readonly isLast = computed(() => this.index() === this.lesson.steps.length - 1);

    get lesson(): Lesson {
        const lesson = this.current();
        if (!lesson) throw new Error('LessonPlayer has no lesson with steps loaded');
        return lesson;
    }

    /** Plays whatever lesson `lesson` points to. Undefined, or a draft with no steps, plays nothing. */
    play(lesson: Signal<Lesson | undefined>): void {
        this.source.set(computed(() => (lesson()?.steps.length ? lesson() : undefined)));
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
    if (type === ActionType.NewFile) return { type, file, content: '' };
    if (type !== ActionType.Edit) return { type, file } as Action;
    return { type, file, content: ws.files.find((f) => f.name === file)!.content };
}
