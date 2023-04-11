import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
  return (
    <>
      <p>New TODO</p>
      <TodoForm
        label="Escribe tu nuevo TODO"
        submitText="Agregar"
        submitEvent={() => console.log("submitEvent new TODO")}
      />
    </>
  );
}

export { NewTodoPage };
