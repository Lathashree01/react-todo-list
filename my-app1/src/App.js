import React from 'react';
import { TodoList } from './components/TodoList.js';
import { AddTodo } from './components/AddTodo.js';
import "./styles.css";


export default function App() {

  const [todos, setTodos] = React.useState([

  ]);

  return (
    <div style={{
      // backgroundImage: `url("/assets/productivity1.jpg")`,
      backgroundColor: '#DCE775',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'auto',
      height:501,
      width:1500,
      alignContent:'center'
    }}>
      {/* <img src="/assets/MainBackground.png" alt="Productivity"/> */}
      <h1 className="App" >TO-DO List</h1>
      <p>[Double click to mark as done]</p>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}