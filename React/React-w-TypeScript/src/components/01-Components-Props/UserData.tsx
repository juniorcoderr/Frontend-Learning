// modern way of providing shape for prop

import type { ReactNode } from "react";

interface UserType {
  children: ReactNode;
}

const UserData = ({ children }: UserType) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default UserData;
