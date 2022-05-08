import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  const logout = () => {
    console.log("logout");
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  const handleClick = () => {
    setTimeout(() => {
      setToggle(true);
    }, 200);
  };

  return (
    <nav className="app__navbar">
      <div className="nav">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {[
            { name: "home", link: "/" },
            { name: "champions", link: "/champions" },
            { name: "guides", link: "/guides" },
            { name: "new guide", link: "/new" },
          ].map((item) => (
            <li key={`link-${item.name}`} className="app__flex p-text">
              <div />
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={handleClick} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "champions", "guides", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        <div className="signinup">
          {user?.result ? (
            <>
              <Link
                to={`/user/${user.result._id}`}
                style={{ textDecoration: "none" }}
              >
                <p>{user.result.userName}</p>
              </Link>
            </>
          ) : (
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <p>Sign In</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
