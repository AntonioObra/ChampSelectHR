import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GuideCards } from "../../../../components";
import { motion } from "framer-motion";

const InfoGuide = ({ champion }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterGuides, setFilterGuides] = useState([]);

  console.log(champion.builds);

  useEffect(() => {
    setFilterGuides(champion.builds);
  }, [champion]);

  const handleTagFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterGuides(champion.builds);
      } else {
        setFilterGuides(
          champion.builds.filter((build) => build.role.name == item)
        );
      }
    }, 500);
  };
  return (
    <>
      <div className="PageGuides-filter">
        {["Top", "Jungle", "Mid", "Support", "ADC", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleTagFilter(item)}
              className={`PageGuides-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="PageGuides-motion"
      >
        <div className="InfoGuides">
          {champion.builds.length > 0 ? (
            <div className="InfoGuide">
              <GuideCards guides={filterGuides} />
            </div>
          ) : (
            <>
              <h2 className="head-text">
                There are currently no guides for <span>{champion.name}</span>
              </h2>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default InfoGuide;
