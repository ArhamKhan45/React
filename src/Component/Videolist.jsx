import React from "react";
import "../Styles/Videolist.css";
import svgIcon from "./Data/SvgData";
function HeadingBar(props) {
  const showVideo = props.videoData.map((item, index) => {
    return (
      <div key={index} className="VideolistminiItem">
        <div className="VideolistminiItem1">
          <div className="playbutton">{svgIcon.VideoplayIcon}</div>
          <p>{item.name}</p>
        </div>
        <div className="VideolistminiItem2">
          <img src={item.image} alt="" srcSet="" />
        </div>
      </div>
    );
  });
  return (
    <div className="Videolist">
      <div className="VideolistItem">{showVideo}</div>
    </div>
  );
}

export default HeadingBar;
