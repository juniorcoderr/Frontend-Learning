// older way of providing shape for prop

import type { FC } from "react";

type UserShapeFunctional = {
  name: string;
  age: number;
  isStudent: boolean;
};

const FunctionalComponent: FC<UserShapeFunctional> = ({
  name,
  age,
  isStudent,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default FunctionalComponent;
