// Dynamically Styling the element using Object

const StyleOne = () => {
  const styles = {
    color: "lime",
    backgroundColor: "crimson",
    padding: "2rem",
  };

  return (
    <div>
      <h1 style={styles}>Dynamic Styling</h1>
    </div>
  );
};

export default StyleOne;
