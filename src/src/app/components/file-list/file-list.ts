import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { TooltipModule } from '@openng/optimus-ui/tooltip';
import { FileStatus } from '../../enums/file-status';
import { EXTENSION } from '../../enums/file-type';
import { FileActionType } from '../../models/action';
import { WorkspaceFile } from '../../models/workspace-file';
import { LessonPlayer } from '../../pages/lesson/lesson-player';
import { FileIcon, ICONS } from '../file-icon/file-icon';

/** The files in one place. Pass a player and `types` to give each file its own buttons. */
@Component({
    selector: 'app-file-list',
    imports: [DatePipe, ButtonModule, TooltipModule, FileIcon],
    templateUrl: './file-list.html',
})
export class FileList {
    readonly files = input.required<WorkspaceFile[]>();
    readonly player = input<LessonPlayer>();
    readonly types = input<FileActionType[]>([]);
    readonly emptyMessage = input('No files');

    protected readonly extension = EXTENSION;
    protected readonly icons = ICONS;
    protected readonly unchanged = FileStatus.Unchanged;
    protected readonly ignored = FileStatus.Ignored;

    /** The file the step just changed, lit up once the step is done. */
    protected isTouched(name: string): boolean {
        const p = this.player();
        return !!p && p.done() && p.touched() === name;
    }
}
