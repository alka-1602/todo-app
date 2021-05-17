import React, { useState } from "react";
import TodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

import "./styles.css";

// Component Boundaries & responsibilities
// Colocating state (to avoid unnecessary re-renders)
// naming of props as per outputs and inputs
// avoid unnecessary DOM

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log("App rendered");

  function deleteItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  React.useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1> Todo App </h1>
          <TodoForm addTodos={todos} setAddTodos={setTodos} />
          <TodoList addTodos={todos} deleteTodo={deleteItem} />
        </div>
      </div>
    </>
  );
};

export default App;
