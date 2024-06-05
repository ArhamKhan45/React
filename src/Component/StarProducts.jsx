import React from "react";
import "../Styles/StarProducts.css";
import mi_data from "./Data/data.json";
function StarProducts() {
  return (
    <div className="starProduct">
      <div>
        <a href={mi_data.starProduct[0].url}>
          <img src={mi_data.starProduct[0].image} alt="starProduct" srcSet="" />
        </a>
      </div>
      <div>
        <a href={mi_data.starProduct[1].url}>
          <img src={mi_data.starProduct[1].image} alt="starProduct" srcSet="" />
        </a>
        <a href={mi_data.starProduct[2].url}>
          <img src={mi_data.starProduct[2].image} alt="starProduct" srcSet="" />
        </a>
        <a href={mi_data.starProduct[3].url}>
          <img src={mi_data.starProduct[3].image} alt="starProduct" srcSet="" />
        </a>
      </div>
    </div>
  );
}

export default StarProducts;
