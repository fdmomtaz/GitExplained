import { Component, computed, input } from '@angular/core';
import { ActionBar } from '../action-bar/action-bar';
import { LessonPlayer } from '../../pages/lesson/lesson-player';
import { FileStatus } from '../../enums/file-status';
import { FileActionType } from '../../models/action';
import { IconName } from '../file-icon/file-icon';
import { FileList } from '../file-list/file-list';
import { IconLegend } from '../icon-legend/icon-legend';
import { HistoryList } from '../history-list/history-list';

/** The right side of a lesson. It shows the places the lesson uses and the buttons for each. */
@Component({
    selector: 'app-workspace',
    imports: [ActionBar, FileList, HistoryList, IconLegend],
    templateUrl: './workspace.html',
})
export class WorkspacePanel {
    readonly player = input.required<LessonPlayer>();

    protected readonly ws = computed(() => this.player().workspace());
    protected readonly staging = computed(() => this.ws().config.showStaging);
    protected readonly working = computed(() =>
        this.ws().files.filter((f) => !this.staging() || !f.staged),
    );
    protected readonly staged = computed(() => this.ws().files.filter((f) => f.staged));
    /** Snapshots in your local history that origin doesn't have yet. */
    protected readonly ahead = computed(
        () => (this.ws().history?.length ?? 0) - (this.ws().origin?.history.length ?? 0),
    );

    protected readonly workingTypes = computed<FileActionType[]>(() =>
        this.staging() ? ['edit', 'delete', 'stage'] : ['edit', 'delete'],
    );
    /** The icons this lesson can show. Conflict only shows up once a file has one. */
    protected readonly legend = computed<IconName[]>(() => [
        ...this.workingTypes(),
        ...(this.staging() ? (['unstage'] as const) : []),
        FileStatus.Changed,
        FileStatus.New,
        ...(this.ws().files.some((f) => f.status === FileStatus.Conflict)
            ? [FileStatus.Conflict as const]
            : []),
    ]);
}
