import React, { useState, useEffect } from "react";

const Slots = ({ slot, runeSet, setRuneSet, resi }) => {
  const [slotOpen, setSlotOpen] = useState(false);
  const [activeRune, setActiveRune] = useState();

  const handleSlotOpen = () => {
    setSlotOpen(!slotOpen);
  };

  const handleRuneClick = (rune) => {
    // console.log(activeRune);
    let newRuneSet = runeSet.filter((r) => r !== activeRune);
    // console.log(newRuneSet);
    setRuneSet([...newRuneSet, rune]);

    setActiveRune(rune);
    setSlotOpen(false);
  };

  return (
    <div className="slot">
      <div
        className={`slot-icon ${resi.includes(activeRune) ? "sp" : ""}`}
        onClick={handleSlotOpen}
      >
        {activeRune && !slotOpen ? (
          <div className="slots-slots-slots">
            <img src={activeRune.icon} />
            <p>{activeRune.name}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="slot-row">
        {slotOpen && (
          <>
            {slot.runes.map((s, index) => (
              <div className="slot-rune" key={index}>
                <img
                  src={s.icon}
                  alt={s.name}
                  onClick={() => handleRuneClick(s)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Slots;
