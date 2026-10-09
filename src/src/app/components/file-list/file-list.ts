import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { TooltipModule } from '@openng/optimus-ui/tooltip';
import { ActionType } from '../../enums/action-type';
import { hintOf, labelOf } from '../../enums/converter';
import { FileStatus } from '../../enums/file-status';
import { WorkspaceFile } from '../../models/workspace-file';
import { LessonPlayer } from '../../pages/lesson/lesson-player';
import { FileIcon, ICON_OPTIONS } from '../file-icon/file-icon';

/** The files in one place. Pass `types` to give each file its own buttons. */
@Component({
    selector: 'app-file-list',
    imports: [DatePipe, ButtonModule, TooltipModule, FileIcon],
    templateUrl: './file-list.html',
})
export class FileList {
    readonly files = input.required<WorkspaceFile[]>();
    readonly types = input<ActionType[]>([]);
    readonly emptyMessage = input('No files');

    protected readonly player = inject(LessonPlayer);
    protected readonly icons = ICON_OPTIONS;
    protected readonly labelOf = labelOf;
    protected readonly hintOf = hintOf;
    protected readonly unchanged = FileStatus.Unchanged;
    protected readonly ignored = FileStatus.Ignored;

    /** The file the step just changed, lit up once the step is done. */
    protected isTouched(name: string): boolean {
        return this.player.done() && this.player.touched() === name;
    }
}
