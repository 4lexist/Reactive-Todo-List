import React from 'react';
import '../style/todolist.scss';
import '../enumerations/task-status.enumeration'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            arrayTodoItems: []
        }

        this.updateInputValue = this.updateInputValue.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
    }

    updateInputValue(event) {
        this.setState({inputValue: event.target.value});
    };

    addTask(event) {
        event.preventDefault(); // prevents refreshing ?!
        if(this.state.inputValue === '') {
            return;
        }

        const task = {
            text: this.state.inputValue,
            isDone: false
        };

        this.setState({
            arrayTodoItems: [...this.state.arrayTodoItems, task],
            inputValue: ''
        });
    };

    toggleStatus(taskId) {
        const newArray = this.state.arrayTodoItems;
        newArray[taskId] = {
            text: this.state.arrayTodoItems[taskId].text,
            isDone: !this.state.arrayTodoItems[taskId].isDone
        };

        this.setState({
            arrayTodoItems: newArray
        });
    }

    renderTodoItems() {
        return (
            <ol className='todo-items'>
                {this.state.arrayTodoItems.map((item, id) => {
                    return (
                        <li key={`item-${id}`} className={item.isDone ? 'item--done' : ''}>
                            <input type="checkbox" onClick={() => {this.toggleStatus(id)}}/>
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
                <form onSubmit={this.addTask}>
                    <input
                        type='text'
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                    />
                    <input
                        type='submit'
                        value='Add'
                    />
                </form>
            </div>
        )
    }
}