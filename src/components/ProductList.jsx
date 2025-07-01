// Example: src/components/ProductList.js

import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/products/")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  return (
    <div>
      <section className="bg-white p-4">
        <h2 className="mb-4 text-dark">Products and Services</h2>
        <div className="container-fluid row d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="card col-md-6 col-12 text-light border-0">
            <img
              src={
                "./src/assets/3D security verification icon isolated on transparent background (1).jpg"
              }
              className="card-img-top"
            />
            <div className="card-body bg-dark ">
              <h5 className="card-title">Products</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-6 col-12 text-light border-0">
            <img
              src={
                "remote-guru-app/src/assets/3D security verification icon isolated on transparent background (1).jpg"
              }
              className="card-img-top"
            />
            <div className="card-body bg-dark ">
              <h5 className="card-title">Services</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
