export default function taskReducer(tasks, action) {
  if (action.type === "Added_Task") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.taskText,
        done: false,
      },
    ];
  } else if (action.type === "Edit_Task") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "Delete_This_Task") {
    return tasks.filter((dlt) => dlt.id !== action.id);
  } else {
    throw Error("Noot found");
  }
}
