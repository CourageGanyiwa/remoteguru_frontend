// Example: src/components/ProductList.js

import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  console.log(products);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(({ id, image, price, name }) => (
          <li key={id}>
            <img src={`http://127.0.0.1:8000/${image}`} alt="image" />
            {name} - ${price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
