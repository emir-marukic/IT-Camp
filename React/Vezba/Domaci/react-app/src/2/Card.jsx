import "./card.css";

const Card = ({ img, header, paragraph, link, linkTxt }) => {
  return (
    <div className="card">
      <div className="img">{img && <img src={img} alt="" />}</div>

      <div className="text">
        <h1>{header}</h1>
        <p>{paragraph}</p>
        <a href={link}>{linkTxt}</a>
      </div>
    </div>
  );
};

export default Card;
