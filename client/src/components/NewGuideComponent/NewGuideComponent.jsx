import React from "react";
import Runes from "./Runes/Runes";
import Synergies from "./Synergies/Synergies";
import Threats from "./Threats/Threats";
import Spells from "./Spells/Spells";
import Abilities from "./Abilities/Abilities";

import "./NewGuide.scss";
import Items from "./Items/Items";

const NewGuideComponent = ({
  runeSets,
  setRuneSets,
  activeFilter,
  champions,
  pickedChampion,
  synergieChampions,
  setSynergieChampions,
  threatChampions,
  setThreatChampions,
  items,
  setItemsSets,
  itemsSets,
  abilitySets,
  setAbilitySets,
  setSpellsSets,
  spellsSets,
  setActiveFilter,
  handleTransition,
}) => {
  // console.log(pickedChampion);
  const handleFilter = () => {
    if (activeFilter === "Runes") {
      return <Runes runeSets={runeSets} setRuneSets={setRuneSets} />;
    } else if (activeFilter === "Synergies") {
      return (
        <Synergies
          champions={champions}
          pickedChampion={pickedChampion}
          synergieChampions={synergieChampions}
          setSynergieChampions={setSynergieChampions}
        />
      );
    } else if (activeFilter === "Threats") {
      return (
        <Threats
          champions={champions}
          pickedChampion={pickedChampion}
          threatChampions={threatChampions}
          setThreatChampions={setThreatChampions}
        />
      );
    } else if (activeFilter === "Items") {
      return (
        <Items
          pickedChampion={pickedChampion}
          items={items}
          setItemsSets={setItemsSets}
          itemsSets={itemsSets}
        />
      );
    } else if (activeFilter === "Spells") {
      return <Spells setSpellsSets={setSpellsSets} spellsSets={spellsSets} />;
    } else if (activeFilter === "Abilities") {
      return (
        <Abilities
          pickedChampion={pickedChampion}
          abilitySets={abilitySets}
          setAbilitySets={setAbilitySets}
        />
      );
    }
  };
  return <div className="NewGuide">{handleFilter()}</div>;
};

export default NewGuideComponent;
