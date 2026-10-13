/** A file's text, one line per argument. Recipes start with their title. */
export function lines(...text: string[]): string {
    return text.map((line) => `${line}\n`).join('');
}
