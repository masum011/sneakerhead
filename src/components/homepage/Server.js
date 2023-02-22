import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./ProductCard";
import CardPage from "./CardPage";
import Navbar from "./Navbar";
import "./server.scss";
function Server() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Server;
