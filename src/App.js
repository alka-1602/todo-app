import React, { useState } from "react";
import TodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import clsx from "clsx";

// Component Boundaries & responsibilities
// Colocating state (to avoid unnecessary re-renders)
// naming of props as per outputs and inputs
// avoid unnecessary DOM

const useAppStyles = makeStyles(
  () => ({
    appBar: {
      padding: 30,
      textAlign: "center",
      fontSize: 30,
      position: "sticky",
    },
    item: {
      textAlign: "center",
      marginTop: "10",
      marginBotton: "8",

      justify: "center",
      alignItems: "center",
    },
    itemLargeSize: {
      fontSize: 4,
    },
  }),
  {
    name: "App",
  }
);

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

  const classes = useAppStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar className={classes.appBar}> Todo App </AppBar>
        </Grid>

        <Grid item xs={12}>
          <Paper className={clsx(classes.itemLargeSize, classes.item)}>
            <Typography variant="h4" gutterBottom>
              List of todos
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.item}>
            <TodoForm addTodos={todos} setAddTodos={setTodos} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.item}>
            <TodoList
              addTodos={todos}
              deleteTodo={deleteItem}
              todoComplete={todoComplete}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
