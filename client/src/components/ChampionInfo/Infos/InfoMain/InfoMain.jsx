import React, { useState, useEffect } from "react";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";

const InfoMain = ({ champion }) => {
  return (
    <div className="InfoMain">
      <div className="InfoMain-content app__flex">
        <h4 className="head-text">{champion.title}</h4>
        {champion.tags && <p className="bold-text">{champion.tags[1]}</p>}
        <div className="InfoSpells-flex">
          <p>
            Difficulty - <span>{champion.difficulty}</span>
          </p>

          <p>
            HP at Lvl 1 - <span>{champion.hp}</span>
          </p>
          <p>
            Mana at Lvl 1 - <span>{champion.mp}</span>
          </p>
        </div>
        <p className="achamp-desc">{champion.description}</p>
      </div>
    </div>
  );
};

export default InfoMain;
