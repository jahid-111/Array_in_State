import React, { useReducer } from "react";
import MainTask from "./MainTask";
import TaskList from "./TaskList";
import taskReducer from "./reducers/taskBusinessLogic";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const AddTask = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  console.log(tasks);

  const nextId = (data) => {
    const maxId = data.reduce((prv, current) =>
      prv && prv.id > current.id ? prv.id : current.id
    );
    return maxId + 1;
  };

  // console.log(nextId(tasks))
  const handleAddTask = (taskText) => {
    dispatch({
      type: "Added_Task",
      taskText,
      id: nextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "Edit_Task",
      task,
    });
    console.log(task);
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "Delete_This_Task",
      id: taskId,
    });
  };

  return (
    <div style={{ border: "2px solid green", margin: "20px" }}>
      <h2>
        {" "}
        Extracting State Logic into a Reducer <br />
        -Tasks Project
      </h2>
      <MainTask onAddTask={handleAddTask}></MainTask>
      <h2>List Task</h2>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      ></TaskList>
    </div>
  );
};

export default AddTask;
