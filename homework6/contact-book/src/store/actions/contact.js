export const INPUT_CHANGE = 'INPUT_CHANGE';
export function inputChange(name, value) {
    return {
        type: INPUT_CHANGE,
        payload: {name, value},
    }
}

export const RESET_STATE_FORM = 'RESET_STATE_FORM';
export function resetStateForm() {
    return {
        type: RESET_STATE_FORM,
        payload: true,
    }
}
