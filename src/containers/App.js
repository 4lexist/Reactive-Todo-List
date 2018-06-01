import React from 'react';
import TodoList from '../components/todoList.component';
import WhoToFollow from '../components/whoToFollow.component';
import TodoListReactive from '../containers/todoList.container'
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
                <hr/>
                <WhoToFollow/>
            </div>
        )
    }
}