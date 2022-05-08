import React from "react";

const InfoLore = ({ champion }) => {
  return (
    <div>
      {" "}
      <h2 className="head-text">
        There is currently no lore for <span>{champion.name}</span>
      </h2>
    </div>
  );
};

export default InfoLore;
