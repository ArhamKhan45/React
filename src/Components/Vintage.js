import React from "react";
import VintageDB from "./VintageDB";
import GetImpresssBtn from "./GetImpresssBtn";
import "./Vintage.css";
const displayshow = VintageDB.map((item) => {
  // colormaker
  let coloured_str = "";
  const titleCaption = item.titleCaption;
  item.titleCaptioncolored = item.titleCaptioncolored.toUpperCase();
  if (titleCaption.match(item.titleCaptioncolored)) {
    let foundDataindex = titleCaption.indexOf(item.titleCaptioncolored);
    let coloreditemlen = item.titleCaptioncolored.length;
    let str1 = item.titleCaption.substring(0, foundDataindex);
    let midstr = item.titleCaption.substring(
      foundDataindex,
      foundDataindex + coloreditemlen
    );
    let str2 = item.titleCaption.substring(foundDataindex + coloreditemlen);

    // console.log(true, coloreditemlen, foundDataindex, str1, str2);

    coloured_str = (
      <p>
        {str1} <span style={{ color: "#9a1125" }}>{midstr}</span>
        {str2}
      </p>
    );
  } else {
    coloured_str = item.titleCaption;
  }
  return (
    <div className="vintage-box text-center " key={item.id}>
      <img
        src={item.image}
        alt="vintage-logo"
        className="img-fluid rotation-animation vintage-logo-box "
      />
      <p className="vintage-title">{item.title}</p>
      <div className="vintage-subtitle1">{coloured_str}</div>
      <div className="vintage-subtitle2 mt-1 mt-sm-2 mt-xl-3">
        <p>{item.description}</p>
      </div>
      <img src={item.imagebar} alt="vintage-logo" className="img-fluid" />
    </div>
  );
});
function Vintage() {
  return (
    <>
      <div className="container-fluid pb-3 ">
        {/* *create one file and set a logo first and ue slice ().map() and and
      remaining 3 will be images  */}
        <div>{displayshow}</div>
      </div>
      <div className="mb-2 mb-sm-4">
        <GetImpresssBtn />
      </div>
    </>
  );
}

export default Vintage;
