import React, { useMemo } from "react";

import "./GuideChamps.scss";

const GuideChamps = ({ synergieChampions, threatChampions }) => {
  const memoizedResult = useMemo(
    () => (
      <div className="GuideChamps">
        {/* <h2 className="head-text">Threats & Synergies</h2> */}

        <div className="GuideChamps-yeet">
          <div className="GuideChamps-div">
            <h2>Synergies</h2>

            <div className="GuideChamps-champs">
              {synergieChampions.map((champ, index) => (
                <div className="GuideChamps-item" key={index}>
                  <img src={champ.icon} alt={champ.name} />
                  <p>{champ.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="GuideChamps-div">
            <h2>Threats</h2>
            <div className="GuideChamps-champs">
              {threatChampions.map((champ, index) => (
                <div className="GuideChamps-item syn" key={index}>
                  <img src={champ.icon} alt={champ.name} />
                  <p>{champ.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    [synergieChampions, threatChampions]
  );
  return memoizedResult;
};

export default GuideChamps;
