// Creating the Custom hook to avoid the logic duplication problem
import { useEffect, useState } from "react";

// can give any name but the convention is to use the use
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
