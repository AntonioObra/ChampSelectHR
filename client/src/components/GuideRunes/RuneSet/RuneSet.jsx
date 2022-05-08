import React, { useMemo } from "react";

import "./RuneSet.scss";

const RuneSet = ({ runeSet }) => {
  // console.log(runeSet);

  const memoizedResult = useMemo(
    () => (
      <div className="RuneSet">
        <div className="RuneSet-item znj">
          <img src={runeSet.icon} alt={runeSet.name} />
          <p>{runeSet.name}</p>
        </div>

        <div className="RuneSet-body">
          {runeSet.runeSet.map((rune, index) => (
            <div className="RuneSet-item" key={index}>
              <img src={rune.icon} alt={rune.name} />
              <p className="p-text">{rune.name}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    [runeSet]
  );
  return memoizedResult;
};

export default RuneSet;
