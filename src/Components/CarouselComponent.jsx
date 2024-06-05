import React, { useState } from "react";

// adding css
import "../Style/CarouselComponent.css";

import Carousel from "react-bootstrap/Carousel";
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={bg1} alt="First slide" />
        <Carousel.Caption>
          <h3>Start Moving</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
            Malesuada Neque Et Turpis Hendrerit, Et Porta Dui Efficitur. Aenean
            Auctor Dui Sit Amet Aliquet Mollis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={bg2} alt="First slide" />
        <Carousel.Caption>
          <h3>Start Moving</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
            Malesuada Neque Et Turpis Hendrerit, Et Porta Dui Efficitur. Aenean
            Auctor Dui Sit Amet Aliquet Mollis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={bg3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="">Start Moving</h3>
          <p className=" ">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
            Malesuada Neque Et Turpis Hendrerit, Et Porta Dui Efficitur. Aenean
            Auctor Dui Sit Amet Aliquet Mollis.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function CarouselComponent() {
  return (
    <div className="custom-carousel ">
      <ControlledCarousel />
    </div>
  );
}

export default CarouselComponent;
