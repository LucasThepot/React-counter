const Reset = (props) => {
  return (
    <button
      className="resetstyle"
      onClick={() => {
        props.setCounter(0); //
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
