const Reset = (props) => {
  return (
    <button
      className="resetstyle item"
      onClick={() => {
        props.setCounter(0); //
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
