import "./box.css";

const Card = ({ number, text }) => {
  return (
    <div className="box">
      <p className="num">{number}</p>
      <p className="text">{text}</p>
    </div>
  );
};
export default Card;
