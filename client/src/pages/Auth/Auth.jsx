import React from "react";
import { Authentication } from "../../container";
import { Navbar } from "../../components";

const Auth = () => {
  return (
    <div className="app">
      <Navbar />
      <Authentication />
    </div>
  );
};

export default Auth;
