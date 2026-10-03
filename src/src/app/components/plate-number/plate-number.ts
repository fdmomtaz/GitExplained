import { Component, input } from '@angular/core';

/** A number printed as three process plates a little out of register. Size it with a text class on the host. */
@Component({
    selector: 'app-plate-number',
    templateUrl: './plate-number.html',
    styleUrl: './plate-number.css',
})
export class PlateNumber {
    readonly value = input.required<number>();
}
