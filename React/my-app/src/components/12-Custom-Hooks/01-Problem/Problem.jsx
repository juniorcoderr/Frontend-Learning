// This code works fine, but imagine if we need to reuse the same logic in multiple components.
// We would have to create a state in each component, use useEffect() to fetch data,
// convert the response to JSON, and then update the state every time.
// Repeating this process in multiple components is inefficient and leads to a lot of duplicate code.
// So to solve this issue we will create a custom hook for the same.

import { useEffect, useState } from "react";

const Problem = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Problem;
