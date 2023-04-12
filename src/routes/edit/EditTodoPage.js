import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();

  const { state, stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = state;

  let todoText = ''
  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {

    const todo = getTodo(params.id);
    todoText =todo.text
  }

  return (
    <>
      <p>Edit TODO</p>
      <TodoForm
        label="Editar TODO"
        defaultTodoText={todoText}
        submitText="Guardar"
        submitEvent={(newText) => editTodo(params.id, newText)}
      />
    </>
  );
}

export { EditTodoPage };
