const Button = ({ variant, color, size, borderR }) => {
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
    white: "white",
  };
  const sizeScale = {
    xs: 1,
    sm: 1.3,
    md: 1.6,
    lg: 1.9,
    xl: 2.2,
  };
  const borderRadius = {
    xs: "0px",
    sm: "6px",
    md: "8px",
    lg: "10px",
    xl: "12px",
  };

  const borderRadiusStyle = borderRadius[borderR] || borderRadius.xs;
  const sizeStyle = sizeScale[size] || sizeScale.sm;
  const style = variantStyles[variant] || variantStyles.default;
  const textColor = colorStyles[color] || colorStyles.gray;

  return (
    <div>
      <button
        style={{
          borderRadius: borderRadiusStyle,
          transform: `scale(${sizeStyle})`,
          ...style,
          color: textColor,
          padding: "8px 18px",
          border: "1px solid gray",
          fontWeight: "bold",
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
