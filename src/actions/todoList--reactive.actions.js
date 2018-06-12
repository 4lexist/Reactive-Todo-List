/* Asynchronous - going to be caught via epics */
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


/* Synchronous - caught directly in reducer */
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