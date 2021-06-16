import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import "./styles.css";
import ParticlesBg from 'particles-bg'

export default function App() {

  const [todos, setTodos] = React.useState([
  ]);
 const color=  [ "#aac5f0","#a8e381","#ed93a7"]
  const date = new Date().toDateString();

  function updateDiary() {

  }
  function deleteAll() {
    setTodos(() => {
      return []
    });
  }
  return (
    <>
      <div className="App" >
        <h1  >TO-DO List </h1>
        <h3 >Date : {date}</h3>
      </div>
      <div >
        <button className="button-class update-diary" onClick={updateDiary}> Update to Diary </button>
        <button className="button-class  update-diary" onClick={deleteAll}> Clear All </button>
        <br /><br />
        <AddTodo setTodos={setTodos} />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <ParticlesBg color={color} type="circle" bg={true} />
    </>
  );
}