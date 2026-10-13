import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { LessonService } from './services/lesson.service';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'lessons/:id',
        renderMode: RenderMode.Prerender,
        getPrerenderParams: async () =>
            inject(LessonService)
                .lessons()
                .map((l) => ({ id: l.id })),
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender,
    },
];
