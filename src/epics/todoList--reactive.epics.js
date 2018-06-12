import { combineEpics } from 'redux-observable'

const addTodoEpic = action$ =>
    action$.ofType('ADD_TODO_ATTEMPT')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .map(action => {
            return {
                type: 'ADD_TODO',
                payload: action.payload
            }
        });

const toggleTodoEpic = action$ =>
    action$.ofType('TOGGLE_TODO_ATTEMPT')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .map(action => {
            return {
                type: 'TOGGLE_TODO',
                payload: action.payload
            }
        });


const rootEpic = combineEpics(
    addTodoEpic,
    toggleTodoEpic
);

export default rootEpic;
