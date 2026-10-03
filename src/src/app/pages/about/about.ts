import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { LessonService } from '../../services/lesson.service';

@Component({
    selector: 'app-about',
    imports: [RouterLink, ButtonModule],
    templateUrl: './about.html',
})
export class About {
    protected readonly firstLesson = inject(LessonService).lessons()[0];
}
