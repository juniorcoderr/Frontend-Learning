import { useState, useEffect } from "react";

// This is a TypeScript type alias —
// we’ve created a Product type that defines the exact structure of the data coming from the API.
// This helps TypeScript understand what fields are present in the data and what their respective data types are.

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  // State with type annotation
  // Here, we’ve created a state variable named data.
  // Its type is Product | null, which means it can either hold a `Product` object or `null`.
  // Initially, it’s set to `null` because there’s no data available before the API call completes.

  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>price: {data.price}</p>
          <p>discountPercentage: {data.discountPercentage}</p>
          <p>rating: {data.rating}</p>
          <p>stock: {data.stock}</p>
          <p>brand: {data.brand}</p>
          <p>category: {data.category}</p>
          <p>thumbnail: {data.thumbnail}</p>
          {data.images.map((img) => (
            <img src={img} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
