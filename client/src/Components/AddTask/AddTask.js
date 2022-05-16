import "./AddTask.css";
import axios from "axios";
import React, { useState } from "react";

function Addtask(props) {
  const [task, setTask] = useState("");

  const baseURL = "http://localhost:8000/api/tasks";

  const AddTask = () => {
    if (task.trim() === "") {
      return;
    } else {
      axios
        .post(baseURL, {
          todo: task,
          isCompleted: false,
        })
        .then((res) => {
          setTask("");
          props.addTask(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="Add Task..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={() => AddTask()}>Add Task</button>
    </div>
  );
}

export default Addtask;
