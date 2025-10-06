const Person = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </section>
  );
};

export default Person;
