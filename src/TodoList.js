import React from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";



const TodoList = ({ addTodos, deleteTodo, todoComplete }) => {
  console.log("TodoList rendered");
 
  return (
    <Grid item xs={12} sm={6}>
      <Paper>
        <List>
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
      </Paper>
    </Grid>
  );
};
export default TodoList;
