import React from "react";
import "../Styles/HotAccessories.css";
function HotAccessories(props) {
  const displaydata = props.hotAccessoriesData.map((item, index) => {
    return (
      <div key={index} className="itemlink">
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  });
  return (
    <div className="mainHotAccessories">
      <div>
        <img src={props.cover} alt="cover" srcSet="" />
      </div>
      <div className="itemdisplay">
        {displaydata}
        <div className="itemlink">
          <img
            src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"
            alt="undefined product"
          />
        </div>
      </div>
    </div>
  );
}

export default HotAccessories;
