export const CHANGE_VALUE = 'CHANGE_VALUE';

export function changeValue(value) {
    return {
        type: CHANGE_VALUE,
        value: value
    };
}
