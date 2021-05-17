import React from "react";

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
      { text: userInput, completed: false, id: Math.random() * 1000 }
    ]);
    setUserInput("");
  };
  return (
    <form className="add-items">
      <input
        type="text"
        placeholder="add your todo"
        value={userInput}
        onChange={handleChange}
      />

      <button className="btn" onClick={submitHandler}>
        {" "}
        +{" "}
      </button>
    </form>
  );
};
export default TodoForm;
