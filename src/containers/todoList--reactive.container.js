import { connect } from 'react-redux'
import * as Actions from '../actions'
import { TodoListReactive } from "../components";

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodoStatus: index => {
            dispatch(Actions.toggleTodoAttempt(index))
        },
        addTodo: text => {
            dispatch(Actions.addTodoAttempt(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListReactive);