import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Analytics from "./pages/Analytics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto-news" element={<News />} />
      <Route path="/crypto-analytics" element={<Analytics />} />
    </Routes>
  );
};

export default AppRoutes;
