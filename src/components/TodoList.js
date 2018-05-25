import React from 'react';
import '../style/todolist.scss';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            arrayTodoItems: []
        }

        this.updateInputValue = this.updateInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.renderTodoItems = this.renderTodoItems.bind(this);
    }

    updateInputValue(event) {
        this.setState({inputValue: event.target.value});
    };

    addItem(event) {
        event.preventDefault(); // prevents refreshing ?!
        if(this.state.inputValue === '') {
            return;
        }

        this.setState({
            arrayTodoItems: [...this.state.arrayTodoItems, this.state.inputValue],
            inputValue: ''
        });
    };

    renderTodoItems() {
        return (
            <ol className='todo-items'>
                {this.state.arrayTodoItems.map((item, id) => {
                    return <li key={`item-${id}`}>{item}</li>
                })}
            </ol>
        )
    };

    render() {
        return (
            <div className='todo-list'>
                {this.renderTodoItems()}
                <form onSubmit={this.addItem}>
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