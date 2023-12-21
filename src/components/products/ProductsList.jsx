import ProductCard from "./ProductCard";
import "./products.scss";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
