import React from "react";
import { Navbar, Footer } from "../../components";
import { UserPage } from "../../container";
import { images } from "../../constants";

const User = () => {
  return (
    <div className="app">
      <Navbar />
      <UserPage />

      <Footer image={images.khazix} red={1} />
    </div>
  );
};

export default User;
