import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getChampions } from "../../actions/champions";
import { ChampionCards } from "../../components";

import "./PageChampions.scss";

const PageChampions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [searchInput, setSearchInput] = useState("");
  const [filterChamps, setFilterChamps] = useState([]);
  const [searchChamps, setSearchChamps] = useState([]);

  const dispatch = useDispatch();
  const champions = useSelector((state) => state.champions);

  useEffect(() => {
    dispatch(getChampions());
  }, []);

  useEffect(() => {
    setFilterChamps(champions);
  }, [champions]);

  const handleTagFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterChamps(champions);
      } else {
        setFilterChamps(champions.filter((champ) => champ.tags.includes(item)));
      }
    }, 500);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "" && activeFilter === "All") {
      const filteredData = champions.filter((champ) => {
        return Object.values(champ)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchChamps(filteredData);
    } else if (searchInput !== "") {
      const filteredData = filterChamps.filter((champ) => {
        return Object.values(champ)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchChamps(filteredData);
    } else {
      setSearchChamps(champions);
    }
  };
  return (
    <div className="PageChampions">
      <h2>
        All <span>Champions</span>
      </h2>

      <div className="PageChampions-input app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="Search For your champion..."
          onChange={handleChange}
          name="name"
        />
      </div>

      <div className="PageChampions-filter">
        {[
          "Fighter",
          "Marksman",
          "Mage",
          "Tank",
          "Support",
          "Assassin",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleTagFilter(item)}
            className={`PageChampions-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="PageChampions-main"
      >
        {searchInput === "" ? (
          <ChampionCards champions={filterChamps} />
        ) : (
          <ChampionCards champions={searchChamps} />
        )}
      </motion.div>
    </div>
  );
};

export default ApperWrap(
  MotionWrap(PageChampions, "app__pchamps"),
  "pchamp",
  "app__whitebg"
);
