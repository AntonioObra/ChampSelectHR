import React from "react";
import { PageGuides } from "../../container";
import { Navbar, Footer } from "../../components";
import { images } from "../../constants";

const Guides = () => {
  return (
    <div className="app">
      <Navbar />
      <PageGuides />
      <Footer image={images.lilia} red={1} />
    </div>
  );
};

export default Guides;
