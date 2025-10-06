const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$559",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199",
    },
  ];

  return (
    <div>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>ProductName:{name}</li>
          <li>ProductPrice: {price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
