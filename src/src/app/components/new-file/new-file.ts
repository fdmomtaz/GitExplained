import { Component, computed, input, signal } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { PopoverModule } from '@openng/optimus-ui/popover';
import { LessonPlayer } from '../../pages/lesson/lesson-player';

/** The New file button. It asks for a name and won't reuse one. */
@Component({
    selector: 'app-new-file',
    imports: [ButtonModule, InputTextModule, PopoverModule],
    templateUrl: './new-file.html',
})
export class NewFile {
    readonly player = input.required<LessonPlayer>();

    protected readonly name = signal('');
    protected readonly trimmed = computed(() => this.name().trim());
    protected readonly taken = computed(() =>
        this.player()
            .workspace()
            .files.some((f) => f.name.toLowerCase() === this.trimmed().toLowerCase()),
    );

    protected open(event: Event, popover: { toggle(e: Event): void }): void {
        this.name.set('');
        popover.toggle(event);
    }

    protected create(): boolean {
        if (!this.trimmed() || this.taken()) return false;
        this.player().press('newFile', this.trimmed());
        return true;
    }
}
