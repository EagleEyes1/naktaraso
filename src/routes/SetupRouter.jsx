import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CataloguePage from "../pages/CataloguePage";

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
