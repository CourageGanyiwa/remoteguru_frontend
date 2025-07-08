import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import hero from "./assets/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.webp";
import mainHero from "./assets/store_front.jpeg";
import pic3 from "./assets/eel.jpg";
import secondHero from "./assets/colors.jpg";

// import pic2 from "./assets/3D security verification icon isolated on transparent background (1).jpg";
// import "./assets/css/product-grid.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="hero-image position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${mainHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          marginTop: "55px",
          marginBottom: 0,
          padding: 0,
          borderBottom: "1px solid red",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="card bg-dark opacity-75 w-50 d-none d-md-block">
            <h5 className="card-header text-dark bg-warning bg-gradient">
              Featured
            </h5>
            <div className="card-body text-white">
              <h5 className="card-title text-info">
                Ready To Secure Your Home ?
              </h5>
              <p className="card-text">
                Welcome to the home of Remote Guru. We have been trading for
                over 20 years and have a wealth of experience to assist you on
                selecting the best security products for your home.
              </p>
              <a href="#" className="btn btn-info text-dark">
                <i className="bi bi-arrow-right-circle-fill"></i> Explore Now
              </a>
            </div>
          </div>
          <button className="btn btn-lg btn-light d-block d-md-none text-dark fw-bold">
            Read More
          </button>
        </div>
      </div>
      <section
        className=" row d-flex justify-content-center align-items-center mt-2 p-4"
        style={{
          backgroundImage: `url(${secondHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="col-md-7 d-flex justify-content-center align-items-center p-3">
          <img
            src={pic3}
            alt=""
            className="img-fluid w-100 h-100 rounded"
            style={{
              width: "100vh",
              height: "auto",
              border: "3px solid white",
            }}
          />
        </div>
        <div className="container-fluid col-md-5 bg-light p-1 d-flex flex-column justify-content-center align-items-center rounded">
          <p className="text-dark text-center">
            <span className="text-danger text-uppercase fs-lg fw-bold fs-5">
              Remote Guru
            </span>{" "}
            is your go-to platform for finding home security products and
            services. Whether you're looking for the latest security cameras,
            smart locks, or professional installation services, we've got you
            covered.
          </p>
          <button className="btn btn-warning text-dark bg-gradient rounded">
            Read More
          </button>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default App;
