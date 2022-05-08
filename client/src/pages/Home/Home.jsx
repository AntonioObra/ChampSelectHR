import React from "react";
import { Header, Blogs, Champions, Guides } from "../../container";
import { Navbar, Spojnica } from "../../components";

import { images } from "../../constants";

import "./Home.scss";

const Home = () => {
  return (
    <div className="app homepage-bg">
      <Navbar />
      <Header />
      {/* <Blogs /> */}

      <Champions />
      <Spojnica image={images.yasuo} red={1} />
      <Guides />
      <Spojnica image={images.riven} red={2} />
    </div>
  );
};

export default Home;
