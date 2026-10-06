const escape = (text: string) =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** The HTML the editor reads for a Doc file. A title, then one paragraph per line. */
export function doc(title: string, ...lines: string[]): string {
    return `<h1>${escape(title)}</h1>` + lines.map((line) => `<p>${escape(line)}</p>`).join('');
}
