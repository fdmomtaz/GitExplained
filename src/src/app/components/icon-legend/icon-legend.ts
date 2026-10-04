import { Component, input } from '@angular/core';
import { FileIcon, ICONS, IconName } from '../file-icon/file-icon';

/** Explains the icons the workspace is showing. */
@Component({
    selector: 'app-icon-legend',
    imports: [FileIcon],
    templateUrl: './icon-legend.html',
})
export class IconLegend {
    readonly names = input.required<IconName[]>();

    protected readonly icons = ICONS;
}
