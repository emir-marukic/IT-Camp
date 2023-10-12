const Card = (props) => {
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={props.src} alt="TODO: TITLE" />
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
      </li>
    </ul>
  );
};

export default Card;
