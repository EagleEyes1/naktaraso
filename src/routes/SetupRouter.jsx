import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CataloguePage from "../pages/CataloguePage";
import ExpoPage from "../pages/ExpoPage";
import AwardPage from "../pages/AwardPage";
import ContactPage from "../pages/ContactPage";
import PartnerPage from "../pages/PartnerPage";

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/expo" element={<ExpoPage />} />
        <Route path="/awards" element={<AwardPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/partner" element={<PartnerPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
