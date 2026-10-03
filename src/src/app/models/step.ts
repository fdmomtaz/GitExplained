import { Action } from './action';
import { TextBlock } from './text-block';

export interface Step {
    id: string; // '1.2'
    title: string; // also shows in the step picker
    body: TextBlock[]; // all the step's text, in reading order
    action: Action; // the one move the task asks for
}
