import { useReducer } from "react";

// providing the intital state
const initialState = { count: 0 };

// reducer function -> state = which thing are we updating and action = then how we have to update that thing
const reducer = (state, action) => {
  // here we can either use if-else statements or we can use ternary operator or switch case statements
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const CounterExample = () => {
  // here state is use to display the data into the UI & dispatch function allows us to change our state ->
  // means it will allows us to provide some sort of rule, if that rule is equal to increment we are going to incrementing and if that rule is equal to decrement we are decrementing. Overall this function allows us to change our state

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h1>Count: {state.count}</h1>
    </div>
  );
};

export default CounterExample;
