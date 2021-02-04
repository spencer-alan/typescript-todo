import React from "react";
import "./TodoListItem.css";

interface TodoListProps {
  todo: Todo;
}

export const TodoListItem = ({ todo }: TodoListProps) => {
  return (
    <li>
      <label
        className={todo.complete ? "complete" : undefined }
      >
        <input type="checkbox" checked={todo.complete} /> 
        {todo.text}
      </label>
    </li>
  );
};