import React from "react";
import GuideCard from "./GuideCard/GuideCard";

const GuideCards = ({ guides }) => {
  console.log(guides);
  return (
    <>
      {guides.map((guide, index) => (
        <GuideCard guide={guide} key={index} />
      ))}
    </>
  );
};

export default GuideCards;
