import { Action } from './action';
import { TextBlock } from './text-block';

export interface Step {
    id: string; // '1.2'
    title: string; // also shows in the step picker
    body: TextBlock[]; // all the step's text, in reading order
    actions: Action[]; // the moves the task asks for, in any order, usually just one
}
