const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="price">
        <h3>{product.price}</h3>
      </div>
      <img src={product.image} alt={product.title} />
      <div className="card__over">
        <h2>{product.title} </h2>
      </div>
    </div>
  );
};

export default ProductCard;
