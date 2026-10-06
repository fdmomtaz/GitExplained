import { booleanAttribute, Component, input } from '@angular/core';

/** Text printed as three process plates a little out of register. Size it with a text class on the host. */
@Component({
    selector: 'app-plate-number',
    templateUrl: './plate-number.html',
    styleUrl: './plate-number.css',
})
export class PlateNumber {
    readonly value = input.required<string | number>();
    /** Half the offsets, for a word inside a headline. */
    readonly headline = input(false, { transform: booleanAttribute });
}
