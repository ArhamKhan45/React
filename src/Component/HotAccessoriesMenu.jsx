import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HotAccessoriesMenu.css";

function HotAccessoriesMenu() {
  return (
    <div className="HotAccessoriesMenu">
      <Link to="/music" className="HotaccessoriesLink">
        Music Store
      </Link>
      <Link to="/smartDevices" className="HotaccessoriesLink">
        Smart Devices
      </Link>
      <Link to="/home" className="HotaccessoriesLink">
        Home
      </Link>
      <Link to="/lifeStyle" className="HotaccessoriesLink">
        Lifestyle
      </Link>
      <Link to="/mobileAccessories" className="HotaccessoriesLink">
        Mobile Accessories
      </Link>
    </div>
  );
}

export default HotAccessoriesMenu;
