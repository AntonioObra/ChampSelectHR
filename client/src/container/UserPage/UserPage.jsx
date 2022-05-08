import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { getUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { GuideCards } from "../../components";
import { useNavigate } from "react-router-dom";

import "./UserPage.scss";

const UserPage = () => {
  const [activeFilter, setActiveFilter] = useState();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    if (user._id) {
      setActiveFilter("Favorites");
    }
  }, [user]);

  const handleTagFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setActiveFilter(item);
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  const logout = () => {
    console.log("logout");
    dispatch({ type: "LOGOUT" });
    navigate("/");
    // setUser(null);
  };

  return (
    <div className="UserPage">
      <h2>
        Welcome back <span>{user.userName}!</span>{" "}
      </h2>
      <div className="UserPage-user">
        <div className="UserPage-nav">
          <>
            {["Favorites", "Guides"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleTagFilter(item)}
                className={`UserPage-nav-btn app__flex  ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
            <button className="UserPage-nav-btn-logout" onClick={logout}>
              Logout
            </button>
          </>
        </div>
      </div>
      <div className="UserPage-container">
        <div className="UserPage-content">
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="UserPage-motion"
          >
            {activeFilter === "Guides" && (
              <>
                {/* <h1>Your Guides</h1> */}
                <GuideCards guides={user.guides} />
              </>
            )}
            {activeFilter === "Favorites" && (
              <>
                {/* <h1>Favorites</h1> */}
                <GuideCards guides={user.starGuides} />
              </>
            )}
            {/* {activeFilter === "Settings" && <h1>Profile Settings</h1>} */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApperWrap(
  MotionWrap(UserPage, "app__userpages"),
  "userpage",
  "app__whitebg"
);
