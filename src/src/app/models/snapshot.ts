export interface Snapshot {
    id: string;
    message: string; // 'Add blueberries'
    author: string; // 'You' or 'Sam'
    when: string; // shown as "Mon" or "just now"
    branch: string; // 'main', or 'vegan' in lesson 7
    tags?: string[]; // 'Summer edition' in lesson 12
}
