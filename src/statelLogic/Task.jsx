import React, { useState } from "react";

const Task = ({ task }) => {
  const [isEdit, setIsEditing] = useState(false);

  let taskContent;

  if (isEdit) {
    taskContent = (
      <>
        <input type="text" value={task.text} />
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
          <input type="checkbox" />
          {taskContent}
          <button>Save</button>
          <button>Delete</button>
        </label>
      </li>
    </div>
  );
};

export default Task;
