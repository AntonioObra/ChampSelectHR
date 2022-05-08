import React from "react";
import { images } from "../../constants";

import "./Spojnica.scss";

const Spojnica = ({ image, red, full }) => {
  // console.log(full);
  return (
    <div className="Spojnica">
      {red == 1 ? (
        <>
          <h2></h2>
          <img src={image} alt="" />
        </>
      ) : (
        <>
          <img src={image} alt="" />
          <h2></h2>
        </>
      )}
    </div>
  );
};

export default Spojnica;
