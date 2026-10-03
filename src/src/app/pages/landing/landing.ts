import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { PlateNumber } from '../../components/plate-number/plate-number';
import { LessonService } from '../../services/lesson.service';
import { ProgressService } from '../../services/progress.service';

@Component({
    selector: 'app-landing',
    imports: [RouterLink, ButtonModule, PlateNumber],
    templateUrl: './landing.html',
})
export class Landing {
    protected readonly progress = inject(ProgressService);

    protected readonly lessons = inject(LessonService).lessons();

    /** The first lesson you started but haven't finished. */
    protected readonly inProgress = computed(() =>
        this.lessons.find((l) => this.progress.state(l) === 'inProgress'),
    );
}
