import React, { useState } from "react";
import Todoform from "./Todoform";
import EditTodoForm from "./EditTodoForm";
import "../scss/TodoWrapper.scss";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // add task

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // task completed

  const taskComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //taskDeleted
  const taskDeleted = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != id;
      })
    );
  };

  // edit the task
  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // edit todos
  const editTodos = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="custom-todo-wrapper">
      <h1 style={{ color: "white", marginBottom: "15px", textAlign: "center" }}>
        My todo React
      </h1>

      {/* for creating todos */}
      <Todoform addTodos={addTodos} />

      {/* for showing all todos */}

      {todos.map((item, index) => {
        if (item.isEditing) {
          return (
            <EditTodoForm
              editTodos={editTodos}
              task={item}
              key={index}
              todos={todos}
            />
          );
        } else {
          return (
            <Todo
              key={index}
              task={item}
              taskComplete={taskComplete}
              taskDeleted={taskDeleted}
              editTask={editTask}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoWrapper;
