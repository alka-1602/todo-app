import React, { useState } from "react";
import TodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import AppBar from "@material-ui/core/AppBar";

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

  function todoComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
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
    <div className="main-div">
      <div className="child-div">
        <AppBar className="header"> Todo App </AppBar>
        <h1> List of todos </h1>
        <TodoForm addTodos={todos} setAddTodos={setTodos} />
        <TodoList
          addTodos={todos}
          deleteTodo={deleteItem}
          todoComplete={todoComplete}
        />
      </div>
    </div>
  );
};

export default App;
