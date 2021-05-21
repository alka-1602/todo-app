import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";


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
      <Grid container spacing={3} style={{ alignItems: "center" }}>
        <Grid item xs={12} sm={5}>
          <TextField
            label="Add your todo"
            value={userInput}
            onChange={handleChange}
            fullWidth
            // style={{ marginLeft:20 }}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button type="submit">
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default TodoForm;
