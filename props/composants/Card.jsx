import "./Card.css"; 

const Card = ({ name, description, price, image }) => {
  return (
    <div className="choco-card">
      <img src={image} alt={name} className="choco-card-img" />
      <div className="choco-card-body">
        <h3 className="choco-card-title">{name}</h3>
        <p className="choco-card-text">{description}</p>
        <p className="choco-card-price">{price} TND</p>
      </div>
    </div>
  );
};

export default Card;
