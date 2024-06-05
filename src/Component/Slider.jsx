import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mi_data from "./Data/data.json";

function Slider() {
  const [slidershow, setslidershow] = useState([]);
  useEffect(() => {
    const carouseldata = mi_data.banner.start;
    const sliderdata = carouseldata.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-fluid"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
    setslidershow(sliderdata);
  }, []);

  return (
    <>
      <Carousel fade>{slidershow}</Carousel>;
    </>
  );
}

export default Slider;
