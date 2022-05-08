import React from "react";
import ChampionCard from "./ChampionCard/ChampionCard";
import "./ChampionsCards.jsx";

const ChampionsCards = ({ champions }) => {
  return (
    <>
      {champions.map((champ, index) => (
        <ChampionCard champion={champ} key={index} />
      ))}
    </>
  );
};

export default ChampionsCards;
