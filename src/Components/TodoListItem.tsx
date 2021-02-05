import React from "react";
import "./TodoListItem.css";

interface TodoListProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem = ({ todo, toggleTodo }: TodoListProps) => {
  return (
    <li>
      <label
        className={todo.complete ? "complete" : undefined }
      >
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} /> 
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;