import { useState } from "react";

const ExampleOne = () => {
  const [stateValue, setStateValue] = useState("");

  return (
    <div>
      <h2>useState Example</h2>
      <input
        type="text"
        placeholder="Enter you name"
        value={stateValue}
        onChange={(e) => setStateValue(e.target.value)}
      />

      <p>State: {stateValue}</p>
    </div>
  );
};

export default ExampleOne;
