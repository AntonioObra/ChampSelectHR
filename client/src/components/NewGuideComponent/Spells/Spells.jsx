import React, { useState, useEffect } from "react";
import { spells } from "../../../constants/spells";

import "./Spells.scss";

const Spells = ({ setSpellsSets, spellsSets }) => {
  const [activeSpells, setActiveSpells] = useState([]);
  const [title, setTitle] = useState("");
  const [spellSet, setSpellSet] = useState({});

  //handler for picking spells
  const handleClick = (spell) => {
    //checks if the array with picked spells is less than 2 and that the chosen one hasnt been picked already
    if (activeSpells.length < 2 && !activeSpells.includes(spell)) {
      setActiveSpells([...activeSpells, spell]);
    }
    //if the activeSpells includes picked spells it removes it from the activeSpells array
    else if (activeSpells.includes(spell)) {
      let newActiveSpells = activeSpells.filter(
        (activeSpell) => activeSpell !== spell
      );
      setActiveSpells([...newActiveSpells]);
    } else {
      let newActiveSpells = activeSpells.filter(
        (spell) => spell !== activeSpells[0]
      );
      setActiveSpells([...newActiveSpells, spell]);
    }
  };

  const handleCreateSet = () => {
    if (title.length > 0 && activeSpells.length == 2 && spellsSets.length < 4) {
      setSpellSet({ title: title, spells: [...activeSpells] });
      setSpellsSets([
        ...spellsSets,
        { title: title, spells: [...activeSpells] },
      ]);
      setActiveSpells([]);
      setTitle("");
    }
  };

  const handleTitleChange = (e) => {
    let t = e.target.value;
    setTitle(t);
  };

  const handleDeleteSpellSet = (spell) => {
    let newSpellsSets = spellsSets.filter((s) => s !== spell);
    setSpellsSets([...newSpellsSets]);
  };

  return (
    <>
      <div className="Spells">
        {/* <label className="head-text-title">Spells *</label> */}
        <div className="Spells-set">
          <input
            name="setTitle"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />

          <button className="btn" type="button" onClick={handleCreateSet}>
            ADD
          </button>
        </div>
        <div className="Spell-container">
          {spells.map((spell, index) => (
            <div
              className={`Spell ${
                activeSpells.includes(spell) ? "SpellActive" : ""
              }`}
              key={index}
              onClick={() => handleClick(spell)}
            >
              <img src={spell.spellIcon} alt={spell.spellName} />
            </div>
          ))}
        </div>
      </div>

      {spellsSets &&
        spellsSets.map((spell, index) => (
          <div className="Spell-content" key={index}>
            <div className="Spell-content-p">
              <p className="bold-text">{spell.title}</p>
            </div>

            <div className="Spell-content-Spell">
              {spell.spells.map((s, index) => (
                <div className="Spell Spell-content-active" key={index}>
                  <img src={s.spellIcon} alt="" />
                </div>
              ))}
            </div>

            <div className="Spell-content-btn">
              <button type="button" onClick={() => handleDeleteSpellSet(spell)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Spells;
