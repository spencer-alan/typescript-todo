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
    </>
  );
}

export default App;
