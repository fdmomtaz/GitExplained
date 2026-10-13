import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlateNumber } from '../../components/plate-number/plate-number';
import { LessonService } from '../../services/lesson.service';

@Component({
    selector: 'app-glossary',
    imports: [RouterLink, PlateNumber],
    templateUrl: './glossary.html',
})
export class Glossary {
    /** Every lesson's topics, tagged with the lesson that teaches them. */
    private readonly terms = inject(LessonService)
        .lessons()
        .flatMap((lesson) => lesson.topics.map((topic) => ({ ...topic, lesson })))
        .sort((a, b) => a.term.localeCompare(b.term));

    /** The terms grouped by first letter. */
    protected readonly groups = [...new Set(this.terms.map((t) => t.term[0]))].map((letter) => ({
        letter,
        terms: this.terms.filter((t) => t.term[0] === letter),
    }));
}
