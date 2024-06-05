import React from "react";
import "../Style/Headertext.css";
function Headertext(props) {
  return (
    <div className="Custom-Headertext">
      <h3>{props.headingtext}</h3>
      <p>{props.paratext}</p>
    </div>
  );
}

export default Headertext;
