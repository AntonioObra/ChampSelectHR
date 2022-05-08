import React from "react";

const ApperWrap = (Component, idName, bg) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container`}
        style={{ backgroundImage: bg }}
      >
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default ApperWrap;
