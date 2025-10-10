// Example: Using useRef() to store a value that persists between renders
// without causing re-renders when the value changes.

import { useEffect, useRef, useState } from "react";

const Timer = () => {
  // 'count' stores the timer value that increases every second
  const [count, setCount] = useState(0);

  // useRef() to store the interval ID — persists between renders
  // but changing it won't trigger a re-render like useState does
  const intervalRef = useRef(null);

  // useEffect runs once (empty dependency array [])
  // Sets up a timer that increases count every 1 second
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Updating count using the previous value
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function — clears interval when component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {/* Display the timer value */}
      <h1>Timer: {count} seconds</h1>

      {/* Button to manually stop the timer */}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
