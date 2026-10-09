import { Component, computed, inject } from '@angular/core';
import { ActionButton } from '../action-button/action-button';
import { LessonPlayer } from '../../pages/lesson/lesson-player';
import { ActionType } from '../../enums/action-type';
import { FileStatus } from '../../enums/file-status';
import { FileList } from '../file-list/file-list';
import { IconLegend } from '../icon-legend/icon-legend';
import { HistoryList } from '../history-list/history-list';
import { NewFile } from '../new-file/new-file';

/** The right side of a lesson. It shows the places the lesson uses and the buttons for each. */
@Component({
    selector: 'app-workspace',
    imports: [ActionButton, FileList, HistoryList, IconLegend, NewFile],
    templateUrl: './workspace.html',
})
export class WorkspacePanel {
    private readonly player = inject(LessonPlayer);

    protected readonly ws = computed(() => this.player.workspace());
    protected readonly staging = computed(() => this.ws().config.showStaging);
    protected readonly working = computed(() =>
        this.ws().files.filter((f) => !this.staging() || !f.staged),
    );
    protected readonly staged = computed(() => this.ws().files.filter((f) => f.staged));
    /** Snapshots in your local history that origin doesn't have yet. */
    protected readonly ahead = computed(
        () => (this.ws().history?.length ?? 0) - (this.ws().origin?.history.length ?? 0),
    );

    protected readonly ActionType = ActionType;
    protected readonly workingTypes = computed(() =>
        this.staging()
            ? [ActionType.Edit, ActionType.Delete, ActionType.Stage]
            : [ActionType.Edit, ActionType.Delete],
    );
    /** The icons this lesson can show. Conflict only shows up once a file has one. */
    protected readonly legend = computed<(ActionType | FileStatus)[]>(() => [
        ...this.workingTypes(),
        ...(this.staging() ? [ActionType.Unstage] : []),
        FileStatus.Changed,
        FileStatus.New,
        ...(this.ws().files.some((f) => f.status === FileStatus.Conflict)
            ? [FileStatus.Conflict]
            : []),
    ]);
}
