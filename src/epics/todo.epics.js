import * as Actions from '../actions';

const inputSubmitEpic = action$ =>
    action$.ofType(Actions.INPUT_SUBMIT_ACTION)
        .mergeMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                .map(response => fetchUserFulfilled(response))
        );