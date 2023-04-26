const Increment = (props) => {
  return;
  {
    counter < 10 ? (
      <button
        className="decreincrestyle"
        onClick={() => {
          // Je donne comme nouvelle valeur à counter, se valeur actuelle + 1
          props.setCounter(props.counter + 1);
        }}
      >
        +
      </button>
    ) : null;
  }
};

export default Increment;
