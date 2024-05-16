import React, { useState } from "react";

const MainTask = ({ onAddTask }) => {
  const [inputValue, setInpuValue] = useState("");

  const handleAddButtonTask = (e) => {
    setInpuValue(e.target.value);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleAddButtonTask} />
      <button
        onClick={() => {
          setInpuValue("");
          onAddTask(inputValue);
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default MainTask;
