import React from "react";
import "./GuideInfo.scss";
import GuideInfoItems from "./Infos/GuideInfoItems/GuideInfoItems";
import { GuideRunes } from "../../components";

const GuideInfo = ({ guide }) => {
  // console.log(guide);
  return !guide ? (
    <h1>Loading</h1>
  ) : (
    <div className="GuideInfo ">
      {/* <div className="GuideInfo-image">
        {/* <div className="star">
          <StarBorderIcon sx={{ color: "white", fontSize: "30px" }} />
        </div> */}

      {/* <div className="GuideInfo-text">
          <h2 className="subhead-text">{guide.name}</h2>
          <h2 className="subhead-text">
            created by <span>{guide.user.userName}</span>{" "}
          </h2>
        </div> 
      </div>

     */}

      <div className="GuideInfo-container">
        <GuideInfoItems itemSets={guide.itemSets} />
      </div>
    </div>
  );
};

export default GuideInfo;
