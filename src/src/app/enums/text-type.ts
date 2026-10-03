export enum TextType {
    Paragraph = 'paragraph', // the normal body text, 1 or 2 per step
    Task = 'task', // the Your task box
    Done = 'done', // shown once the step is done
    Details = 'details', // the closed More details box
    WrongMove = 'wrongMove', // shown when you press the right button on the wrong file
}
