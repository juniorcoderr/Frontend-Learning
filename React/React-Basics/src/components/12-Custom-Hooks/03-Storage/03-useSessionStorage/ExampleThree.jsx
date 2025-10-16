import useSessionStorage from "./useSessionStorage";

const ExampleThree = () => {
  const [sessionValue, setSessionValue] = useSessionStorage("sessionData", ""); // here localData is a key which is use to store data in sessionStorage

  return (
    <div>
      <h2>useSessionStorage Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={sessionValue}
        onChange={(e) => {
          setSessionValue(e.target.value);
        }}
      />

      <p>SessionStorage: {sessionValue}</p>
    </div>
  );
};

export default ExampleThree;
