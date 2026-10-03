import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { LessonService } from '../../services/lesson.service';
import { ProgressService } from '../../services/progress.service';

@Component({
    selector: 'app-site-nav',
    imports: [RouterLink, RouterLinkActive, ButtonModule],
    templateUrl: './site-nav.html',
})
export class SiteNav {
    private readonly progress = inject(ProgressService);
    private readonly lessons = inject(LessonService).lessons();

    protected readonly next = computed(() => this.progress.nextLesson(this.lessons));
    protected readonly started = computed(() => this.progress.hasStarted(this.lessons));
}
