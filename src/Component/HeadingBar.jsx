import React from "react";
import "../Styles/HeadingBar.css";
function HeadingBar(props) {
  return (
    <div className="Heading">
      <div></div>
      <p>{props.Text}</p>
      <div></div>
    </div>
  );
}

export default HeadingBar;
