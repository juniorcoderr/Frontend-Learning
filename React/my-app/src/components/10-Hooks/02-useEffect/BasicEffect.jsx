import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("BasicEffect");
  }, []);

  return <h1>Check the console to see the message</h1>;
};

export default BasicEffect;
