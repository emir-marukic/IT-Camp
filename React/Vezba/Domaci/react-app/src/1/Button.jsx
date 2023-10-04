const Button = ({ variant, color }) => {
  const variantStyles = {
    default: {
      backgroundColor: "#fff",
      color: "black",
      border: "1px solid gray",
    },
    filled: {
      backgroundColor: "blue",
      color: "#fff",
      border: "1px solid blue",
    },
    light: {
      backgroundColor: "gray",
      color: "blue",
      border: "1px solid gray",
    },
    outline: {
      backgroundColor: "#fff",
      color: "blue",
      border: "1px solid blue",
    },
    subtle: {
      backgroundColor: "#fff",
      color: "blue",
      border: "none",
    },
  };
  const colorStyles = {
    gray: "gray",
    red: "red",
    blue: "blue",
    purple: "purple",
    yellow: "yellow",
    orange: "orange",
    green: "green",
    black: "black",
  };
  const style = variantStyles[variant] || variantStyles.default;
  const textColor = colorStyles[color] || colorStyles.gray;

  return (
    <div>
      <button
        style={{
          ...style,
          color: textColor,
          padding: "8px 18px",
          margin: "300px 0px 0px 700px",
          border: "1px solid gray",
          borderRadius: 4,
          fontWeight: "bold",
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
