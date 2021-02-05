import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoProps {
  addTodo: AddTodo;
}

const AddTodoForm = ({ addTodo }: AddTodoProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>Add todo</button>
    </form>
  );
};

export default AddTodoForm;