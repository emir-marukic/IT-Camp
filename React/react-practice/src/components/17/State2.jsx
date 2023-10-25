const State2 = ({ updateChild, childState }) => {
  return (
    <div>
      <p style={{ color: state % 2 === 0 ? "red" : "yellow" }}>child</p>
      <p>{updateChild}</p>
      <button
        onClick={() => {
          childState(updateChild + 2);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default State2;
