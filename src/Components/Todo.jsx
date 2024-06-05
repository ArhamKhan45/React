import React from "react";
import "../scss/Todo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ task, taskComplete, taskDeleted, editTask }) => {
  // console.log(task.id, taskComplete);
  return (
    <div className="custom-todos">
      <div>
        <p
          className={task.completed ? "completed" : ""}
          onClick={() => {
            taskComplete(task.id);
          }}
        >
          {task.task}
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTask(task.id)}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            taskDeleted(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
