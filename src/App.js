import Header from "./components/header/Header";
import Products from "./components/products/ProductsList";
import { products, categories } from "./helper/data";
import "./app.scss"

//? "export default" ile import ettiğimiz şeylerin isimleri oradakiyle aynı olmak zorunda değil. İmport sırasında kendi istediğimiz ismi de verebiliriz.

//? Fakat "named export" ile export edilmiş şeyleri kendi ismiyle yazmak gerekiyor.

function App() {
  // console.log(products);
  return (
    <div>
      <Header categories={categories} text="Products List" />
      <Products products={products} />
    </div>
  );
}

export default App;
