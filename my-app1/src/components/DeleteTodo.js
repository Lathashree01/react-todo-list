import React from 'react';

class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }
    handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            this.props.setTodos(prevTodos => {
                return prevTodos.filter((t) => t.id !== this.props.todo.id);
            }
            )
        }
    }
    render() {
        return (
            <span role="button"
                onClick={this.handleDeleteTodo}
                style={{
                    color: 'red',
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>
                x
            </span>
        );
    }
}

export default DeleteTodo;
