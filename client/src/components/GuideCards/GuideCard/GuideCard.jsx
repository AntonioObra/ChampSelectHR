import React from "react";

import { Link } from "react-router-dom";
import "./GuideCard.scss";

const GuideCard = ({ guide }) => {
  return (
    <Link to={`/guides/${guide._id}`} style={{ textDecoration: "none" }}>
      {/* <div className="PageGuides-item app__flex">
        <div className="PageGuides-img app__flex">
          <img src={guide.icon} alt={guide.name} />
        </div>
        <div className="PageGuides-content app__flex">
          <h4 className="bold-text">{guide.name}</h4>
          <p className="p-text">
            Guide by <span>{guide.user.userName}</span>{" "}
          </p>
        </div>
      </div> */}

      <div className="PageGuides-item app__flex">
        <div className="PageGuides-img app__flex">
          <img src={guide.icon} alt={guide.name} />
        </div>
        <div className="app__guide-content app__flex">
          <h4 className="bold-text">{guide.name}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>
            {guide.title}
          </p>

          <div className="app__guide-tag app__flex">
            <img src={guide.role.link} alt="" />
            <p className="p-text">{guide.role.name}</p>
          </div>

          <p className="p-text">
            Guide by <span>{guide.user.userName}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
