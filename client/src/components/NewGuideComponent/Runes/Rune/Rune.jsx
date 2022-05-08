import React, { useState } from "react";
import Slots from "./Slots/Slots";
import "./Rune.scss";

const Rune = ({ runes, handleRightClick, setRuneSet, runeSet }) => {
  return (
    <div className="Rune">
      <div className="Rune-header-rune">
        <img
          src={runes.icon}
          alt={runes.name}
          onContextMenu={handleRightClick}
        />
        <h2 className="Rune-h2">{runes.name}</h2>
      </div>

      {runes.slots && (
        <>
          {runes.slots.map((slot, index) => (
            <Slots
              slot={slot}
              key={index}
              setRuneSet={setRuneSet}
              runeSet={runeSet}
              resi={runes.slots[0].runes}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Rune;
