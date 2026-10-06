import { Component, computed, effect, inject, input, untracked } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { MessageModule } from '@openng/optimus-ui/message';
import { PopoverModule } from '@openng/optimus-ui/popover';
import { WorkspacePanel } from '../../components/workspace/workspace';
import { TextType } from '../../enums/text-type';
import { LessonService } from '../../services/lesson.service';
import { ProgressService } from '../../services/progress.service';
import { LessonPlayer } from './lesson-player';

@Component({
    selector: 'app-lesson',
    imports: [RouterLink, ButtonModule, MessageModule, PopoverModule, WorkspacePanel],
    templateUrl: './lesson.html',
})
export class LessonPage {
    /** The lesson id from the URL. */
    readonly id = input.required<string>();

    private readonly lessons = inject(LessonService);
    private readonly progress = inject(ProgressService);

    protected readonly TextType = TextType;
    protected readonly lesson = computed(() => this.lessons.lesson(this.id()));
    /** Draft lessons have no steps yet, so they get no player. */
    protected readonly player = computed(() => {
        const lesson = this.lesson();
        return lesson?.steps.length ? new LessonPlayer(lesson) : undefined;
    });
    protected readonly next = computed(() =>
        this.lessons.lessons().find((l) => l.number === (this.lesson()?.number ?? 0) + 1),
    );

    constructor() {
        effect(() => {
            const player = this.player();
            if (!player) return;
            untracked(() => this.progress.start(player.lesson));
            if (player.isLast() && player.done()) {
                untracked(() => this.progress.complete(player.lesson));
            }
        });
    }

    protected cheer(index: number): string {
        return this.lessons.cheer(index);
    }
}
