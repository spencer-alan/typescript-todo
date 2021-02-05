import React, { useState } from "react";
import TodoList from "./Components/todoList";
import AddTodoForm from "./Components/addTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Grocery store run", complete: false }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = ( selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, {text: newTodo, complete: false}]);
    }
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
