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

  const nextId = (data) => {
    const maxId = data.reduce((prv, current) =>
      prv && prv.id > current.id ? prv.id : current.id
    );
    return maxId + 1;
  };

  // console.log(nextId(tasks))
  const handleAddTask = (taskText) => {
    setTasks([
      ...tasks,
      {
        id: nextId(tasks),
        text: taskText,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };

  const handleDeleteTask = (taskId) => {
    const deleteask = tasks.filter((dlt) => dlt.id !== taskId);
    setTasks(deleteask);
  };

  return (
    <div style={{ border: "2px solid green", margin: "20px" }}>
      <h2>
        {" "}
        Extracting State Logic into a Reducer <br />
        -Tasks Project
      </h2>
      <MainTask onAddTask={handleAddTask}></MainTask>

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      ></TaskList>
    </div>
  );
};

export default AddTask;
