import React from 'react';
import DialogBox from '../common/DialogBox';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.inputRef = React.createRef();
    this.state = { open: false };
  }
  handleClose(val) {
    this.setState({ open: val });
  }
  handleAddTodo(event) {
    event.preventDefault();
    let value = this.inputRef.current.value;
    if (value.trim().length > 0) {
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
      // window.alert("Can't add empty Todos !!")
      this.setState({ open: true });
    }
  }
  render() {

    return (
      <>
        <form onSubmit={this.handleAddTodo}>
          <input name="addTodo" className="add-todo-input" placeholder="Type in your ToDo .. " ref={this.inputRef} />
          <button className="button-class add-todo" type="submit">Add</button>
        </form>
        <DialogBox open={this.state.open} onChangeState={this.handleClose} />
      </>
    );
  }
}

export default AddTodo;