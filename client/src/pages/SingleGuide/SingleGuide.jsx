import React from "react";
import { GuideAbout } from "../../container";
import { Navbar, Footer } from "../../components";
import { images } from "../../constants";

const SingleGuide = () => {
  return (
    <div className="app">
      <Navbar />
      <GuideAbout />

      <Footer image={images.cosmicjhin} red={1} />
    </div>
  );
};

export default SingleGuide;
