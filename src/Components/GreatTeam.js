import React from "react";
import "./GreatTeamStyle.css";
import greatteam_data from "./GreatTeamDB";
const teamRecord = greatteam_data;
const displayteam = teamRecord.map((item) => {
  return (
    <div
      className="col-6 col-md-3  text-center mx-auto px-xxl-5 mb-1"
      key={item.id}
    >
      <img src={item.image} className="img-fluid" alt=""></img>
      <div className="p-3 mt-1 gt-detail-box ">
        <label className="gtname mb-1">{item.Name}</label>
        <br></br>
        <label className="border border-dark p-sm-1  ">{item.title}</label>
        <p className="">{item.description}</p>
        <i className="fa-solid fa-envelope envolopebox p-2 me-1 rounded-circle"></i>
        <i className="fa-brands fa-twitter twitterbox  p-2 me-1 rounded-circle"></i>
      </div>
    </div>
  );
});

function GreatTeam() {
  return (
    <div className="container p-sm-3 ">
      <div className="text-center">
        <h2 className="greatteamheading greatteamheadingfontsize">
          GREAT TEAM
        </h2>
      </div>
      <p className=" minigt-fontsize mb-md-3 mb-1 text-center">
        We are a full service design agency from the heart of London. We create
        perfect brands, vibrant identities, outstanding websites and creative
        concepts
      </p>
      <div className="row">{displayteam}</div>
    </div>
  );
}
export default GreatTeam;
