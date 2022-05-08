import React from "react";

import "./Footer.scss";

const Footer = ({ image, red }) => {
  return (
    <div className="Footer">
      {red == 1 ? (
        <>
          <div className="Footer-div">
            <h2>ChampSelectHr</h2>
            {/* <p>Place for everything about League of Legends</p> */}

            <h5>Created by 83</h5>
          </div>
          <img src={image} alt="" />
        </>
      ) : (
        <>
          <img src={image} alt="" />
          <div className="Footer-div">
            <h2>ChampSelectHr</h2>
            {/* <p>Place for everything about League of Legends</p> */}

            <h5>Created by 83</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
