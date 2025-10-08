// Example: useState with an Array of Data (Todo List Example)

import { useState } from "react";

const TodoList = () => {
  // State to store the list of todos (initially empty array)
  const [todos, setTodos] = useState([]);

  // State to store the current value of the input field
  const [inputValue, setInputValue] = useState("");

  // Function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload when form is submitted

    // If the input is not empty (after trimming spaces)
    if (inputValue.trim()) {
      // Add new todo to the existing array using spread operator
      setTodos([...todos, inputValue]);

      // Clear the input field after adding
      setInputValue("");
    }
  };

  // Function that runs on every keystroke in the input field
  const handleChange = (e) => {
    // Update the inputValue state with the latest input
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* Heading for the Todo App */}
      <h1>My Todo List</h1>

      {/* Form to add a new todo */}
      <form onSubmit={handleSubmit}>
        {/* Input field to type the todo */}
        <input
          type="text"
          value={inputValue} // Controlled input → value comes from state
          onChange={handleChange} // Updates state on typing
          placeholder="Enter your Todo"
        />

        {/* Button to add todo */}
        <button type="submit">Add Todo</button>
      </form>

      {/* List of all todos */}
      <ul>
        {/* Loop through todos array and render each item */}
        {todos.map((todo, index) => (
          // Always give a unique 'key' when rendering a list
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
