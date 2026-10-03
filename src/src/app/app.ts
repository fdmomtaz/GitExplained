import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteNav } from './components/site-nav/site-nav';

@Component({
    imports: [RouterOutlet, SiteNav],
    selector: 'app-root',
    templateUrl: './app.html',
})
export class App {}
