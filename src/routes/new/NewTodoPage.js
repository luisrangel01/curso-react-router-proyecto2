import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <>
      <p>New TODO</p>
      <TodoForm
        label="Escribe tu nuevo TODO"
        submitText="Agregar"
        submitEvent={(text) => addTodo(text)}
      />
    </>
  );
}

export { NewTodoPage };
