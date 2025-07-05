// Example: src/components/ProductList.js

import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import pic1 from "../assets/3D security verification icon isolated on transparent background.jpg";
import pic2 from "../assets/3D security verification icon isolated on transparent background (1).jpg";
import "../assets/css/product-grid.css";

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
      <div className="filter-options">
        <div className="filter-option active">All</div>
        <div className="filter-option">Electronics</div>
        <div className="filter-option">Installations</div>
        <div className="filter-option">Home Security</div>
        <div className="filter-option">Key Cutting</div>
      </div>

      <div className="product-grid">
        {/* product 1 */}
        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-label">New</div>
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Furniture</div>
            <div className="product-name">Oslo Lounge Chair</div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
              </div>
              <div className="review-count">42 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">R349</span>
                <span className="original-price">R429</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Oslo Lounge Chair"
                data-price="349"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>

        {/* Product 2 */}

        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Electronics</div>
            <div className="product-name">Scandic Pendant Light</div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">☆</div>
              </div>
              <div className="review-count">28 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">R179</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Scandic Pendant Light"
                data-price="179"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>

        {/* Product 3  */}
        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-label">Gadget</div>
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Remote</div>
            <div className="product-name">Custom Electric Gate Remote</div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
              </div>
              <div className="review-count">57 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">R89</span>
                <span className="original-price">R119</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Minimalist Vase Set"
                data-price="89"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>

        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Remote</div>
            <div className="product-name">
              Remote Control Device
            </div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">☆</div>
              </div>
              <div className="review-count">34 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">R490</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Wooden Cutting Board"
                data-price="49"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>

        {/* Product 5 */}
        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-label">Sale</div>
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Furniture</div>
            <div className="product-name">Nordic Coffee Table</div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">☆</div>
              </div>
              <div className="review-count">21 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">R249</span>
                <span className="original-price">R329</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Nordic Coffee Table"
                data-price="249"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>

        {/* Product 6 */}
        <div className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="product-wishlist">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="product-info">
            <div className="product-category">Decor</div>
            <div className="product-name">Abstract Wall Art</div>
            <div className="rating">
              <div className="stars">
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
                <div className="star">★</div>
              </div>
              <div className="review-count">18 reviews</div>
            </div>
            <div className="price-row">
              <div>
                <span className="price">$129</span>
              </div>
              <button
                className="add-to-cart"
                data-product="Abstract Wall Art"
                data-price="129"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="cart-tooltip">Add to cart</div>
            </div>
          </div>
          <div className="product-quick-view">Quick view</div>
        </div>
      </div>

      <div className="cart-notification">
        <div className="notification-check">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="notification-text">Product added to your cart</div>
      </div>
    </div>
  );
}

export default ProductList;
