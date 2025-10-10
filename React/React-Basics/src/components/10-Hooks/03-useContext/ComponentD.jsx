// solving the prop drilling problem using useContext() hook.
// receiving the data using useContext() hook

import { DataOne, DataTwo } from "./ComponentA";

// first import the useContext hook from react
import { useContext } from "react";

const ComponentD = () => {
  // telling the hook from which context data is coming from
  const userName = useContext(DataOne); // getting the data by using the hook. Now we no longer need to write the callback function everytime.
  const Age = useContext(DataTwo);

  return (
    <h1>
      My name is: {userName} and I'm {Age} years old.
    </h1>
  );
};

export default ComponentD;
