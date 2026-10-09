import { ActionType, ActionTypeOptions } from './action-type';
import { EnumOption } from './converter';
import { FileStatus, FileStatusOptions } from './file-status';
import { LessonState, LessonStateOptions } from './lesson-state';

const lists: [string, object, EnumOption<unknown>[]][] = [
    ['ActionType', ActionType, ActionTypeOptions],
    ['FileStatus', FileStatus, FileStatusOptions],
    ['LessonState', LessonState, LessonStateOptions],
];

describe('enum options', () => {
    for (const [name, values, options] of lists) {
        it(`label every ${name} value once`, () => {
            expect(options.map((o) => o.identifier).sort()).toEqual(Object.values(values).sort());
        });
    }
});
