// Using Dynamic Content with {} in JSX

const Greeting = () => {
  const greetingMessage = "Hello World!";
  const now = new Date();

  return (
    <div>
      <h1>{greetingMessage}</h1>
      <p>Date: {now.toLocaleString()}</p>
    </div>
  );
};

export default Greeting;
