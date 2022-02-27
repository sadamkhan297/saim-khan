import React, { useState } from "react";

const NavData = ({ don }) => {
  const [doing, setDoing] = useState(false);
  const clickEvent = () => {
    setDoing(!doing);
  };
  return (
    <div className={doing ? don : "dodo"}>
      <h1 className="headingDiv">
        Jubin Nautiyal Hit Songs 2022 💘 Latest Songs of Jubin Nautiyal 2022 💘
        Bollywood Hit Songs
      </h1>
      <button className="FormBtn2" onClick={clickEvent}>
        click me
      </button>
    </div>
  );
};

export default NavData;
