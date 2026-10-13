export interface EnumOption<T> {
    identifier: T;
    label: string;
    hint?: string; // a sentence for tooltips and the icon legend
}

/** Every enum lists all its values in its options, so the raw value only shows if one is missing. */
export function labelOf<T>(options: EnumOption<T>[], identifier: T): string {
    return options.find((o) => o.identifier === identifier)?.label ?? String(identifier);
}

export function hintOf<T>(options: EnumOption<T>[], identifier: T): string | undefined {
    return options.find((o) => o.identifier === identifier)?.hint;
}
