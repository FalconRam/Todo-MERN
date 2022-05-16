import React from "react";
import "./GetAllTask";

function GetAllTask(props) {
  const todoList = props.todolist.map((task, index) => {
      return <li key={index}>
          <div>
              {task.todo}
        </div>
    </li>;
  });

    return <div className="getAllTask">
        <ul>
            {todoList}
      </ul>
  </div>;
}

export default GetAllTask;
