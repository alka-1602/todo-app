import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useItemStyles = makeStyles(
  () => ({
    item: {
      backgroundColor: "lightGreen",
      padding: 10,
      marginBottom: 10,
    },
  }),
  {
    name: "List",
  }
);

const TodoItem = ({ text, deleteTodo, todo, todoComplete }) => {
  console.log("TodoItem rendered");

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  function handleCheckbox() {
    todoComplete(todo.id);
  }

  const classes = useItemStyles();

  return (
    <ListItem className={classes.item}>
      <Checkbox
        size="small"
        onClick={handleCheckbox}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
        checked={todo.isComplete}
      />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.isComplete ? "line-through" : null }}
      />

      <Button color="secondary" onClick={deleteHandler}>
        <DeleteOutlineIcon />
      </Button>
    </ListItem>
  );
};
export default TodoItem;
