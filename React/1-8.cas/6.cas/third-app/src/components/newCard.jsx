import "./newCard.css";
const NewCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="img" />
      <div className="text-holder">
        <p className="num">{props.num}</p>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default NewCard;
