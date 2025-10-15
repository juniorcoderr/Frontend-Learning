import { createContext, useState, type FC, type ReactNode } from "react";

interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// here we define count, increment, decrement
// Default values are provided because of TypeScript actual values will come from Provider
export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

// creating the Provider
// MyProvider is a component which provides actual values of context
// {children} means the components which are under this (MyContext) can access the context
const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
