import React, { useState } from "react";
import MainTask from "./MainTask";
import TaskList from "./TaskList";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const AddTask = () => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div style={{ border: "2px solid green", margin: "20px" }}>
      <h2>
        {" "}
        Extracting State Logic into a Reducer <br />
        -Tasks Project
      </h2>
      <MainTask></MainTask>

      <TaskList tasks={tasks}></TaskList>
    </div>
  );
};

export default AddTask;
