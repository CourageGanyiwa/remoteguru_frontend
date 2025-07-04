// Example: src/components/ProductList.js

import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic2 from "../assets/3D security verification icon isolated on transparent background (1).jpg";

function ProductList() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h2 className="mt-4 p-4 text-light">Products and Services</h2>
      <div className="container-fluid row d-flex justify-content-evenly align-items-center flex-wrap">
        <div className="card col-md-6 col-12 text-light border-0">
          <img src={pic2} className="card-img-top w-100" />
          <div className="card-body bg-dark ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Buy Products
            </a>
          </div>
        </div>
        <div className="card col-md-6 col-12 text-light border-0">
          <img src={pic2} className="card-img-top" />
          <div className="card-body bg-dark ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Get Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
