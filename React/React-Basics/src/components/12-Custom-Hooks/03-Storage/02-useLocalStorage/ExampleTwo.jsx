import useLocalStorage from "./useLocalStorage";

const ExampleTwo = () => {
  const [localValue, setLocalValue] = useLocalStorage("localData", ""); // here localData is a key which is use to store data in localStorage

  return (
    <div>
      <h2>useLocalStorage Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />

      <p>LocalStorage: {localValue}</p>
    </div>
  );
};

export default ExampleTwo;
