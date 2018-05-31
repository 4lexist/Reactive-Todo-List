import React from 'react';
import TodoList from '../components/TodoList';
import TodoListReactive from '../containers/TodoList.containers'
import '../style/app.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>[declarative]Todo List</h1>
                <TodoList />
                <hr/>
                <h1>[reactive]Todo List</h1>
                <TodoListReactive/>
            </div>
        )
    }
}