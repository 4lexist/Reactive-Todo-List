/* Asynchronous */
export const INPUT_SUBMIT_ACTION_ATTEMPT = 'INPUT_SUBMIT_ACTION_ATTEMPT';
export function inputSubmitActionAttempt(inputValue) {
    return {
        type: INPUT_SUBMIT_ACTION_ATTEMPT,
        payload: {
            inputValue
        }
    };
}

export const ADD_TODO_ATTEMPT = 'ADD_TODO_ATTEMPT';
export function addTodoAttempt(inputValue) {
    return {
        type: ADD_TODO_ATTEMPT,
        payload: {
            inputValue
        }
    };
}

export const TOGGLE_TODO_ATTEMPT = 'TOGGLE_TODO_ATTEMPT';
export function toggleTodoAttempt(index) {
    return {
        type: TOGGLE_TODO_ATTEMPT,
        payload: {
            index
        }
    };
}


/* Synchrone */
export const INPUT_SUBMIT_ACTION = 'INPUT_SUBMIT_ACTION';
export function inputSubmitAction(inputValue) {
    return {
        type: INPUT_SUBMIT_ACTION,
        payload: {
            inputValue
        }
    };
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(inputValue) {
    return {
        type: ADD_TODO,
        payload: {
            inputValue
        }
    };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: {
            index
        }
    };
}