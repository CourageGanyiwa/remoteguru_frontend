import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductList from "./components/ProductList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Popover, OverlayTrigger, Button } from "react-bootstrap";
//import "";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import pic2 from "./assets/3D security verification icon isolated on transparent background (1).jpg";
import "./assets/css/product-grid.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <ProductList />
    <Footer />
  </StrictMode>
);
