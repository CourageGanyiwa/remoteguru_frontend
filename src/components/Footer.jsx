export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#45526e" }}
      >
        <div className="container p-4 pb-0 d-flex justify-content-space-between align-items-center flex-column">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Remote Guru
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products & Services
                </h6>
                <p>
                  <a className="text-white">cctv installation</a>
                </p>
                <p>
                  <a className="text-white">safe</a>
                </p>
                <p>
                  <a className="text-white">security gates</a>
                </p>
                <p>
                  <a className="text-white">electronics</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i>Cobble Walk,Sonstraal
                  Heights, Western Cape, SA
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@remoteguru.co.za
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>
          {/* <hr className="my-3"> */}
          <section className="p-0 pt-0 w-100 d-flex justify-content-center align-content-center">
            <div className="row d-flex align-items-center justify-content-between w-100 m-0">
              <div className="col-md-6 col-lg-7 text-center text-md-start">
                <div className="p-0">
                  © 2025 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">
                    Remote Guru Co.
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
