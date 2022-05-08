import React, { useState } from "react";

import "./Synergies.scss";

const Synergies = ({
  champions,
  pickedChampion,
  synergieChampions,
  setSynergieChampions,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //all the champions except the picked one for the guide
  let championsWithout = champions.filter(
    (champion) => champion.name !== pickedChampion
  );

  //first 16 champions for display
  const first16Champs = championsWithout.slice(0, 16);

  //input onChange event for filtering
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = championsWithout.filter((champ) => {
        return Object.values(champ)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData.splice(0, 16));
    } else {
      setFilteredResults(championsWithout);
    }
  };

  const handlePickedChampion = (champ) => {
    if (synergieChampions.length < 8) {
      if (!synergieChampions.includes(champ)) {
        setSynergieChampions([...synergieChampions, champ]);
      }
    }
  };

  const handleRightClick = (champ, e) => {
    e.preventDefault();
    let newSynergieChampions = synergieChampions.filter(
      (c) => c.name !== champ.name
    );
    setSynergieChampions([...newSynergieChampions]);
  };

  return (
    <div className="Synergies">
      <div className="syn-champions">
        <h3>
          Add <span>Synergie *</span>{" "}
        </h3>

        <div className="champ">
          <p>right click to remove </p>

          <div className="champ">
            {synergieChampions.map((champ) => (
              <div
                className="champ-item"
                onContextMenu={(e) => handleRightClick(champ, e)}
                key={champ._id}
              >
                <img src={champ.squareIcon} alt={champ.name} />
                <p className="p-text">{champ.name}</p>
              </div>
            ))}
          </div>
        </div>
        <input name="title" autoFocus onChange={handleChange} />
      </div>

      <div className="champ">
        {searchInput.length > 1 ? (
          filteredResults.map((champ) => (
            <div
              className="champ-item"
              onClick={() => handlePickedChampion(champ)}
              key={champ._id}
            >
              <img src={champ.squareIcon} alt={champ.name} />
              <p className="p-text">{champ.name}</p>
            </div>
          ))
        ) : (
          <>
            {first16Champs.map((champ) => (
              <div
                className="champ-item"
                onClick={() => handlePickedChampion(champ)}
                key={champ._id}
              >
                <img src={champ.squareIcon} alt={champ.name} />
                <p className="p-text">{champ.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Synergies;
