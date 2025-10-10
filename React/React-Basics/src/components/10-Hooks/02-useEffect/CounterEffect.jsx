import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${count}`;
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
export default CounterEffect;
