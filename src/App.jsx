import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import hero from "./assets/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.webp";
import pic1 from "./assets/3D security verification icon isolated on transparent background.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="hero-image d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          marginTop: "55px",
          padding: 0,
          borderBottom: "1px solid red",
        }}
      >
        <div className="card bg-dark w-50 d-none d-md-block">
          <h5 className="card-header text-white bg-gradient">Featured</h5>
          <div className="card-body text-white">
            <h5 className="card-title text-warning">Secure Your Home</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-danger text-dark">
              <i className="bi bi-arrow-right-circle-fill"></i> Explore Now
            </a>
          </div>
        </div>
        <button className="btn btn-lg btn-danger d-block d-md-none">
          Read More
        </button>
      </div>
      <section className="container-fluid row d-flex justify-content-center align-items-center">
        <div className="col-md-7 d-flex justify-content-center align-items-center p-5 ">
          <img
            src={pic1}
            alt=""
            className="img-fluid w-100 h-100 rounded"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          className="container-fluid col-md-5 text-white bg-dark p-5 d-flex flex-column justify-content-center align-items-center "
          style={{ borderBottom: "3px solid grey" }}
        >
          <p className=" mb-4 text-light">
            <span className="text-warning text-uppercase fs-lg fw-bold">
              Remote Guru
            </span>{" "}
            is your go-to platform for finding home security products and
            services. Whether you're looking for the latest security cameras,
            smart locks, or professional installation services, we've got you
            covered.
          </p>
          <button className="btn btn-lg btn-primary rounded">Read More</button>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default App;
