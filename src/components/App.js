import React from 'react';
import { TodoList, UserSuggestion, Selector } from './index';
import TodoListReactive from '../containers/todoList--reactive.container';
import { VisibleComponents } from '../enumerations/visibleComponents.enumeration';
import '../style/app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsList: [
                {label: 'Declarative Todo List ', active: false, componentToShow: VisibleComponents.DECLARATIVE_TODO_LIST},
                {label: 'Reactive Todo List ', active: false, componentToShow: VisibleComponents.REACTIVE_TODO_LIST},
                {label: 'User suggestion ', active: false, componentToShow: VisibleComponents.USER_SUGGESTION},
            ],
            componentToShow: ''
        };

        this.changeSelectedOption = this.changeSelectedOption.bind(this);
    }

    changeSelectedOption(indexToActivate) {
        let newComponentToShow = '';
        const newOptionsList = [];
        this.state.optionsList.map((option, index) => {
            if (indexToActivate === index) {
                newComponentToShow = option.componentToShow;
                newOptionsList.push({label: option.label, active: true, componentToShow: option.componentToShow});
            } else {
                newOptionsList.push({label: option.label, active: false, componentToShow: option.componentToShow});
            }
        });

        this.setState({
            optionsList: newOptionsList,
            componentToShow: newComponentToShow
        });
    }

    render() {
        let visibleComponent = '';
        let title = '';
        switch(this.state.componentToShow) {
            case VisibleComponents.DECLARATIVE_TODO_LIST:
                visibleComponent = <TodoList />;
                title = '[declarative] Todo List (no actions involved)';
                break;
            case VisibleComponents.REACTIVE_TODO_LIST:
                visibleComponent = <TodoListReactive />;
                title = '[reactive] Todo List (1-second delay between actions)';
                break;
            case VisibleComponents.USER_SUGGESTION:
                visibleComponent = <UserSuggestion/>;
                title = 'User suggestion component';
                break;
        }

        return (
            <div>
                <Selector optionsList={this.state.optionsList} changeSelectedOption={this.changeSelectedOption}/>
                <h1>{title}</h1>
                {visibleComponent}
            </div>
        )
    }
}