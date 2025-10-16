import { useState, useEffect } from "react";

function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = sessionStorage.getItem(key); // take out the value from sessionStorage

      // if there is a saved value then parse the string back to original type and if there is no value in sessionStorage then return the initialValue
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error parsing sessionStorage value:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // convert the value into string and then save it to sessionStorage
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to sessionStorage:", error);
    }
  }, [key, value]);

  // return state and setter
  return [value, setValue];
}

export default useSessionStorage;
