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
    <form onSubmit={submitHandler}>
      <TextField 
        label="Add your todo"
        value={userInput}
        onChange={handleChange}
        style={{marginLeft:70}}
      />

      <Button type="submit" style={{marginTop:20, marginRight:5}}>
        <AddIcon />
      </Button>
    </form>
  );
};
export default TodoForm;
