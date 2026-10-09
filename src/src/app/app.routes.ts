import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing) },
    {
        path: 'lessons',
        loadComponent: () => import('./pages/lessons/lessons').then((m) => m.Lessons),
    },
    {
        path: 'lessons/:id',
        loadComponent: () => import('./pages/lesson/lesson').then((m) => m.LessonPage),
    },
    {
        path: 'glossary',
        loadComponent: () => import('./pages/glossary/glossary').then((m) => m.Glossary),
    },
    { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
    { path: '**', redirectTo: '' },
];
