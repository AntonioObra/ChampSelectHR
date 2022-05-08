import React from "react";
import { Navbar, Footer } from "../../components";
import { images } from "../../constants";
import { PageEditGuide } from "../../container";

const EditGuide = () => {
  return (
    <div className="app">
      <Navbar />
      <PageEditGuide />
      {/* <Footer image={images.lilia} red={1} /> */}
    </div>
  );
};

export default EditGuide;
