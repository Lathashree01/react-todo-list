import React from 'react';
import DeleteTodo from './DeleteTodo';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleToggleTodo(todo) {
        const updatedTodos = this.props.todos.map(t =>
            t.id === todo.id ?
                {
                    ...t,
                    done: !t.done
                } : t
        )
        this.props.setTodos(updatedTodos)
    }

    render() {
        if (!this.props.todos.length) {
            return (
                <h3>No TO-Dos, enjoy your day.</h3>
            )
        }
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li
                        onDoubleClick={() => this.handleToggleTodo(todo)}
                        style={{
                            textDecoration: todo.done ? 'line-through' : ''
                        }} key={todo.id}>
                        {todo.text}
                        <DeleteTodo todo={todo} setTodos={this.props.setTodos} />
                    </li>
                ))}
            </ul>
        );
    }
}
export default TodoList;