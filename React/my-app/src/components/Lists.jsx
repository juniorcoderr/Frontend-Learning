const Lists = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <main>
      {/* this is how we going to iterating over through each element inside our list  */}
      {numbers.map((number) => (
        // this is how we are going to be providing a unique key or a unique identifier for each element inside the list
        <ul key={number}>
          {/* this is how we going to be render the list items to the DOM */}
          <li>{number}</li>
        </ul>
      ))}
    </main>
  );
};

export default Lists;
