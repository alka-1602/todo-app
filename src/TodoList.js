import React from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
const TodoList = ({ addTodos, deleteTodo, todoComplete }) => {
  console.log("TodoList rendered");

  return (
    <List style={{marginLeft:500, marginRight:500}}>
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
    </List>
  );
};
export default TodoList;
