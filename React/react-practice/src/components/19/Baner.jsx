const Baner = (props) => {
  return (
    <div className="img" style={{ display: "flex", justifyContent: "center" }}>
      <img src={props.img} alt="" style={{ width: "50%" }} />
    </div>
  );
};

export default Baner;
