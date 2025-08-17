import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import hero from "./assets/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.webp";
import mainHero from "./assets/store_front.jpeg";
import pic3 from "./assets/eel.jpg";
import secondHero from "./assets/colors.jpg";
import thirdHero from "./assets/remote-guru-images-assets/secondHero.jpg";

// import pic2 from "./assets/3D security verification icon isolated on transparent background (1).jpg";
// import "./assets/css/product-grid.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="hero-image position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${thirdHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          marginTop: "55px",
          marginBottom: 0,
          padding: 0,
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
          opacity: 0.8,
          width: "100%",
        }}
      >
        {/* <div className="col-md-7 d-flex justify-content-center align-items-center p-3">
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
        </div> */}
        {/* <div className="container-fluid col-md-5 bg-light p-1 d-flex flex-column justify-content-center align-items-center rounded">
          <p className="text-dark text-center">
            <span className="text-danger text-uppercase fs-lg fw-bold fs-5">
              Remote Guru
            </span>
            is your go-to platform for finding home security products and
            services. Whether you're looking for the latest security cameras,
            smart locks, or professional installation services, we've got you
            covered.
          </p>
          <button className="btn btn-warning text-dark bg-gradient rounded">
            Read More
          </button>
        </div> */}
        <div className="container col-xxl-8 px-4 py-5">
          {" "}
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {" "}
              <img
                src={pic3}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />{" "}
            </div>
            <div className="col-lg-6">
              {" "}
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Responsive left-aligned hero with image
              </h1>{" "}
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {" "}
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <main>
          <h1 className="visually-hidden">Heroes examples</h1>
          <div className="b-example-divider"></div>
          <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">
              Centered screenshot
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 text-body-secondary fw-semibold">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                >
                  Primary button
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg px-4 text-dark"
                >
                  Secondary
                </button>
              </div>
            </div>
            <div
              className="overflow-hidden"
              style={{ maxHeight: "30vh" }}
            ></div>
          </div>
          <div className="b-example-divider"></div>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5"></div>
          </div>
          <div className="b-example-divider"></div>
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                  Border hero with cropped image and shadows
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    Default
                  </button>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img
                  className="rounded-lg-3"
                  src="bootstrap-docs.png"
                  alt=""
                  width="720"
                />
              </div>
            </div>
          </div>
          <div className="b-example-divider"></div>
          <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
              <h1 className="display-5 fw-bold text-white">Dark color hero</h1>
              <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                  >
                    Custom button
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="b-example-divider mb-0"></div>
        </main>
        <div></div>
      </section>
    </>
  );
}

export default App;
