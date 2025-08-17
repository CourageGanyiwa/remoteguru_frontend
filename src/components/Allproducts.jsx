import { useState, useEffect } from "react";
import pic6 from "../assets/3D security verification icon isolated on transparent background (1).jpg";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            "https://remotegurubackend.onrender.com/api/products/"
          );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    };

    fetchData();
  }, []);

  // for (let i = 0; i < products.length; i++) {
  //   console.log(products[i].image);
  // }

  return (
    <>
      <div>
        <h2 className="text-center my-4">More Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card m-3">
                <div
                  className="product-image"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
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
                <div className="bg-light text-dark product-info">
                  <div className="product-category">Small Safe</div>
                  <div className="product-name">{product.name}</div>
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
                      <span className="price">{product.price}</span>
                      <span
                        className="original-price"
                        style={{ display: "none" }}
                      >
                        R2700
                      </span>
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}
