import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://picsum.photos/200/300" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200/300" },
  { url: "https://picsum.photos/200" },
  { url: "https://picsum.photos/200/300" },
  { url: "https://picsum.photos/200" },
];

const Select = () => {
  const [SelectData, setSelectData] = useState(true);
  const [SelectData2, setSelectData2] = useState(true);
  const [SelectData3, setSelectData3] = useState(true);
  const [SelectData4, setSelectData4] = useState(true);
  const [SelectData5, setSelectData5] = useState(true);

  const ClickEvent = () => {
    setSelectData(!SelectData);
  };
  const ClickEvent2 = () => {
    setSelectData2(!SelectData2);
  };
  const ClickEvent3 = () => {
    setSelectData3(!SelectData3);
  };
  const ClickEvent4 = () => {
    setSelectData4(!SelectData4);
  };
  const ClickEvent5 = () => {
    setSelectData5(!SelectData5);
  };
  return (
    <div className="add-container3">
      <button
        className={SelectData ? "selectButton" : "lala"}
        onClick={ClickEvent}
      >
        Click me
      </button>
      <button
        className={SelectData2 ? "selectButton" : "lala"}
        onClick={ClickEvent2}
      >
        Click me
      </button>
      <button
        className={SelectData3 ? "selectButton" : "lala"}
        onClick={ClickEvent3}
      >
        Click me
      </button>
      <button
        className={SelectData4 ? "selectButton" : "lala"}
        onClick={ClickEvent4}
      >
        Click me
      </button>
      <button
        className={SelectData5 ? "selectButton" : "lala"}
        onClick={ClickEvent5}
      >
        Click me
      </button>
      <div style={{ margin: "auto" }}>
        <SimpleImageSlider
          autoPlay={true}
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
};

export default Select;
