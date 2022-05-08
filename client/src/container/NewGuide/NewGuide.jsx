import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createGuide } from "../../actions/guides";
import { getChampions } from "../../actions/champions";
import { getItems } from "../../actions/items";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApperWrap, MotionWrap } from "../../wrapper";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { NewGuideComponent } from "../../components";
import { motion } from "framer-motion";
import { roles } from "../../constants/roles";

import "./NewGuide.scss";

const NewGuide = () => {
  const [pickedRole, setPickedRole] = useState("");
  const [pickedChampion, setPickedChampion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [spellsSets, setSpellsSets] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [selectItems, setSelectItems] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [runeSets, setRuneSets] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Items");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [synergieChampions, setSynergieChampions] = useState([]);
  const [threatChampions, setThreatChampions] = useState([]);
  const [itemsSets, setItemsSets] = useState([]);
  const [abilitySets, setAbilitySets] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const champions = useSelector((state) => state.champions);
  const items = useSelector((state) => state.items);

  const first12Champs = champions.slice(0, 16);

  useEffect(() => {
    dispatch(getChampions());
    dispatch(getItems());
  }, []);

  const handleRoleClick = (role) => {
    setPickedRole(role);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = champions.filter((champ) => {
        return Object.values(champ)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData.splice(0, 16));
    } else {
      setFilteredResults(champions);
    }
  };

  const handlePickedChampion = (champ) => {
    setPickedChampion(champ);
  };

  const handleName = (e) => {
    let name = e.target.value;
    setTitle(name);
  };

  const handleDescription = (e) => {
    let desc = e.target.value;
    setDescription(desc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (
    //   pickedChampion.length > 0 &&
    //   title.length > 0 &&
    //   pickedRole.length > 0 &&
    //   description.length > 0 &&
    //   runeSet.length === 4 &&
    //   secondRuneSet.length === 2 &&
    //   synergieChampions.length > 0 &&
    //   threatChampions.length > 0
    // ) {
    dispatch(
      createGuide(
        {
          champion: pickedChampion.name,
          name: title,
          role: pickedRole,
          itemSets: itemsSets,
          description: description,
          user: user,
          runeSets: runeSets,
          // runeSet: [runeSetName, ...runeSet],
          // secondRuneSet: [secondRuneSetName, ...secondRuneSet],
          synergieChampions: synergieChampions,
          threatChampions: threatChampions,
          abilitySets: abilitySets,
          spellsSets: spellsSets,
        },
        navigate
      )
    );
    //   } else {
    //     setOpen(true);
    //   }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleTagFilter = (item) => {
    setAnimateCard([{ y: 50, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setActiveFilter(item);
    }, 500);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleTransition = (e) => {
    setSelectItems(!selectItems);
  };

  return (
    <>
      <div className="app__newguide">
        {!user ? (
          <p className="head-text">
            Please Sign In or Sing Up in order to create a <span>Guide</span>
          </p>
        ) : (
          <>
            <h2>
              Create a new <span>Guide</span>
            </h2>

            {/* <div className="app__newguide app__flex"> */}
            <form onSubmit={handleSubmit}>
              {!selectItems ? (
                <>
                  <div className="title">
                    <label className="head-text-title">
                      Title of the guide*
                    </label>
                    <input
                      name="title"
                      autoFocus
                      onChange={handleName}
                      required
                      value={title}
                    />
                  </div>
                  <label className="head-text-title">Role*</label>
                  <div className="roles">
                    <div className="role">
                      {roles.map((role) => (
                        <div
                          onClick={() => handleRoleClick(role)}
                          className={`role-item ${
                            pickedRole == role ? "aktivv" : ""
                          }`}
                          name="role"
                          key={role.name}
                        >
                          <img src={role.link} alt={role.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="champions">
                    <label className="head-text-title">Champion*</label>
                    <div className="champ pickedChamp">
                      <div
                        className="champ-item pickedChamp-item"
                        // onClick={() => handlePickedChampion(champ)}
                        key={pickedChampion._id}
                      >
                        <img
                          src={pickedChampion.squareIcon}
                          alt={pickedChampion.name}
                        />
                        {/* <p className="p-text">{champ.name}</p> */}
                      </div>
                    </div>
                    <input name="title" autoFocus onChange={handleChange} />

                    <div className="champ">
                      {searchInput.length > 1 ? (
                        filteredResults.map((champ) => (
                          <div
                            className="champ-item"
                            onClick={() => handlePickedChampion(champ)}
                            key={champ._id}
                          >
                            <img src={champ.squareIcon} alt={champ.name} />
                            {/* <p className="p-text">{champ.name}</p> */}
                          </div>
                        ))
                      ) : (
                        <>
                          {first12Champs.map((champ) => (
                            <div
                              className="champ-item"
                              onClick={() => handlePickedChampion(champ)}
                              key={champ._id}
                            >
                              <img src={champ.squareIcon} alt={champ.name} />
                              {/* <p className="p-text">{champ.name}</p> */}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="next-btn">
                    <button
                      type="button"
                      onClick={handleTransition}
                      disabled={
                        pickedChampion && pickedRole && title ? false : true
                      }
                      className={`${
                        pickedChampion && pickedRole && title
                          ? ""
                          : "disabled-btn"
                      }`}
                    >
                      NEXT
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="NewGuide-mapper">
                    {[
                      "Items",
                      "Runes",
                      "Synergies",
                      "Threats",
                      "Spells",
                      "Abilities",
                    ].map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleTagFilter(item)}
                        className={`app__pguide-filter-item app__flex p-text ${
                          activeFilter === item ? "item-activee" : ""
                        }`}
                      >
                        {" "}
                        {item}
                      </div>
                    ))}
                  </div>{" "}
                  <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="app__pguide-portfolio"
                  >
                    {activeFilter === "Items" && (
                      <>
                        <NewGuideComponent
                          activeFilter={activeFilter}
                          pickedChampion={pickedChampion}
                          items={items}
                          setItemsSets={setItemsSets}
                          itemsSets={itemsSets}
                          handleTransition={handleTransition}
                          setActiveFilter={setActiveFilter}
                        />
                      </>
                    )}
                    {activeFilter === "Runes" && (
                      <NewGuideComponent
                        runeSets={runeSets}
                        setRuneSets={setRuneSets}
                        activeFilter={activeFilter}
                        handleTransition={handleTransition}
                        setActiveFilter={setActiveFilter}
                      />
                    )}
                    {activeFilter === "Synergies" && (
                      <NewGuideComponent
                        activeFilter={activeFilter}
                        champions={champions}
                        pickedChampion={pickedChampion}
                        synergieChampions={synergieChampions}
                        setSynergieChampions={setSynergieChampions}
                        handleTransition={handleTransition}
                        setActiveFilter={setActiveFilter}
                      />
                    )}
                    {activeFilter === "Threats" && (
                      <NewGuideComponent
                        activeFilter={activeFilter}
                        champions={champions}
                        pickedChampion={pickedChampion}
                        setThreatChampions={setThreatChampions}
                        threatChampions={threatChampions}
                        handleTransition={handleTransition}
                        setActiveFilter={setActiveFilter}
                      />
                    )}

                    {activeFilter === "Spells" && (
                      <>
                        <NewGuideComponent
                          activeFilter={activeFilter}
                          spellsSets={spellsSets}
                          setSpellsSets={setSpellsSets}
                          handleTransition={handleTransition}
                          setActiveFilter={setActiveFilter}
                        />
                      </>
                    )}

                    {activeFilter === "Abilities" && (
                      <NewGuideComponent
                        activeFilter={activeFilter}
                        pickedChampion={pickedChampion}
                        abilitySets={abilitySets}
                        setAbilitySets={setAbilitySets}
                        handleTransition={handleTransition}
                        setActiveFilter={setActiveFilter}
                      />
                    )}

                    {activeFilter === "Description" && (
                      <>
                        <div className="desc">
                          <label className="head-text-title">
                            Description *
                          </label>
                          <textarea
                            className="desc-item"
                            onChange={handleDescription}
                            required
                          ></textarea>
                        </div>
                      </>
                    )}
                  </motion.div>
                  {activeFilter === "Description" ? (
                    <div className="btn-flex">
                      <button
                        type="button"
                        onClick={() => setActiveFilter("Items")}
                      >
                        Back
                      </button>
                      <button type="submit">Submit</button>
                    </div>
                  ) : (
                    <div className="btn-flex">
                      <button type="button" onClick={handleTransition}>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveFilter("Description")}
                        disabled={
                          itemsSets.length > 0 &&
                          // runeSet.length > 0 &&
                          // secondRuneSet.length > 0 &&
                          synergieChampions.length > 0 &&
                          threatChampions.length > 0 &&
                          abilitySets.length > 0 &&
                          spellsSets.length > 0
                            ? false
                            : true
                        }
                        className={`${
                          itemsSets.length > 0 &&
                          // runeSet.length > 0 &&
                          // secondRuneSet.length > 0 &&
                          synergieChampions.length > 0 &&
                          threatChampions.length > 0 &&
                          abilitySets.length > 0 &&
                          spellsSets.length > 0
                            ? ""
                            : "disabled-btn"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </form>
            {/* </div> */}
          </>
        )}
      </div>

      <Snackbar
        open={open}
        // sx={{ background: "white", color: "black" }}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Please fill out all the required fields"
        action={action}
      />
    </>
  );
};

export default ApperWrap(
  MotionWrap(NewGuide, "app__newguides"),
  "newguide",
  "app__whitebg"
);
