import ComponentB from "./ComponentB";

const ComponentA = () => {
  const name = "Vinayak Yadav";

  return (
    <div>
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
