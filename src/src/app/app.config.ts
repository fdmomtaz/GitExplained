import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideOptimus } from '@openng/optimus-ui/config';
import { Broadsheet } from './theme/broadsheet';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes, withComponentInputBinding()),
        provideOptimus({
            theme: {
                preset: Broadsheet,
                options: {
                    cssLayer: { name: 'optimus', order: 'theme, base, optimus' },
                },
            },
        }),
        provideClientHydration(),
    ],
};
