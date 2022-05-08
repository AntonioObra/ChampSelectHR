import React, { useState } from "react";

const Threats = ({
  champions,
  pickedChampion,
  threatChampions,
  setThreatChampions,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //all the champions except for the picked one
  let championsWithout = champions.filter(
    (champion) => champion.name !== pickedChampion
  );
  const first16Champs = championsWithout.slice(0, 16);

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
    if (threatChampions.length < 8) {
      if (!threatChampions.includes(champ)) {
        setThreatChampions([...threatChampions, champ]);
      }
    }
  };

  const handleRightClick = (champ, e) => {
    e.preventDefault();
    let newThreatChampions = threatChampions.filter(
      (c) => c.name !== champ.name
    );
    setThreatChampions([...newThreatChampions]);
  };

  return (
    <div className="Synergies">
      <div className="syn-champions">
        <label className="head-text-title">Add threat*</label>

        <div className="champ">
          <div className="champions">
            <p>RightClick on selected champion to remove them from the list</p>
          </div>

          {threatChampions.map((champ) => (
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

export default Threats;
