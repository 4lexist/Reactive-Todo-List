# Work-in-progress

Tiny app whose purpose is manyfold :
* Put my hands in the setting up of a react app from scratch
* Build a small todoList with actions and reducer to play with redux, https://redux.js.org/
* Build another todoList with delayed actions to play with observables, https://redux-observable.js.org/
* Build a small user suggestions box inspired from https://gist.github.com/staltz/868e7e9bc2a7b8c1f754 to wrap my head around reactive programming

## Start app
Open your terminal at the root of the project and type
> $> npm start

Then, open your favorite browser at url `http://localhost:8080/`

## What to see

### TodoList simple
Implemented in a single component, the whole behaviour of the list is tackled via state changes.

### TodoList "reactive"
Implemented via actions and reducers. The epic is superflouous here, it does not add anything, and the delay might
look frustrating. The point was just to set up an architecture involving redux-observables. Probably not the best example
to apply it

### User Suggestion 
Directly inspired from this article : [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754). 
The point being to try and view everything as a stream.