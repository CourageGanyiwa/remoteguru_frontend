export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-light">&copy;2025 Remote Guru, Inc</p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          aria-label="RG Logo"
        >
          {/* <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <img src="../assets/remotegurulogo_0x90.jpg" alt="" />
            </svg> */}
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
