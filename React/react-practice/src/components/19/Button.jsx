const Button = (prop) => {
  return (
    <button
      style={{
        border: "none",
        color: "blue",
        marginTop: "50px",
        fontSize: "20px",
      }}
    >
      {prop.button}
    </button>
  );
};

export default Button;
