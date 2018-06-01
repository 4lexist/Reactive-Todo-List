import * as Actions from '../actions';

const initialState = {
    todos: []
};

function addTodo(state, action) {
    return Object.assign({}, state, {
        todos: [
            ...state.todos,
            {
                text: action.payload.inputValue,
                isDone: false
            }
        ]
    })
}

function toggleTodo(state, action) {
    return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
            if (index === action.payload.index) {
                return Object.assign({}, todo, {
                    isDone: !todo.isDone
                })
            }
            return todo
        })
    })
}

export default (state = initialState, action) => {
    switch(action.type){
        case Actions.ADD_TODO_ATTEMPT:
            break;
        case Actions.TOGGLE_TODO_ATTEMPT:
            break;
        case Actions.ADD_TODO:
            return addTodo(state, action);
        case Actions.TOGGLE_TODO:
            return toggleTodo(state, action);
        default:
            return state;
    }
}