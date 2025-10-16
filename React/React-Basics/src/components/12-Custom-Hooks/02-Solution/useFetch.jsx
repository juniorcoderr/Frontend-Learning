// Creating the Custom hook to avoid the logic duplication problem
import { useEffect, useState } from "react";

// can give any name but the convention is to use the use
// Extending the hook so that it also informs the component regarding API loading state and error state.
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response is not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  // return multiple states
  return { data, loading, error };
};

export default useFetch;
