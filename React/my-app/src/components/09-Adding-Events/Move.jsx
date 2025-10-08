const Move = () => {
  function moveHandler() {
    console.log("Mouse move event fired");
  }
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ipsam,
      quisquam dolores dolorum fuga, quidem nostrum reiciendis dolor modi
      doloribus odio corrupti ex? Quas molestiae, expedita odio accusamus sit
      autem!
    </p>
  );
};

export default Move;
