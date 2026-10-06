import { Action } from './action';
import { TextBlock } from './text-block';
import { WorkspaceEvent } from './workspace-event';

export interface Step {
    id: string; // '1.2'
    title: string; // also shows in the step picker
    body: TextBlock[]; // paragraphs and at most one More details box, in reading order
    task: string; // the Your task box
    done: string; // shown once every action is done
    wrongMove?: string; // shown when you press the right button on the wrong file
    actions: Action[]; // the moves the task asks for, in any order, usually just one
    events?: WorkspaceEvent[]; // what other people do once the step is done
}
