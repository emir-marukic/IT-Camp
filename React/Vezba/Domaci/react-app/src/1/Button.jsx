const Button = ({ color, backgroundcolor }) => {
  function bckGroundColor() {
    if (backgroundcolor === "levant") {
      const color = "red";
      return { backgroundcolor: color };
    }
  }

  return (
    <div>
      <button
        style={{
          padding: "10px 40px",
          margin: "400px 0px 0px 900px",
          backgroundColor: "#fff",
          border: "1px solid black",
        }}
        backgroundcolor={bckGroundColor()}
        color={bckGroundColor()}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
