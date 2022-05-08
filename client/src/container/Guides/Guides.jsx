import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getGuides } from "../../actions/guides";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Guides.scss";

const Guides = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [searchInput, setSearchInput] = useState("");
  const [filterGuides, setFilterGuides] = useState([]);

  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guides);

  // console.log(guides);

  const firstFiveGuides = guides.slice(0, 4);
  const filteredGuides = filterGuides.slice(0, 4);

  useEffect(() => {
    dispatch(getGuides());
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = guides.filter((guide) => {
        return Object.values(guide)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilterGuides(filteredData);
    } else {
      setFilterGuides(guides);
    }
  };
  return (
    <div className="Guides-con">
      <div className="Guides-h2">
        <h2>
          Looking for a <span>Guide</span>
        </h2>
        <p className="subhead-text">
          Or Want to create your{" "}
          <Link to="/new" style={{ textDecoration: "none" }}>
            <span>Own</span>
          </Link>
        </p>
      </div>

      <div className="app__guide-input app__flex">
        <input
          className="p-text"
          type="text"
          placeholder="Find a guide..."
          onChange={handleChange}
          name="name"
        />
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__guide-portfolio"
      >
        {searchInput !== "" ? (
          <>
            {filteredGuides.map((guide, index) => (
              <Link to={`/guides/${guide._id}`}>
                <div className="app__guide-item app__flex" key={index}>
                  <div className="app__guide-img app_flex">
                    <img src={guide.icon} alt={guide.name} />
                  </div>
                  <div className="app__guide-content app__flex">
                    <h4 className="bold-text">{guide.name}</h4>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {guide.title}
                    </p>

                    <div className="app__guide-tag app__flex">
                      <p className="p-text">{guide.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <>
            {firstFiveGuides.map((guide, index) => (
              <Link
                to={`/guides/${guide._id}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div className="app__guide-item app__flex">
                  <div className="app__guide-img app__flex">
                    <img src={guide.icon} alt={guide.name} />
                  </div>
                  <div className="app__guide-content app__flex">
                    <h4 className="bold-text">{guide.name}</h4>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {guide.title}
                    </p>

                    <div className="app__guide-tag app__flex">
                      <img src={guide.role.link} alt="" />
                      <p className="p-text">{guide.role.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Guides, "app__guides"),
  "guides",
  "app__primarybg"
);
