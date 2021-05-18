import React from "react";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

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
      <li className="each-item">
        <input type="checkbox" onClick={handleCheckbox} />
        <label
          class="strikethrough"
          style={{ textDecoration: todo.isComplete ? "line-through" : null }}
        >
          {text}{" "}
        </label>
        <Button className="btn-delete" onClick={deleteHandler}>
          <DeleteOutlineIcon />
        </Button>
      </li>
    </form>
  );
};
export default TodoItem;
