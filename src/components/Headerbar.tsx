import React from "react";

const Headerbar = () => {
  return (
    <div className="Header">
      <img src="play.svg" alt="play" className="PlayButton"></img>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
      ></input>
      <img src="bell.svg" alt="bell" className="BellButton"></img>
    </div>
  );
};

export default Headerbar;
