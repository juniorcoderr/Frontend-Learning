const Button = () => {
  const handleClick = () => {
    alert("Hello World");
  };
  return <button onClick={handleClick}>Click</button>;
};

export default Button;
