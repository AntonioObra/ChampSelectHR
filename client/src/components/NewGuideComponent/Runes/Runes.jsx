import React, { useState, useEffect } from "react";
import { runes } from "../../../constants/runes";
import Rune from "./Rune/Rune";
import SecondRune from "./SecondRune/SecondRune";

import "./Runes.scss";

const Runes = ({ runeSets, setRuneSets }) => {
  const [title, setTitle] = useState("");
  const [runeSetDisplay, setRuneSetDisplay] = useState("prazno");
  const [secondRuneSetDisplay, setSecondRuneSetDisplay] = useState("prazno");
  const [runeSet, setRuneSet] = useState([]);
  const [secondRuneSet, setSecondRuneSet] = useState([]);
  const [shardSet, setShardSet] = useState([]);

  //click handler to determine what runes you want
  const handleClick = (rune) => {
    if (runeSetDisplay !== "prazno") {
      if (runeSetDisplay !== rune && secondRuneSetDisplay == "prazno") {
        setSecondRuneSetDisplay(rune);
      }
    } else if (secondRuneSetDisplay !== rune) {
      setRuneSetDisplay(rune);
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setRuneSetDisplay("prazno");
  };

  const handleRightClickSecond = (e) => {
    e.preventDefault();
    setSecondRuneSetDisplay("prazno");
  };

  const handleRunes = () => {
    if (runeSetDisplay !== "prazno") {
      return (
        <Rune
          runes={runeSetDisplay}
          setRuneSet={setRuneSet}
          runeSet={runeSet}
          handleRightClick={handleRightClick}
        />
      );
    }
  };

  const handleSecondRunes = () => {
    if (secondRuneSetDisplay !== "prazno") {
      return (
        <SecondRune
          runes={secondRuneSetDisplay}
          setRuneSet={setSecondRuneSet}
          runeSet={secondRuneSet}
          handleRightClick={handleRightClickSecond}
          shardSet={shardSet}
          setShardSet={setShardSet}
        />
      );
    }
  };

  const handleTitleChange = (e) => {
    let t = e.target.value;
    setTitle(t);
  };

  const handleCreateRuneSet = () => {
    if (
      title.length > 0 &&
      runeSet.length == 4 &&
      secondRuneSet.length == 2 &&
      shardSet.length == 3 &&
      runeSets.length < 4
    ) {
      setRuneSets([
        ...runeSets,
        {
          title: title,
          runes: [
            {
              name: runeSetDisplay.name,
              icon: runeSetDisplay.icon,
              runeSet: runeSet,
            },
            {
              name: secondRuneSetDisplay.name,
              icon: secondRuneSetDisplay.icon,
              runeSet: secondRuneSet,
            },
          ],
          shards: shardSet,
        },
      ]);
      setRuneSetDisplay("prazno");
      setSecondRuneSetDisplay("prazno");
      setRuneSet([]);
      setSecondRuneSet([]);
      setShardSet([]);
      setTitle("");
    }
  };

  const handleDeleteRuneSet = (deleteSet) => {
    let newRuneSets = runeSets.filter((r) => r !== deleteSet);
    setRuneSets([...newRuneSets]);
  };

  return (
    <>
      <div className="Runes">
        <div className="rune-set">
          <input
            name="setTitle"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />

          <button
            type="button"
            onClick={handleCreateRuneSet}
            className="Runes-btn"
          >
            ADD Rune Set
          </button>
        </div>
        <div className="Runes-map">
          {runes.map((rune, index) => (
            <img
              src={rune.icon}
              onClick={() => handleClick(rune)}
              key={index}
            />
          ))}
        </div>
        <div className="Runes-runes">
          {handleRunes()}
          {handleSecondRunes()}
        </div>
      </div>

      {runeSets &&
        runeSets.map((runeSet, index) => (
          <div className="Runes-content" key={index}>
            <div className="Runes-content-p">
              <p>{runeSet.title}</p>
            </div>

            <div className="Runes-content-runes">
              {runeSet.runes.map((rune, index) => (
                <img src={rune.icon} alt="" key={index} />
              ))}
            </div>

            <div className="Runes-content-btn">
              <button
                type="button"
                onClick={() => handleDeleteRuneSet(runeSet)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Runes;
