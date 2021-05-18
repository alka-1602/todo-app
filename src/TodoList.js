import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ addTodos, deleteTodo, todoComplete }) => {
  console.log("TodoList rendered");

  return (
    <ul>
      {addTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            deleteTodo={deleteTodo}
            todo={todo}
            todoComplete={todoComplete}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
