import React from "react";
import GuideInfoItem from "./GuideInfoItem/GuideInfoItem";
import "./GuideInfoItems.scss";
import GuideInfoItemSet from "./GuideInfoItemSet/GuideInfoItemSet";

const GuideInfoItems = ({ itemSets }) => {
  return (
    <div className="GuideInfoItems">
      <h2>Items</h2>
      <div className="GuideInfoItems-flex">
        {itemSets.map((itemSet, index) => (
          <GuideInfoItemSet key={index} itemSet={itemSet} />
        ))}
      </div>
    </div>
  );
};

export default GuideInfoItems;
