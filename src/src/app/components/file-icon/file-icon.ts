import { Component, computed, input } from '@angular/core';
import { ArrowDownIcon } from '@openng/optimus-ui/icons/arrowdown';
import { ArrowUpIcon } from '@openng/optimus-ui/icons/arrowup';
import { ExclamationTriangleIcon } from '@openng/optimus-ui/icons/exclamationtriangle';
import { InfoCircleIcon } from '@openng/optimus-ui/icons/infocircle';
import { PencilIcon } from '@openng/optimus-ui/icons/pencil';
import { PlusIcon } from '@openng/optimus-ui/icons/plus';
import { TrashIcon } from '@openng/optimus-ui/icons/trash';
import { FileStatus } from '../../enums/file-status';
import { FileActionType } from '../../models/action';

/** Every icon a file row can show, its buttons first and then its statuses. */
export type IconName = FileActionType | FileStatus.Changed | FileStatus.New | FileStatus.Conflict;

/** What each icon is called and what it does or means. Tooltips and the legend both use it. */
export const ICONS: Record<IconName, { label: string; hint: string; color?: string }> = {
    edit: { label: 'Edit', hint: 'Change what is in this file.' },
    delete: { label: 'Delete', hint: 'Remove this file from the folder.' },
    stage: { label: 'Stage', hint: 'Pick this change for your next snapshot.' },
    unstage: { label: 'Unstage', hint: 'Leave this change out of your next snapshot.' },
    [FileStatus.Changed]: {
        label: 'Changed',
        hint: 'Git sees that this file is different from the last snapshot.',
        color: 'text-primary',
    },
    [FileStatus.New]: {
        label: 'New',
        hint: 'Git has never saved this file.',
        color: 'text-green-600',
    },
    [FileStatus.Conflict]: {
        label: 'Conflict',
        hint: 'Two changes touch the same lines. You pick which one to keep.',
        color: 'text-red-600',
    },
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
    readonly name = input.required<IconName>();

    protected readonly color = computed(() => ICONS[this.name()].color ?? '');
}
