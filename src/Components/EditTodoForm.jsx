import React, { useState } from "react";
import "../scss/EditTodoForm.scss";
const EditTodoForm = ({ editTodos, task }) => {
  const [value, setValue] = useState("");
  console.log("mein hu");

  const submitHandler = (e) => {
    e.preventDefault();
    editTodos(task.id, value);
    setValue("");
  };

  return (
    <form className="custom-EditTodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        name=""
        id=""
        required
        placeholder="update your task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button type="submit">Update task</button>
    </form>
  );
};

export default EditTodoForm;
