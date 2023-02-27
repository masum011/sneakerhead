import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./ProductCard";
import CardPage from "./CardPage";
import Navbar from "./Navbar";
import "./server.scss";
import Profile from "../loginComponents/Profile";
import Help from "../loginComponents/Help";
import Sell from "../loginComponents/Sell";
function Server() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sell" element={<Sell />} />
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Server;
