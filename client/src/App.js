import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import AddTask from './Components/AddTask/AddTask'
import GetAllTask from './Components/GetAllTask/GetAllTask';

function App() {
  // eslint-disable-next-line
  const [todolist, setTodolist] = useState([]);
  const baseURL = "http://localhost:8000/api/tasks"
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setTodolist(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const addTask = newTask => {
    setTodolist([newTask, ...todolist]);
  }
  return (
    <div>
      <AddTask addTask={addTask}></AddTask>
      <GetAllTask todolist={todolist}></GetAllTask>
    </div>
  );
}

export default App