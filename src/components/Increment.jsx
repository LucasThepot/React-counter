const Increment = (props) => {
  return (
    <button
      onClick={() => {
        // Je donne comme nouvelle valeur à counter, se valeur actuelle + 1
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;