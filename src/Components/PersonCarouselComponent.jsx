import React, { Component } from "react";
import Slider from "react-slick";

// css
import "../Style/PersonCarouselComponent.css";

// react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import ts1 from "../Images/ts1.jpg";
import ts2 from "../Images/ts2.jpg";
import ts3 from "../Images/ts3.jpg";

// icon
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <AiFillCaretLeft />,
      nextArrow: <AiFillCaretRight />,
    };
    return (
      <div>
        <Slider {...settings} className="custom-mini-carousel">
          <div className="">
            <div className="speech-bubble ">
              <h4>
                Ema Wayans <span>Lorem Ipsum</span>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img
              src={ts1}
              className="mx-auto img-fluid rounded-circle"
              alt="person"
            />
          </div>
          <div>
            <div className="speech-bubble ">
              <h4>
                Mark Rosy <span>Lorem Ipsum</span>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img
              src={ts2}
              className="mx-auto img-fluid rounded-circle"
              alt="person"
            />
          </div>
          <div>
            <div className="speech-bubble ">
              <h4>
                Mario Andretti <span>Lorem Ipsum</span>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img
              src={ts3}
              className="mx-auto img-fluid rounded-circle"
              alt="person"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
