import React, { useState, useEffect } from "react";

const Slots = ({ slots, runeSet, setRuneSet, setUsedSlot }) => {
  const [slotOpen, setSlotOpen] = useState(false);
  const [activeRune, setActiveRune] = useState();

  // console.log(runeSet);

  const handleSlotOpen = () => {
    if (!slotOpen) {
      setSlotOpen(true);
      // setActiveRune();
    }
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

  useEffect(() => {
    slots.map((slot) => {
      slot.runes.map((s) => {
        if (s === activeRune) {
          setUsedSlot(slot);
        } else {
          return;
        }
      });
    });
  }, [activeRune]);

  return (
    <div className="slot">
      <div className="slot-icon" onClick={handleSlotOpen}>
        {activeRune && !slotOpen ? (
          <div className="slots-slots-slots">
            <img src={activeRune.icon} />
            <p className="bold-text">{activeRune.name}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="slot-row-second">
        {slotOpen && (
          <>
            {slots.map((slot, i) => (
              <section key={i}>
                {slot.runes.map((s, index) => (
                  <div className="slot-rune" key={index}>
                    <img
                      src={s.icon}
                      alt={s.name}
                      onClick={() => handleRuneClick(s)}
                    />
                  </div>
                ))}
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Slots;
