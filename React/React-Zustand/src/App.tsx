import Counter from "./components/Counter";
import CounterMiddleware from "./components/CounterMiddleware";

const App = () => {
  return (
    <div>
      <Counter />
      <CounterMiddleware />
    </div>
  );
};

export default App;
