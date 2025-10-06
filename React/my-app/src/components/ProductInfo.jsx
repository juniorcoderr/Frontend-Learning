// Using Dynamic Content with {} in JSX

const ProductInfo = () => {
  const productDetails = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
  };

  return (
    <div>
      <p>Name: {productDetails.name}</p>
      <p>Price: ${productDetails.price}</p>
      <p>Availability: {productDetails.availability}</p>
    </div>
  );
};

export default ProductInfo;
