import { connect } from 'react-redux'
import * as Actions from '../actions'
import TodoListReactive from "../components/todoList--reactive.component";

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodoStatus: index => {
            dispatch(Actions.toggleTodo(index))
        },
        addTodo: text => {
            dispatch(Actions.addTodo(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListReactive);