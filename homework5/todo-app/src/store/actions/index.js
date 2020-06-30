export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INPUT_CHANGE = 'INPUT_CHANGE';

export function onToggle(id) {
    return {
        type: TOGGLE_TODO,
        payload: id,
    }
}

export function onDelete(id) {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}

export function onAdd(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function onInputChange(value) {
    return {
        type: INPUT_CHANGE,
        payload: value,
    }
}