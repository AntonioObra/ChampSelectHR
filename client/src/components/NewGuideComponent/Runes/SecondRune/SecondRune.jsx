import React, { useEffect, useState } from "react";
import Slots from "./Slots/Slots";
import { runesBonus } from "../../../../constants/runesBonus";

import ShardSlots from "./ShardSlots/ShardSlots";

import "./Rune.scss";

const SecondRune = ({
  runes,
  setRuneSet,
  runeSet,
  handleRightClick,
  shardSet,
  setShardSet,
}) => {
  const [usedSlot, setUsedSlot] = useState([]);
  const [usedSlot2, setUsedSlot2] = useState([]);
  const [slots3, setSlots3] = useState([]);
  const [slots2, setSlots2] = useState([]);

  let slots1 = runes.slots.slice(1, 4);

  useEffect(() => {
    setSlots2(slots1);
    setSlots3(slots1);
  }, []);

  useEffect(() => {
    let newSlots = slots1.filter((s) => s !== usedSlot);
    setSlots3(newSlots);
  }, [usedSlot]);

  useEffect(() => {
    let newSlots = slots1.filter((s) => s !== usedSlot2);
    setSlots2(newSlots);
  }, [usedSlot2]);

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

      <Slots
        slots={slots2}
        runeSet={runeSet}
        setRuneSet={setRuneSet}
        setUsedSlot={setUsedSlot}
      />
      <Slots
        slots={slots3}
        runeSet={runeSet}
        setRuneSet={setRuneSet}
        setUsedSlot={setUsedSlot2}
      />

      <div className="runes-shards">
        {runesBonus.map((shards, i) => (
          <ShardSlots
            slot={shards}
            setShardSet={setShardSet}
            shardSet={shardSet}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondRune;
