import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

const TodoItem = ({ text, deleteTodo, todo, todoComplete }) => {
  console.log("TodoItem rendered");

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  function handleCheckbox() {
    todoComplete(todo.id);
  }

  return (
    <form>
      <ListItem style={{backgroundColor:"lightcyan", borderRadius:30, marginBottom:15, marginTop:15}}>
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
    </form>
  );
};
export default TodoItem;
