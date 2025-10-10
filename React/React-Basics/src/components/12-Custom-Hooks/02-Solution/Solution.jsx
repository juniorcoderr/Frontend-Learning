// So to avoid the logic duplication or code duplication or reusing logic across components, We are going to create a custom hook.

import useFetch from "./useFetch";

const Solution = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos"); // now we can fetch this data in all of our component

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Solution;
