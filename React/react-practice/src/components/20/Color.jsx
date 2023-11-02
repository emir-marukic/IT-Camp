const Color = () => {
  return (
    <>
      <p>Color</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            background: "white",
            width: "30px",
            height: "30px",
            borderRadius: "20px",
            border: "1px solid gray",
          }}
        ></button>
        <button
          style={{
            background: "black",
            width: "30px",
            height: "30px",
            borderRadius: "20px",
            border: "1px solid gray",
          }}
        ></button>
        <button
          style={{
            background: "blue",
            width: "30px",
            height: "30px",
            borderRadius: "20px",
            border: "1px solid gray",
          }}
        ></button>
      </div>
    </>
  );
};

export default Color;
