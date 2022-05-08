import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getGuides } from "../../actions/guides";
import { Link } from "react-router-dom";
import { GuideCards } from "../../components";

import "./PageGuides.scss";

const PageGuides = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [searchInput, setSearchInput] = useState("");
  const [filterGuides, setFilterGuides] = useState([]);
  const [searchGuides, setSearchGuides] = useState([]);

  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guides);

  useEffect(() => {
    dispatch(getGuides());
  }, []);

  useEffect(() => {
    setFilterGuides(guides);
  }, [guides]);

  const handleTagFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterGuides(guides);
      } else {
        setFilterGuides(guides.filter((guide) => guide.role.name == item));
      }
    }, 500);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "" && activeFilter === "All") {
      const filteredData = guides.filter((guide) => {
        return Object.values(guide)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchGuides(filteredData);
    } else if (searchInput !== "") {
      const filteredData = filterGuides.filter((guide) => {
        return Object.values(guide)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchGuides(filteredData);
    } else {
      setSearchGuides(guides);
    }
  };

  return (
    <div className="PageGuides">
      <h2>
        All <span>Guides</span>
      </h2>

      <div className="PageGuides-input app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="Find your next guide..."
          onChange={handleChange}
          name="name"
        />
      </div>

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
        <div className="PageGuides-div">
          {searchInput === "" ? (
            <GuideCards guides={filterGuides} />
          ) : (
            <GuideCards guides={searchGuides} />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ApperWrap(
  MotionWrap(PageGuides, "app__pguides"),
  "pguide",
  "app__whitebg"
);
