import React from "react";
import "./Services.css";
import dottedborder from "./images/dotted-border.jpg";
import Servicedata from "./ServiceDB";
function Services() {
  const servicesShow = Servicedata.map((item) => {
    return (
      <div
        class=" accordion-button  collapsed bg-transparent  custom-col-3  text-center  text-white"
        key={item.id}
        data-bs-toggle="collapse"
        data-bs-target={["#demo", item.id].join("")}
        aria-expanded="false"
        aria-controls={["demo", item.id].join("")}
      >
        <div className="text-center">
          <i
            className={[
              item.class,
              " service-icon text-center rounded-circle mb-2 mb-sm-3 ",
            ].join(" ")}
          ></i>
          <label className="miniservice-fontsize mx-auto">{item.label}</label>
        </div>
      </div>
    );
  });
  const servicesShowItem = Servicedata.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div
          id={["demo", item.id].join("")}
          class="accordion-collapse collapse  container-fluid text-white"
          aria-labelledby={["flush-heading", item.id].join("")}
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body text-center service-icon-open-box col-12">
            <p className="serviceheadingfontsize text-center">
              {item.label.toUpperCase()}
            </p>
            <div className="miniservice-fontsize mx-auto col-8 text-center">
              <p>{item.description}</p>
              <p>{item.description}</p>
              <button className="btn project-btn miniservice-fontsize">
                HAVE A PROJECT?
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="container-fluid service-main-box mt-4 ">
      <div className="row">
        <div className="col-12 col-sm-10 mx-auto">
          <div className="text-center">
            <h2 className="serviceheading serviceheadingfontsize">
              OUR SERVICES
            </h2>
            <p className=" miniservice-fontsize mb-md-3 mb-1 text-center">
              We are a full service design agency from the heart of London. We
              create perfect brands, vibrant identities, outstanding websites
              and creative concepts
            </p>
            <img
              src={dottedborder}
              alt=""
              className="img-fluid w-100 mb-sm-5"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div class="accordion col-12 " id="accordionFlushExample">
          <div class=" accordion-item bg-transparent  row">
            {servicesShow}
            {servicesShowItem}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
