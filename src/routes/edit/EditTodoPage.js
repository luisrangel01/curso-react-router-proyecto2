import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
  return <>
  <p>Edit TODO</p>
  <TodoForm
    label="Editar TODO"
    submitText="Guardar"
    submintEvent={() => console.log("submitEvent edit TODO")}
  />
</>;
}

export { EditTodoPage };
