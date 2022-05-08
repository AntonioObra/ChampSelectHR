import React, { useState } from "react";

import "./GuideSpells.scss";

const GuideSpells = ({ spellsSets }) => {
  const [activeSpellSet, setActiveSpellSet] = useState(0);
  // console.log(spellsSets);
  return (
    <div className="GuideSpells">
      <div className="runeSet-nav">
        <p id="guide-p">SPELLS:</p>
        <div className="runeSet-nav-sets">
          {spellsSets.map((spellSet, index) => (
            <div
              className={`runeSet-n ${
                activeSpellSet == index ? "activeRuneSet-n" : ""
              }`}
              key={index}
              onClick={() => setActiveSpellSet(index)}
            >
              <p>{index}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="GuideSpells-spells">
        <h3>{spellsSets[activeSpellSet].title}</h3>
        <div className="GuideSpells-spell">
          <div className="spil">
            {spellsSets[activeSpellSet].spells.map((spell, index) => (
              <div className="spell-img" key={index}>
                <img src={spell.spellIcon} alt={spell.spellName} />
                <p>{spell.spellName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSpells;
