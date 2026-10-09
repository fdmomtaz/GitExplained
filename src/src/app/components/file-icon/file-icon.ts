import { Component, computed, input } from '@angular/core';
import { ArrowDownIcon } from '@openng/optimus-ui/icons/arrowdown';
import { ArrowUpIcon } from '@openng/optimus-ui/icons/arrowup';
import { ExclamationTriangleIcon } from '@openng/optimus-ui/icons/exclamationtriangle';
import { InfoCircleIcon } from '@openng/optimus-ui/icons/infocircle';
import { PencilIcon } from '@openng/optimus-ui/icons/pencil';
import { PlusIcon } from '@openng/optimus-ui/icons/plus';
import { TrashIcon } from '@openng/optimus-ui/icons/trash';
import { ActionType, ActionTypeOptions } from '../../enums/action-type';
import { EnumOption } from '../../enums/converter';
import { FileStatus, FileStatusOptions } from '../../enums/file-status';

/** Every icon a file row can show, its buttons and its statuses. Tooltips and the legend use these names and hints. */
export const ICON_OPTIONS: EnumOption<ActionType | FileStatus>[] = [
    ...ActionTypeOptions,
    ...FileStatusOptions,
];

const COLORS: Partial<Record<ActionType | FileStatus, string>> = {
    [FileStatus.Changed]: 'text-primary',
    [FileStatus.New]: 'text-green-600',
    [FileStatus.Conflict]: 'text-red-600',
};

@Component({
    selector: 'app-file-icon',
    imports: [
        ArrowDownIcon,
        ArrowUpIcon,
        ExclamationTriangleIcon,
        InfoCircleIcon,
        PencilIcon,
        PlusIcon,
        TrashIcon,
    ],
    host: { class: 'inline-flex', '[class]': 'color()' },
    templateUrl: './file-icon.html',
})
export class FileIcon {
    readonly name = input.required<ActionType | FileStatus>();

    protected readonly ActionType = ActionType;
    protected readonly FileStatus = FileStatus;
    protected readonly color = computed(() => COLORS[this.name()] ?? '');
}
