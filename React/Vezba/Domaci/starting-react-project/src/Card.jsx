const Card = (props) => {
  return (
    <>
      <img src={props.src} alt="TODO: TITLE" />
      <h2>{props.header}</h2>
      <p>{props.paragraph}</p>
    </>
  );
};

export default Card;
