const Copy = () => {
  const copyHandler = () => {
    alert("Stop stealing my content");
  };
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
      molestiae. Expedita doloribus minus deserunt natus consectetur laboriosam
      veritatis reprehenderit officia vitae ipsa, odit, obcaecati error modi
      magnam, rem commodi dolorem.
    </p>
  );
};

export default Copy;
