import React, {useState, useReducer} from 'react';
import {toDoReducer, initialState} from './reducers'

import TodoForm from './components/TodoForm'
import ToDoList from './components/ToDoList'

import './App.css';


function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);


   
  const addTask = (taskName) => {
     dispatch({
      type: 'ADD_TASK',
      payload: taskName
    })
  }
  


console.log(state)
  


  return (
    <div className="App">
      <h1>To Do</h1>
      <TodoForm addTask={addTask} />
      <div className="tasks">
        <ToDoList tasks ={state}  />
        </div>      
    </div>
  );
}

export default App;
