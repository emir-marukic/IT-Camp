import "./card.css";

const Card = ({ img, header, paragraph, link, linkTxt, category }) => {
  return (
    <div className="card">
      {img && (
        <div className="img">
          <img src={img} alt="" />
        </div>
      )}

      <div className="text">
        <div>
          <p className="category">{category}</p>
          <h1>{header}</h1>
        </div>
        <p>{paragraph}</p>
        <a href={link}>{linkTxt}</a>
      </div>
    </div>
  );
};

export default Card;
