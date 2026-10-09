import { Component, input } from '@angular/core';
import { ActionType } from '../../enums/action-type';
import { hintOf, labelOf } from '../../enums/converter';
import { FileStatus } from '../../enums/file-status';
import { FileIcon, ICON_OPTIONS } from '../file-icon/file-icon';

/** Explains the icons the workspace is showing. */
@Component({
    selector: 'app-icon-legend',
    imports: [FileIcon],
    templateUrl: './icon-legend.html',
})
export class IconLegend {
    readonly names = input.required<(ActionType | FileStatus)[]>();

    protected readonly icons = ICON_OPTIONS;
    protected readonly labelOf = labelOf;
    protected readonly hintOf = hintOf;
}
