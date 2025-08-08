import { useState, useEffect } from "react";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const fetchProducts = async () => {
        try {
          const response = await fetch("https://remotegurubackend.onrender.com/api/");
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
        <h2 className="text-center my-4">All Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 m-3">
                <div className="card">
                  <img
                    src={`${product.image}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <a
                      href={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
