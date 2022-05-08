import React from "react";

import "./GuideAbilities.scss";

const GuideAbilities = ({ abilities, pickedChampion }) => {
  //   console.log(champion);
  return (
    <div className="GuideAbilities">
      <h2>Abilities</h2>
      <div className="Abilities">
        <div className="Spellls">
          {/* <div className="Passive">
            <img src={pickedChampion.passive.icon} alt="" />
            <div>
              <p className="bold-text">{pickedChampion.passive.name} </p>
              <p className="bold-text">
                {pickedChampion.name}'s Passive Ability
              </p>
            </div>
          </div> */}
          {pickedChampion.spells.map((spell, index) => (
            <div className="Spelll" key={index}>
              <img src={spell.icon} alt="" />

              <div className="Spell-abilities">
                <p className="bold-text">{spell.name}</p>
                <div className="spell-contentt">
                  {spell.spellName === "Q" && (
                    <>
                      {abilities[0].map((ability, index) => (
                        <div
                          className={`Spell-ability  ${
                            ability.active ? "aktiv" : "spell-empty"
                          }`}
                          key={index}
                        >
                          <p>{ability.active && ability.lvl} </p>
                        </div>
                      ))}
                    </>
                  )}

                  {spell.spellName === "W" && (
                    <>
                      {abilities[1].map((ability, index) => (
                        <div
                          className={`Spell-ability  ${
                            ability.active ? "aktiv" : "spell-empty"
                          }`}
                          key={index}
                        >
                          <p>{ability.active && ability.lvl} </p>
                        </div>
                      ))}
                    </>
                  )}

                  {spell.spellName === "E" && (
                    <>
                      {abilities[2].map((ability, index) => (
                        <div
                          className={`Spell-ability  ${
                            ability.active ? "aktiv" : "spell-empty"
                          }`}
                          key={index}
                        >
                          <p>{ability.active && ability.lvl} </p>
                        </div>
                      ))}
                    </>
                  )}

                  {spell.spellName === "R" && (
                    <>
                      {abilities[3].map((ability, index) => (
                        <div
                          className={`Spell-ability ${
                            ability.active ? "aktiv" : "spell-empty"
                          } `}
                          key={index}
                        >
                          <p>{ability.active && ability.lvl} </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideAbilities;
