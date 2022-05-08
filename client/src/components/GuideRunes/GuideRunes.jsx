import React, { useEffect, useState } from "react";
import RuneSet from "./RuneSet/RuneSet";
import SecondRuneSet from "./SecondRuneSet/SecondRuneSet";
import "./GuideRunes.scss";

const GuideRunes = ({ runeSets }) => {
  const [activeRuneSet, setActiveRuneSet] = useState(0);

  // console.log(runeSets);

  return (
    <div className="GuideRunes">
      {/* <h2 className="head-text">RUNES</h2> */}

      <div className="runeSet-nav">
        <p id="guide-p">
          RUNES: <span>{runeSets[activeRuneSet].title}</span>
        </p>
        <div className="runeSet-nav-sets">
          {runeSets.map((runeSet, index) => (
            <div
              className={`runeSet-n ${
                activeRuneSet == index ? "activeRuneSet-n" : ""
              }`}
              key={index}
              onClick={() => setActiveRuneSet(index)}
            >
              <p>{index}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="GuideRunes-runes">
        <RuneSet runeSet={runeSets[activeRuneSet].runes[0]} />
        <SecondRuneSet
          secondRuneSet={runeSets[activeRuneSet].runes[1]}
          shardSet={runeSets[activeRuneSet].shards}
        />
      </div>
    </div>
  );
};

export default GuideRunes;
