import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
