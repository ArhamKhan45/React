import React from "react";
import "../Styles/navbar.css";
import svgIcon from "./Data/SvgData";
import { Link } from "react-router-dom";
import mi_data from "./Data/data.json";
function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={mi_data.logo} alt="logo" srcSet="" id="logoImage" />
        </Link>
      </div>
      <Link className="navlinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV{" "}
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops Fitness &amp; Lifestyle
      </Link>
      <Link className="navlinks" to="/lifestyle">
        Fitness &amp; Lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/audio">
        Radio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>
      <div className="searchBox">
        <input
          type="text"
          name="SearchProduct"
          id=""
          placeholder="Search Product"
        />
        {svgIcon.searchIcon}
      </div>
    </div>
  );
}

export default Navbar;
