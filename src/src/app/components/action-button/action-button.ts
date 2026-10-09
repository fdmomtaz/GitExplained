import { Component, computed, inject, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ActionType, ActionTypeOptions } from '../../enums/action-type';
import { labelOf } from '../../enums/converter';
import { LessonPlayer } from '../../pages/lesson/lesson-player';

/** One button for a whole place, like Commit or Push. It only works when the step asks for it. */
@Component({
    selector: 'app-action-button',
    imports: [ButtonModule],
    templateUrl: './action-button.html',
})
export class ActionButton {
    readonly type = input.required<ActionType>();

    protected readonly player = inject(LessonPlayer);
    protected readonly label = computed(() => labelOf(ActionTypeOptions, this.type()));
}
