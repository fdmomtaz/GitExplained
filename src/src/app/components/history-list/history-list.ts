import { Component, input } from '@angular/core';
import { Snapshot } from '../../models/snapshot';

/** Snapshots, newest first. */
@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.html',
})
export class HistoryList {
    readonly snapshots = input.required<Snapshot[]>();
}
