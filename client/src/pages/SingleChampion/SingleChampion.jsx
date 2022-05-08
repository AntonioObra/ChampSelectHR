import React from "react";
import { ChampionAbout } from "../../container";
import { Navbar, Footer } from "../../components";
import { images } from "../../constants";

import "./SingleChampion.scss";

const SingleChampion = () => {
  return (
    <div className="app">
      <Navbar />
      <ChampionAbout />
      <Footer image={images.ahri} red={1} />
    </div>
  );
};

export default SingleChampion;
