import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.inputRef = React.createRef();
    // this.setTodos = this.setTodos.bind(this);
  }
  handleAddTodo(event) {
    event.preventDefault();
    // console.log(event.target.elements.addTodo.value);
    if (this.inputRef.current.value !== "") {
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: Math.random(),
        text,
        done: false
      }
      this.props.setTodos(prevTodos => {
        return prevTodos.concat(todo);
      })
      this.inputRef.current.value = "";
    }
    else {
      window.alert("Can't add empty Todos !!")
    }
  }
  render() {

    return (
      <form onSubmit={this.handleAddTodo}>
        <input name="addTodo" className="add-todo-input" placeholder="Add todo" ref={this.inputRef} />
        <button className="button-class add-todo" type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodo;