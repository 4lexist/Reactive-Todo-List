import React from 'react';
import '../style/todolist.scss';

import Input from "../components/input.component";

export default class TodoListReactive extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
    }

    addTask(taskText) {
        event.preventDefault(); // prevents refreshing ?!
        this.props.addTodo(taskText);
    };

    renderTodoItems() {
        return (
            <ol className='todo-items'>
                {this.props.todos.map((item, index) => {
                    return (
                        <li key={`item-${index}`} className={item.isDone ? 'item--done' : ''}>
                            <input type="checkbox" onClick={() => {this.props.toggleTodoStatus(index)}}/>
                            {item.text}
                        </li>
                    )
                })}
            </ol>
        )
    };

    render() {
        return (
            <div className='todo-list'>
                {this.renderTodoItems()}
                <Input onSubmit={this.addTask}/>
            </div>
        )
    }
}

TodoListReactive.defaultProps = {
    todos: [],
    toggleTodo: () => {},
    addTodo: () => {}
};