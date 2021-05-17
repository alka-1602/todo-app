import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const TodoForm = ({ addTodos, setAddTodos }) => {
  const [userInput, setUserInput] = React.useState("");
  console.log("TodoForm rendered");
  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setAddTodos([
      ...addTodos,
      { text: userInput, completed: false, id: Math.random() * 1000 },
    ]);
    setUserInput("");
  };
  return (
    <form className="add-items">
      <TextField
        label="add your todo"
        value={userInput}
        onChange={handleChange}
      />

      <Button className="btn" onClick={submitHandler}>
        <AddIcon />
      </Button>
    </form>
  );
};
export default TodoForm;
