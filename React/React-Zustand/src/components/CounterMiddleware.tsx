import { useCounterMiddlewareStore } from "../store/useCounterMIddlewareStore";

const CounterMiddleware = () => {
  const { count, increment, decrement } = useCounterMiddlewareStore();

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterMiddleware;
