// In this example, we get to know how to use useRef() to reference DOM elements.

import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null); // here we can provide any kind of initial value

  const focusInput = () => {
    inputElement.current.focus(); // here current is the property and focus is the method which is coming from the DOM
    inputElement.current.value = "Vinayak Yadav"; // here value is the method which is coming from the DOM
  };

  return (
    <div>
      {/* here the ref property will allow us to use this ref inside specific element */}
      <input
        type="text"
        placeholder="click the button to focus"
        ref={inputElement}
      />
      <button onClick={() => focusInput()}>Focus & Write the name</button>
    </div>
  );
};

export default FocusInput;
