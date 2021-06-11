import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import "./styles.css";


export default function App() {

  const [todos, setTodos] = React.useState([
  ]);

  return (
    <>
      {/* <img src="/assets/MainBackground.png" alt="Productivity"/> */}
      <h1 className="App" >TO-DO List</h1>
      <p className="App">[Double click to mark as done]</p>
      <div >
        <AddTodo setTodos={setTodos} />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>

    </>
  );
}