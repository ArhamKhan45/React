import React, { useState } from "react";
import "../scss/Todoform.scss";
const Todoform = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
    // console.log(value);
  };

  return (
    <form className="custom-todo-form" onSubmit={submitHandler}>
      <input
        type="text"
        name=""
        id=""
        required
        placeholder="What are the tasks, you will do today?"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button type="submit">Add task</button>
    </form>
  );
};

export default Todoform;
