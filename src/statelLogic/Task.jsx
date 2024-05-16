import React, { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEdit, setIsEditing] = useState(false);

  let taskContent;

  if (isEdit) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {" "}
        {task.text} <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <li>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChangeTask({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {taskContent}

          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </label>
      </li>
    </div>
  );
};

export default Task;
