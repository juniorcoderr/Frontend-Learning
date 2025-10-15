// consuming the context - Counter component will take count and functions from useContext

import { useContext, type FC } from "react";
import { MyContext } from "./MyContext";

const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext); // to get the current values of the context

  return (
    <div>
      <h1>Counter becomes Independent and can be reuse anywhere</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
