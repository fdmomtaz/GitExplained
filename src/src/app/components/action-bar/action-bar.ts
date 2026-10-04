import { Component, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ActionType } from '../../models/action';
import { LessonPlayer } from '../../pages/lesson/lesson-player';

const LABELS: Partial<Record<ActionType, string>> = {
    commit: 'Commit',
    startTracking: 'Start tracking',
    connect: 'Connect to GitHub',
    push: 'Push',
};

/** A place's heading and its buttons. Only the buttons the step asks for are enabled. */
@Component({
    selector: 'app-action-bar',
    imports: [ButtonModule],
    templateUrl: './action-bar.html',
})
export class ActionBar {
    readonly player = input.required<LessonPlayer>();
    readonly types = input<ActionType[]>([]);
    readonly title = input('');

    protected readonly labels = LABELS;
}
