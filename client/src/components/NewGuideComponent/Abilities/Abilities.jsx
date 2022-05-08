import React, { useEffect, useState } from "react";

import "./Abilities.scss";

const Abilities = ({ pickedChampion, abilitySets, setAbilitySets }) => {
  // console.log(pickedChampion);
  const [abilitiesQ, setAbilitieQ] = useState([
    { lvl: 1, active: false },
    { lvl: 2, active: false },
    { lvl: 3, active: false },
    { lvl: 4, active: false },
    { lvl: 5, active: false },
    { lvl: 6, active: false },
    { lvl: 7, active: false },
    { lvl: 8, active: false },
    { lvl: 9, active: false },
    { lvl: 10, active: false },
    { lvl: 11, active: false },
    { lvl: 12, active: false },
    { lvl: 13, active: false },
    { lvl: 14, active: false },
    { lvl: 15, active: false },
    { lvl: 16, active: false },
    { lvl: 17, active: false },
    { lvl: 18, active: false },
  ]);
  const [abilitiesW, setAbilitieW] = useState([
    { lvl: 1, active: false },
    { lvl: 2, active: false },
    { lvl: 3, active: false },
    { lvl: 4, active: false },
    { lvl: 5, active: false },
    { lvl: 6, active: false },
    { lvl: 7, active: false },
    { lvl: 8, active: false },
    { lvl: 9, active: false },
    { lvl: 10, active: false },
    { lvl: 11, active: false },
    { lvl: 12, active: false },
    { lvl: 13, active: false },
    { lvl: 14, active: false },
    { lvl: 15, active: false },
    { lvl: 16, active: false },
    { lvl: 17, active: false },
    { lvl: 18, active: false },
  ]);

  const [abilitiesE, setAbilitieE] = useState([
    { lvl: 1, active: false },
    { lvl: 2, active: false },
    { lvl: 3, active: false },
    { lvl: 4, active: false },
    { lvl: 5, active: false },
    { lvl: 6, active: false },
    { lvl: 7, active: false },
    { lvl: 8, active: false },
    { lvl: 9, active: false },
    { lvl: 10, active: false },
    { lvl: 11, active: false },
    { lvl: 12, active: false },
    { lvl: 13, active: false },
    { lvl: 14, active: false },
    { lvl: 15, active: false },
    { lvl: 16, active: false },
    { lvl: 17, active: false },
    { lvl: 18, active: false },
  ]);

  const [abilitiesR, setAbilitieR] = useState([
    { lvl: 1, active: false },
    { lvl: 2, active: false },
    { lvl: 3, active: false },
    { lvl: 4, active: false },
    { lvl: 5, active: false },
    { lvl: 6, active: false },
    { lvl: 7, active: false },
    { lvl: 8, active: false },
    { lvl: 9, active: false },
    { lvl: 10, active: false },
    { lvl: 11, active: false },
    { lvl: 12, active: false },
    { lvl: 13, active: false },
    { lvl: 14, active: false },
    { lvl: 15, active: false },
    { lvl: 16, active: false },
    { lvl: 17, active: false },
    { lvl: 18, active: false },
  ]);

  // console.log(abilitiesQ);
  // console.log(abilitiesW);
  // console.log(abilitiesE);
  // console.log(abilitiesR);
  // console.log(abilitySets);

  useEffect(() => {
    let numberActiveQ = abilitiesQ.filter((ability) => ability.active == true);
    let numberActiveW = abilitiesW.filter((ability) => ability.active == true);
    let numberActiveE = abilitiesE.filter((ability) => ability.active == true);
    let numberActiveR = abilitiesR.filter((ability) => ability.active == true);
    // console.log(numberActive);

    if (
      numberActiveQ.length == 5 &&
      numberActiveW.length == 5 &&
      numberActiveE.length == 5 &&
      numberActiveR.length == 3
    ) {
      setAbilitySets([abilitiesQ, abilitiesW, abilitiesE, abilitiesR]);
    }
  }, [abilitiesQ, abilitiesW, abilitiesE, abilitiesR]);

  const handleClickQ = (ability) => {
    let numberActive = abilitiesQ.filter((ability) => ability.active == true);

    if (numberActive.includes(ability)) {
      let newArrayQ = abilitiesQ.map((ab) => {
        if (ab === ability) {
          ab.active = false;
          return ab;
        }
        return ab;
      });

      setAbilitieQ([...newArrayQ]);
    } else if (numberActive.length < 5) {
      if (abilitiesW[ability.lvl - 1].active) {
        let newArrayW = abilitiesW.map((ab) => {
          if (ab === abilitiesW[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);

        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);
      } else if (abilitiesE[ability.lvl - 1].active) {
        let newArrayE = abilitiesE.map((ab) => {
          if (ab === abilitiesE[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);

        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);
      } else if (abilitiesR[ability.lvl - 1].active) {
        let newArrayR = abilitiesR.map((ab) => {
          if (ab === abilitiesR[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);

        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);
      } else {
        let newArray = abilitiesQ.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });

        setAbilitieQ([...newArray]);
      }
    }
  };

  const handleClickW = (ability) => {
    let numberActive = abilitiesW.filter((ability) => ability.active == true);

    if (numberActive.includes(ability)) {
      let newArrayW = abilitiesW.map((ab) => {
        if (ab === ability) {
          ab.active = false;
          return ab;
        }
        return ab;
      });

      setAbilitieW([...newArrayW]);
    } else if (numberActive.length < 5) {
      if (abilitiesQ[ability.lvl - 1].active) {
        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === abilitiesQ[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);

        let newArrayW = abilitiesW.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);
      } else if (abilitiesE[ability.lvl - 1].active) {
        let newArrayE = abilitiesE.map((ab) => {
          if (ab === abilitiesE[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);

        let newArrayW = abilitiesW.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);
      } else if (abilitiesR[ability.lvl - 1].active) {
        let newArrayR = abilitiesR.map((ab) => {
          if (ab === abilitiesR[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);

        let newArrayW = abilitiesW.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);
      } else {
        let newArray = abilitiesW.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });

        setAbilitieW([...newArray]);
      }
    }
  };

  const handleClickE = (ability) => {
    let numberActive = abilitiesE.filter((ability) => ability.active == true);

    if (numberActive.includes(ability)) {
      let newArrayE = abilitiesE.map((ab) => {
        if (ab === ability) {
          ab.active = false;
          return ab;
        }
        return ab;
      });

      setAbilitieE([...newArrayE]);
    } else if (numberActive.length < 5) {
      if (abilitiesQ[ability.lvl - 1].active) {
        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === abilitiesQ[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);

        let newArrayE = abilitiesE.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);
      } else if (abilitiesW[ability.lvl - 1].active) {
        let newArrayW = abilitiesW.map((ab) => {
          if (ab === abilitiesW[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);

        let newArrayE = abilitiesE.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);
      } else if (abilitiesR[ability.lvl - 1].active) {
        let newArrayR = abilitiesR.map((ab) => {
          if (ab === abilitiesR[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);

        let newArrayE = abilitiesE.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);
      } else {
        let newArray = abilitiesE.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });

        setAbilitieE([...newArray]);
      }
    }
  };

  const handleClickR = (ability) => {
    let numberActive = abilitiesR.filter((ability) => ability.active == true);

    if (numberActive.includes(ability)) {
      let newArrayR = abilitiesR.map((ab) => {
        if (ab === ability) {
          ab.active = false;
          return ab;
        }
        return ab;
      });

      setAbilitieR([...newArrayR]);
    } else if (numberActive.length < 3) {
      if (abilitiesQ[ability.lvl - 1].active) {
        let newArrayQ = abilitiesQ.map((ab) => {
          if (ab === abilitiesQ[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieQ([...newArrayQ]);

        let newArrayR = abilitiesR.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);
      } else if (abilitiesE[ability.lvl - 1].active) {
        let newArrayE = abilitiesE.map((ab) => {
          if (ab === abilitiesE[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieE([...newArrayE]);

        let newArrayR = abilitiesR.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);
      } else if (abilitiesW[ability.lvl - 1].active) {
        let newArrayW = abilitiesW.map((ab) => {
          if (ab === abilitiesW[ability.lvl - 1]) {
            ab.active = false;
            return ab;
          }
          return ab;
        });
        setAbilitieW([...newArrayW]);

        let newArrayR = abilitiesR.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });
        setAbilitieR([...newArrayR]);
      } else {
        let newArray = abilitiesR.map((ab) => {
          if (ab === ability) {
            ab.active = true;
            return ab;
          }
          return ab;
        });

        setAbilitieR([...newArray]);
      }
    }
  };
  return (
    <div className="Abilities">
      <div className="Spellls">
        {/* <div className="Passive">
          <img src={pickedChampion.passive.icon} alt="" />
          <div>
            <p className="bold-text">{pickedChampion.passive.name} </p>
            <p className="bold-text">{pickedChampion.name}'s Passive Ability</p>
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
                    {abilitiesQ.map((ability, index) => (
                      <div
                        className={`Spell-ability  ${
                          ability.active ? "aktiv" : ""
                        }`}
                        key={index}
                        onClick={() => handleClickQ(ability)}
                      >
                        <p>{ability.lvl} </p>
                      </div>
                    ))}
                  </>
                )}

                {spell.spellName === "W" && (
                  <>
                    {abilitiesW.map((ability, index) => (
                      <div
                        className={`Spell-ability  ${
                          ability.active ? "aktiv" : ""
                        }`}
                        key={index}
                        onClick={() => handleClickW(ability)}
                      >
                        <p>{ability.lvl} </p>
                      </div>
                    ))}
                  </>
                )}

                {spell.spellName === "E" && (
                  <>
                    {abilitiesE.map((ability, index) => (
                      <div
                        className={`Spell-ability  ${
                          ability.active ? "aktiv" : ""
                        }`}
                        key={index}
                        onClick={() => handleClickE(ability)}
                      >
                        <p>{ability.lvl} </p>
                      </div>
                    ))}
                  </>
                )}

                {spell.spellName === "R" && (
                  <>
                    {abilitiesR.map((ability, index) => (
                      <div
                        className={`Spell-ability ${
                          ability.active ? "aktiv" : ""
                        } `}
                        key={index}
                        onClick={() => handleClickR(ability)}
                      >
                        <p>{ability.lvl} </p>
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
  );
};

export default Abilities;
