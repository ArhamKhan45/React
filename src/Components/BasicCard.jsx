import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../Style/BasicCard.css";

function BasicCard(props) {
  const [run, setrun] = useState("");
  const showDisplay = props.Item.map((item, index) => {
    return (
      <div key={index} className="basic-card-showdisplay">
        {props.icon}
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <Button
          href={process.env.REACT_APP_MY_SITE_URL}
          variant="warning"
          className="rounded-0 fw-semibold fs-5 px-4"
        >
          {item.buttontitle}
        </Button>
      </div>
    );
  });
  const showContact = props.Item.map((item, index) => {
    return (
      <div className="basic-card-showContact">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <p>Moving From</p>
        <input
          type="text"
          name=""
          id=""
          className="form-control rounded-0"
          placeholder="Street Address or ZIP code"
        />
        <p>Moving To</p>
        <input
          type="text"
          name=""
          className="form-control rounded-0"
          id=""
          placeholder="Street Address or ZIP code "
        />

        <Button
          href={process.env.REACT_APP_MY_SITE_URL}
          variant="warning"
          className="rounded-0 fw-semibold fs-5 px-4 form-control"
        >
          {item.buttontitle}
        </Button>
      </div>
    );
  });

  useEffect(() => {
    if (props.control === "showDisplay") {
      return setrun(showDisplay);
    }
    if (props.control === "showContact") {
      return setrun(showContact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{run}</>;
}

export default BasicCard;

//  [props.control, showContact, showDisplay]
