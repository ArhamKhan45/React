import React from "react";
import "./Footerstyle.css";
function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-footer-color p-2 ">
        <div className="clearfix">
          <span className="text-white float-start">
            <p className="footer-col-font-size mt-2 ms-sm-3">
              All right reserved --Arham Ullah khan
            </p>
          </span>
          <span className="float-end mt-sm-1 ">
            <i className="fa-solid fa-envelope footer-media-icon-border footer-media-icon-color rounded-circle p-sm-2  smallscreen-iconpadding me-2"></i>

            <i className="fa-brands fa-twitter footer-media-icon-border footer-media-icon-color rounded-circle p-sm-2  smallscreen-iconpadding me-2"></i>

            <i className="fa-brands fa-facebook-f footer-media-icon-border footer-media-icon-color rounded-circle p-sm-2  smallscreen-fb-iconpadding me-2"></i>

            <i className="fa-brands fa-vimeo-v footer-media-icon-border footer-media-icon-color rounded-circle p-sm-2  smallscreen-iconpadding me-2"></i>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
