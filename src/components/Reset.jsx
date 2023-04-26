const Reset = () => {
  return (
    <button
      onClick={() => {
        props.setCounter(!counter);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
