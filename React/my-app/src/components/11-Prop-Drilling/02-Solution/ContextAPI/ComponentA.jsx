// first import the ContextAPI
import { createContext } from "react";

import ComponentB from "./ComponentB";

// second create the instance
export const DataOne = createContext();
export const DataTwo = createContext();

const ComponentA = () => {
  const name = "Vinayak Yadav";
  const age = 22;

  return (
    <div>
      {/* wrapping the application to use the ContextAPI */}
      <DataOne.Provider value={name}>
        <DataTwo.Provider value={age}>
          <ComponentB />
        </DataTwo.Provider>
      </DataOne.Provider>
    </div>
  );
};

export default ComponentA;
