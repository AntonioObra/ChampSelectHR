import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getChampions } from "../../actions/champions";
import { Link } from "react-router-dom";
import { ChampionCards } from "../../components";

import "./Champions.scss";

const Champions = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [searchInput, setSearchInput] = useState("");
  const [filterChamps, setFilterChamps] = useState([]);

  const dispatch = useDispatch();
  const champions = useSelector((state) => state.champions);

  const firstFiveChamps = champions.slice(0, 12);
  const filteredCh = filterChamps.slice(0, 12);

  useEffect(() => {
    dispatch(getChampions());
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = champions.filter((champ) => {
        return Object.values(champ)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilterChamps(filteredData);
    } else {
      setFilterChamps(champions);
    }
  };
  return (
    <>
      <div className="Champions-h2">
        <h2>
          Find Your <span>Champion</span>
        </h2>
      </div>

      <div className="app__champ-input app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="Search For your champion..."
          onChange={handleChange}
          name="name"
        />
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__champ-content"
      >
        {searchInput !== "" ? (
          <ChampionCards champions={filteredCh} />
        ) : (
          <ChampionCards champions={firstFiveChamps} />
        )}
      </motion.div>

      <Link to="/champions" style={{}}>
        <button>Load More</button>
      </Link>
    </>
  );
};

export default AppWrap(
  MotionWrap(Champions, "app__champs"),
  "champions",
  "app__primarybg"
);
