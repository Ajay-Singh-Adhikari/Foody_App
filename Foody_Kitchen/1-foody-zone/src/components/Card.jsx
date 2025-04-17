
const Card = ({cardItem}) => {
  return (
      <div className="card">
        <img className="cardImage" src={cardItem.image} />
        <div className="cardItem">
          <h2 className="cardHeading">{cardItem.name}</h2>
          <p className="cardContent">
            {cardItem.description}
          </p>
          <button className="cardButton" onClick={()=>alert("Order Successfull")}>{cardItem.price}</button>
        </div>
      </div>
  );
};
export default Card;
