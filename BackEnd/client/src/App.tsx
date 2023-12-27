import { useEffect, useState } from "react";
import { Product } from "./product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localHost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: "description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  return (
    <div className="app">
      <h1>TusShop</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name} - {products.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
}

export default App;
