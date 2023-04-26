const Increment = (props) => {
  return (
    <button
      className="decreincrestyle "
      onClick={() => {
        // Je donne comme nouvelle valeur à counter, se valeur actuelle + 1
        props.setCounter(props.counter + 1);
      }}
      {counter >= 10 ? "" : +}
    >
      +
    </button>
  );
};

export default Increment;
