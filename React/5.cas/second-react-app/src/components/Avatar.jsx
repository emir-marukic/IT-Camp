import "./avatar.css";

const Avatar = (props) => {
  const { name } = props;
  //   props.name
  return (
    <div className="box">
      <div className="card">
        <p className="dimension">80 x 80</p>
        <div className="box-text">
          <p className="name">{name}</p>
          <p className="proffesion">UI Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
