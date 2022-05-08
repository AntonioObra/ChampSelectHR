import React from "react";
import { InfoMain, InfoSpells, InfoLore, InfoGuides } from "./Infos";
import { Spojnica } from "../../components";
import { images } from "../../constants";

const ChampionInfo = ({ activeFilter, champion }) => {
  // console.log(champion);

  const contentHandler = () => {
    // if (activeFilter === "Main") {
    //   return <InfoMain champion={champion} />;
    // } else if (activeFilter === "Spells") {
    //   return <InfoSpells champion={champion} />;
    // } else if (activeFilter === "Lore") {
    //   return <InfoLore champion={champion} />;
    // } else {
    //   return <InfoGuides champion={champion} />;
    // }

    if (activeFilter === "Guides") {
      return <InfoGuides champion={champion} />;
    } else {
      return (
        <>
          <InfoMain champion={champion} />
          <InfoSpells champion={champion} />
        </>
      );
    }
  };
  return (
    <div className="ChampionInfo">
      {/* <InfoMain champion={champion} />
      <InfoSpells champion={champion} />
      {/* <InfoLore champion={champion} /> */}
      {/* <Spojnica image={images.riven} />
      <h2>
        <span>{champion.name}</span> Guides
      </h2>
      <InfoGuides champion={champion} /> */}

      {contentHandler()}
    </div>
  );
};

export default ChampionInfo;
