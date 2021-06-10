import React from 'react';
import { DeleteTodo } from './DeleteTodo.js';

export function TodoList({ todos, setTodos }) {

    function handleToggleTodo(todo) {
        const updatedTodos = todos.map(t =>
            t.id === todo.id
                ?
                {
                    ...t,
                    done: !t.done
                } : t
        )
        setTodos(updatedTodos)

    }
    if(!todos.length){
        return(
            <h3>No TO-Dos, enjoy your day.</h3>
        )
    }
    return (
        <ul>
            {todos.map(todo => (
                <li
                    onDoubleClick={() => handleToggleTodo(todo)}
                    style={{
                        textDecoration: todo.done ? 'line-through' : ''
                    }} key={todo.id}>
                    {todo.text}
                    <DeleteTodo todo={todo} setTodos={setTodos} />
                </li>
            ))}
        </ul>
    );
}