import React from "react";
import "./PortfolioStyle.css";
import data from "./DB_img.js";

function Portfolio() {
  const Portfoliocolor = {
    color: "#a21b22",
    letterSpacing: "5px",
  };
  const dataholder = data;
  const imagedisplay = dataholder.slice(0, 10).map((item) => {
    return (
      <div className="col-mine-20" key={item.id}>
        <img src={item.image} alt={item.altimg} className="img-fluid" />
      </div>
    );
  });
  return (
    <>
      <h2 className="text-center mt-3" style={Portfoliocolor}>
        PORTFOLIO
      </h2>
      <div className="container-fluid">
        <div className="row">{imagedisplay}</div>
      </div>
    </>
  );
}

export default Portfolio;
