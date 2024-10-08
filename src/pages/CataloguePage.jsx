import React from "react";
import Navbar from "../components/Navbar";
import Catalogue from "../components/Catalogue";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

const CataloguePage = () => {
  return (
    <>
      <Navbar />
      <Catalogue />
      <Aside />
      <Footer />
    </>
  );
};

export default CataloguePage;
