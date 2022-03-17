import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap"
  rel="stylesheet"
></link>;
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product/:id?"} element={<Product />} />
        <Route path={"/cart/:id?"} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
