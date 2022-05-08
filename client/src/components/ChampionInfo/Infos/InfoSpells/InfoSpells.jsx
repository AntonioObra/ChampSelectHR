import React from "react";

const InfoSpells = ({ champion }) => {
  // console.log(champion);
  return (
    <div className="spells">
      {/* <h4 className="head-text">Spells</h4> */}

      <div className="spells-pas">
        <div className="InfoSpells-passive">
          <div className="InfoSpells-passive-item">
            <div className="InfoSpells-passive-img app__flex">
              <img src={champion.passive.icon} alt={champion.passive.name} />
            </div>
            <div className="InfoSpells-passive-content">
              <p className="bold-text">{champion.passive.name}</p>
              <p className="subt">{champion.name}'s passive</p>
              <p
                className="passive-des"
                dangerouslySetInnerHTML={{
                  __html: champion.passive.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      <div className="InfoSpells-spells">
        {champion.spells.map((spell, index) => (
          <div key={index} className="InfoSpells-spell">
            <div className="InfoSpells-spell-item">
              <div className="InfoSpells-spell-img app__flex">
                <img src={spell.icon} alt={spell.name} />
              </div>
              <div className="InfoSpells-spell-content">
                <p className="bold-text">{spell.name}</p>
                <p className="subt">
                  {champion.name}'s {spell.spellName} Ability
                </p>
                <div className="InfoSpells-flex">
                  <p>
                    Range: <span>{spell.range}</span>
                  </p>
                  <p>
                    Cost: <span>{spell.cost}</span>
                  </p>
                  <p>
                    Cooldown: <span>{spell.cooldown}</span>
                  </p>
                </div>
                <p
                  className="spell-des"
                  dangerouslySetInnerHTML={{
                    __html: spell.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSpells;
