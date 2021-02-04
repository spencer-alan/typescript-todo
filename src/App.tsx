import React from 'react';
import { TodoListItem } from './Components/TodoListItem';

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: false },
  { text: "Grocery store run", complete: false }
];

const App = () => {
  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
}

export default App;
