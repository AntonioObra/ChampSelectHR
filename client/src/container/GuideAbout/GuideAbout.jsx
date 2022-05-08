import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { getSingleGuide, deleteGuide } from "../../actions/guides";
import { Link, useNavigate } from "react-router-dom";
import {
  GuideInfo,
  Comments,
  GuideRunes,
  GuideChamps,
  GuideSpells,
  GuideAbilities,
} from "../../components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { starGuide, unStarGuide } from "../../actions/user";
import { ChampionInfo, Spojnica } from "../../components";
import { images } from "../../constants";

import "./GuideAbout.scss";

const GuideAbout = () => {
  const [activeFilter, setActiveFilter] = useState("About");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const parseUser = JSON.parse(localStorage.getItem("profile"));
  const [star, setStar] = useState(false);
  const [user, setUser] = useState();
  // const [guide, setGuide] = useState();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guide = useSelector((state) => state.guide);
  // console.log(guide.guide);

  useEffect(() => {
    dispatch(getSingleGuide(id));
  }, []);

  useEffect(() => {
    if (parseUser) {
      setUser(parseUser.result);
    }
  }, []);

  useEffect(() => {
    if (guide.length !== 0) {
      if (user) {
        // console.log(user);
        if (user.starGuides.includes(guide.guide._id)) {
          setStar(true);
        }
      }
    }
  }, [guide]);

  // const handleTagFilter = (item) => {
  //   setAnimateCard({ y: 100, opacity: 0 });

  //   setTimeout(() => {
  //     setActiveFilter(item);
  //     setAnimateCard({ y: 0, opacity: 1 });
  //   }, 500);
  // };

  const handleStarClick = async (e) => {
    e.preventDefault();
    dispatch(starGuide(guide.guide._id, user));
    setStar(!star);
  };

  const unhandleStarClick = async () => {
    dispatch(unStarGuide(guide.guide._id, user));
    setStar(!star);
  };

  const handleDelete = () => {
    dispatch(deleteGuide(id));
    navigate("/");
  };

  const handleUpdateGuide = () => {
    navigate(`/edit/${guide.guide._id}`, {
      state: { id: guide.guide._id, guide: guide.guide },
    });
  };

  return (
    <>
      <div className="GuideAbout">
        <div className="GuideAbout-headertext">
          {guide.guide && (
            <>
              <h2>
                {guide.guide.name}
                {/* <span></span> */}
              </h2>
              <p>
                Created by <span>{guide.guide.user.userName}</span>{" "}
              </p>
              {user && guide.guide && (
                <>
                  {guide.guide.user.userName == user.userName ? (
                    <div className="star-div">
                      <button
                        className="UserPage-nav-btn-logout"
                        onClick={handleUpdateGuide}
                      >
                        Update
                      </button>

                      <button
                        className="UserPage-nav-btn-delete"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <>
                      {star ? (
                        <div className="star">
                          <span onClick={unhandleStarClick}>
                            <StarIcon
                              sx={{ color: "#5a6be3", fontSize: "30px" }}
                            />
                          </span>
                        </div>
                      ) : (
                        <div className="star">
                          <span onClick={handleStarClick}>
                            <StarBorderIcon
                              sx={{ color: "#5a6be3", fontSize: "30px" }}
                            />
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="GuideAbout-content"
        >
          <div className="GuideAbout-header">
            <div className="GuideAbout-header-img">
              {guide.guide && (
                <img
                  src={guide.guide.champions[0].bannerIcon}
                  alt={guide.guide.champions[0].name}
                />
              )}
            </div>

            <div className="GuideAbout-header-runes-spells">
              {guide.guide && <GuideRunes runeSets={guide.guide.runeSets} />}
              {guide.guide && (
                <GuideSpells spellsSets={guide.guide.spellsSets} />
              )}
            </div>
          </div>

          <GuideInfo guide={guide.guide} />

          <div className="GuideAbout-header-abilities">
            {guide.guide && (
              <GuideAbilities
                abilities={guide.guide.abilitySets}
                pickedChampion={guide.guide.champions[0]}
              />
            )}

            <div className="GuideAbout-header-ab-img">
              {guide.guide && (
                <img
                  src={guide.guide.champions[0].fullIcon}
                  alt={guide.guide.champions[0].name}
                />
              )}
            </div>
          </div>

          <div className="GuideAbout-header-spells">
            {guide.guide && (
              <GuideChamps
                synergieChampions={guide.guide.synergieChampions}
                threatChampions={guide.guide.threatChampions}
              />
            )}
          </div>
        </motion.div>
      </div>

      <Spojnica image={images.reksai} />
      <div className="GuideAbout">
        {guide.guide && (
          <div className="d">
            <div className="desc">
              <h2>Description</h2>
              <p>{guide.guide.description}</p>
            </div>
          </div>
        )}

        <Comments guide={guide.guide} />
      </div>
    </>
  );
};

export default ApperWrap(
  MotionWrap(GuideAbout, "app__aguides"),
  "aguide",
  "app__whitebg"
);
