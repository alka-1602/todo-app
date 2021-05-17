import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const TodoItem = ({ text, deleteTodo, todo }) => {
  console.log("TodoItem rendered");

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };

  return (
    <form>
      <li className="each-item">
        <input type="checkbox" />
        <label class="strikethrough">{text} </label>
        <Button className="btn-delete" onClick={deleteHandler}>
          <DeleteOutlineIcon />
        </Button>
      </li>
    </form>
  );
};
export default TodoItem;
