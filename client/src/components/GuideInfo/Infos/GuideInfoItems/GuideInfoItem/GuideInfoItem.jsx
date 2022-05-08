import React from "react";

import "./GuideInfoItem.scss";

const GuideInfoItem = ({ item }) => {
  return (
    <div className="GuideInfoItem app__flex">
      <h2>{item.name}</h2>
      <div className="GuideInfoItem-content">
        <div className="GuideInfoItem-image app__flex">
          <img src={item.icon} alt={item.name} />
        </div>

        <div className="GuideInfoItem-text">
          {/* <p
            className="p-text"
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          ></p> */}
          <p className="p-text">
            Price - <span>{item.basePrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideInfoItem;
