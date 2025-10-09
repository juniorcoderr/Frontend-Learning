// We setup useEffect hook to run some code WHEN
// Component renders for the first time
// Whenever it re-renders
// Some data in our component changed

import { useEffect, useState } from "react";

const Basics = () => {
  const [value, setValue] = useState(0);

  // condition - 1 -> when we don't use the dependency array after the callback function = function will fired on every render
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // });

  // condition - 2 -> when we use the dependency array after the callback function but it is empty = function will only fired once when the component renders
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // }, []);

  // condition - 3 -> when we use the dependency array after the callback function but it is not empty = anytime the component changes because of it's state the callback function will fire, but if we have some sort of other state that state is also re-rendering or the component this code will not fire
  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  );
};

export default Basics;
