import React, { useMemo } from "react";

const SecondRuneSet = ({ secondRuneSet, shardSet }) => {
  // console.log(shardSet);
  const memoizedResult = useMemo(
    () => (
      <div className="RuneSet">
        <div className="RuneSet-item znj j">
          <img src={secondRuneSet.icon} alt={secondRuneSet.name} />
          <p>{secondRuneSet.name}</p>
        </div>

        <div className="RuneSet-body">
          {secondRuneSet.runeSet.map((rune, index) => (
            <div className="RuneSet-item" key={index}>
              <img src={rune.icon} alt={rune.name} />
              <p className="p-text">{rune.name}</p>
            </div>
          ))}

          <div className="SecondRune-shards">
            {shardSet.map((shard, index) => (
              <div className={`shard`} key={index}>
                <div className={`shard-icon slot-shard ${shard.type}`}>
                  <img src={shard.icon} alt={shard.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    [secondRuneSet]
  );

  return memoizedResult;
};

export default SecondRuneSet;
