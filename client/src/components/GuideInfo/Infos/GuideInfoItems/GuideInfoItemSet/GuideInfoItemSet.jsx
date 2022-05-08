import React from "react";

import "./GuideInfoItemSet.scss";

const GuideInfoItemSet = ({ itemSet }) => {
  return (
    <div className="GuideInfoSet">
      <h2>{itemSet.title}</h2>
      <div className="GuideInfoSet-items">
        {itemSet.items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideInfoItemSet;
