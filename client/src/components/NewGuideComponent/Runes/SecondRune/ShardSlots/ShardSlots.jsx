import React, { useState, useEffect } from "react";

const ShardSlots = ({ slot, shardSet, setShardSet }) => {
  const [slotOpen, setSlotOpen] = useState(false);
  const [activeRune, setActiveRune] = useState();

  const handleSlotOpen = () => {
    setSlotOpen(!slotOpen);
  };

  const handleShardClick = (rune) => {
    let newShardSet = shardSet.filter((r) => r !== activeRune);

    setShardSet([...newShardSet, rune]);

    setActiveRune(rune);
    setSlotOpen(false);
  };

  return (
    <div className="shard">
      <div onClick={handleSlotOpen}>
        {activeRune && !slotOpen ? (
          <div className={`shard-icon slot-shard ${activeRune.type}`}>
            <img src={activeRune.icon} />
          </div>
        ) : (
          <div className="shard-icon"></div>
        )}
      </div>
      <div className="slot-row">
        {slotOpen && (
          <>
            {slot.slots.map((s, index) => (
              <div
                className={`slot-shard ${s.type}`}
                key={index}
                onClick={() => handleShardClick(s)}
              >
                <img src={s.icon} alt={s.name} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ShardSlots;
