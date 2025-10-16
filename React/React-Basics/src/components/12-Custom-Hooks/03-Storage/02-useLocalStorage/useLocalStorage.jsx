import { useEffect, useState } from "react";

// key here is to identify the item in LocalStorage
const useLocalStorage = (key, initialValue) => {
  // Step 1: Initializing the React State
  // If there is any value in localStorage then use it otherwise use initialValue
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key); // take out the value from the localStorage
    if (storedValue) {
      return JSON.parse(storedValue); // In localStorage there is a string, do JSON.parse to bring it to original type
    }
    return initialValue; // if there is no value in localStorage then use initalValue
  });

  // Step 2: Update the localStorage after the state is changed
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // convert the value into string and then save it to localStorage
  }, [key, value]); // whenever the value is changed, effect will run

  return [value, setValue]; // return state and setter
};

export default useLocalStorage;
