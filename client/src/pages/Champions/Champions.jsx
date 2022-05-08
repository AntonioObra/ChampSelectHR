import React from "react";
import { PageChampions } from "../../container";
import { Navbar, Footer } from "../../components";
import { images } from "../../constants";
const Champions = () => {
  return (
    <div className="app">
      <Navbar />
      <PageChampions />
      <Footer image={images.vayne} red={2} />
    </div>
  );
};

export default Champions;
