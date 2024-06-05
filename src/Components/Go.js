import React from "react";
import "./Go.css";
import banner from "./images/banner.jpg";
function Go() {
  return (
    <div className="container-fluid mb-1 mb-sm-3">
      <div className="row border">
        <div className="col-12 col-md-5 main-setup-box ">
          <div className="easy-to-setup-box">
            <p className="bg-site-red px-sm-5 px-1 py-1 ms-4 d-inline-block  fw-bold text-white mt-5 mt-lg-0">
              INTERACTIVE AGENCY
            </p>
            <h1 className="easy-to-setup">
              EASY TO <br /> SETUP
            </h1>
            <div className="Gobase-shape ">
              <div className="go-box text-center ">
                <h2 className="text-white fw-bold">GO</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 p-0 ">
          <img
            src={banner}
            alt="banner"
            srcSet=""
            className="img-fluid h-100 w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Go;
