import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import offerdata from "./Data/data.json";
import "../Styles/Offers.css";

function Offers() {
  const [OffersShow, setOffersshow] = useState([]);
  useEffect(() => {
    const offerInfo = offerdata.offer;
    const OfferShow = offerInfo.map((item, index) => {
      return (
        <div key={index}>
          <a href={item.url}>
            <img src={item.image} alt="" srcSet="" />
          </a>
        </div>
      );
    });
    setOffersshow(OfferShow);
  }, []);
  return <div className="offersSection">{OffersShow}</div>;
}

export default Offers;
