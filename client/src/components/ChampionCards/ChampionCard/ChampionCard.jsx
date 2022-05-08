import React from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./ChampionCard.scss";

const ChampionCard = ({ champion }) => {
  return (
    <Link to={`/champions/${champion._id}`} style={{ textDecoration: "none" }}>
      <div className={`ChampionCard-item app__flex ${champion.tags[1]}`}>
        <div className="ChampionCard-image ">
          <img src={champion.icon} alt={champion.name} />
        </div>
        <div className="ChampionCard-content app__flex">
          <h4 className="bold-text">{champion.name}</h4>
          {/* <p className="p-text" style={{ marginTop: 10 }}>
              {champion.title}
            </p> */}

          <div className="ChampionCard-tag app__flex">
            <p className="p-text">{champion.tags[1]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
