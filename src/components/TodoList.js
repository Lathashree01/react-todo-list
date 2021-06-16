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
                <h3 className="no-todo">No TO-Dos, enjoy your day.</h3>
            )
        }
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li
                        // onDoubleClick={() => this.handleToggleTodo(todo)}
                        // style={{
                        //     textDecoration: todo.done ? 'line-through' : ''
                        // }} 
                        key={todo.id} className="list-style">
                        <label>
                            <input type="checkbox" className="checkbox"
                                defaultChecked={todo.done}
                            />
                            {todo.text}
                        </label>
                        <DeleteTodo todo={todo} className="button-class" setTodos={this.props.setTodos} />
                    </li>
                ))}
            </ul>
        );
    }
}
export default TodoList;