import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { getSingleChampion } from "../../actions/champions";
import { ChampionInfo, Spojnica } from "../../components";
import { images } from "../../constants";

import "./ChampionAbout.scss";

const ChampionAbout = () => {
  const [activeFilter, setActiveFilter] = useState("Main");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const { id } = useParams();

  const dispatch = useDispatch();
  const champion = useSelector((state) => state.champion);

  useEffect(() => {
    dispatch(getSingleChampion(id));
  }, []);

  const handleTagFilter = (item) => {
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setActiveFilter(item);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  // console.log(champion);

  return (
    <>
      <div className="ChampionAbout">
        <h2>
          Everything About <span>{champion.name}</span>
        </h2>

        <div className="ChampionAbout-img">
          <img src={champion.bannerIcon} alt={champion.name} />
          {/* <div>
          <p className="p-text">
            Find the best {champion.name} build guides for League of Legends S12
            Patch 12.5. The ChampSelectHR community works hard to keep their LoL
            builds and guides updated, and will help you craft the best{" "}
            {champion.name} build for the S12 meta. Learn more about{" "}
            {champion.name}'s abilities, skins, or even ask your own questions
            to the community!
          </p>
        </div> */}
        </div>
        {/* <div className="app__achamp-filter">
        {["Main", "Spells", "Lore", "Guides"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleTagFilter(item)}
            className={`app__achamp-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div> */}

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__achamp-portfolio"
        >
          {champion.name && (
            <ChampionInfo activeFilter={activeFilter} champion={champion} />
          )}
        </motion.div>
      </div>

      {champion.builds && champion.builds.length > 0 ? (
        <>
          <Spojnica image={images.kasiopea} red={2} />
          <div
            className={`ChampionAbout ${
              champion.builds && champion.builds.length > 0
                ? ""
                : "ChampionAbout-Guides"
            }`}
          >
            <h2>
              <span>{champion.name}</span> Guides
            </h2>
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__achamp-portfolio"
            >
              {champion.name && (
                <ChampionInfo activeFilter="Guides" champion={champion} />
              )}
            </motion.div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ApperWrap(
  MotionWrap(ChampionAbout, "app__achamps"),
  "achamp",
  "app__whitebg"
);
