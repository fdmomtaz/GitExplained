import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { TagModule } from '@openng/optimus-ui/tag';
import { PlateNumber } from '../../components/plate-number/plate-number';
import { Lesson } from '../../models/lesson';
import { LessonService } from '../../services/lesson.service';
import { ProgressService } from '../../services/progress.service';

@Component({
    selector: 'app-lessons',
    imports: [RouterLink, ButtonModule, TagModule, PlateNumber],
    templateUrl: './lessons.html',
})
export class Lessons {
    protected readonly progress = inject(ProgressService);

    protected readonly lessons = inject(LessonService).lessons();
    protected readonly next = computed(() => this.progress.nextLesson(this.lessons));
    protected readonly completed = computed(
        () => this.lessons.filter((l) => this.progress.state(l) === 'completed').length,
    );

    protected action(lesson: Lesson): string {
        const state = this.progress.state(lesson);
        return state === 'completed' ? 'Review' : state === 'inProgress' ? 'Continue' : 'Start';
    }
}
