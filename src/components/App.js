import React from 'react';
import TodoList from './TodoList';
import '../style/app.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList />
            </div>
        )
    }
}