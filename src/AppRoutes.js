import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Analytics from "./pages/Analytics";
import Exchanges from "./pages/Exchanges";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto-news" element={<News />} />
      <Route path="/crypto-analytics" element={<Analytics />} />
      <Route path="/exchanges" element={<Exchanges />} />
    </Routes>
  );
};

export default AppRoutes;
