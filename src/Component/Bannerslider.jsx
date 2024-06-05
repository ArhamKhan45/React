import React from "react";
import "../Styles/Bannerslider.css";
import Carousel from "react-bootstrap/Carousel";

function Bannerslider(props) {
  const slidershow = props.bannerData.map((item, index) => {
    return (
      <Carousel.Item
        key={index}
        className="custom-Carousel-Item"
        interval={1000}
        keyboard={true}
      >
        <img className="d-block w-100" src={item.image} alt="First slide" />
        <Carousel.Caption className="custom-Carouselcaption-Item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.source}</p>
          <a href="https://www.mi.com/in/" className="text-white">
            Read More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return <Carousel fade>{slidershow}</Carousel>;
}

export default Bannerslider;
