import React from 'react';
import TextField from '@material-ui/core/TextField'

export function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    // console.log(event.target.elements.addTodo.value);
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false
    };

    setTodos(prevTodos => {
      return prevTodos.concat(todo);
    })
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleAddTodo}>
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <button type="submit">Add</button>
    </form>
  );
}