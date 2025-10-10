// receiving or consuming the data

import { DataOne, DataTwo } from "./ComponentA";

const ComponentD = () => {
  return (
    <DataOne.Consumer>
      {(name) => {
        return (
          <DataTwo.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is: {name} and I'm {age} years old.
                </h1>
              );
            }}
          </DataTwo.Consumer>
        );
      }}
    </DataOne.Consumer>
  );
};

export default ComponentD;
