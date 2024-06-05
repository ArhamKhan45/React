import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SvgData from "./SvgData";
import { Link } from "react-router-dom/cjs/react-router-dom";

import g1 from "../Images/g1.jpg";
import g2 from "../Images/g2.jpg";
import g3 from "../Images/g3.jpg";
// css
import "../Style/FooterComponent.css";

function FooterComponent() {
  return (
    <Container
      fluid
      className="py-5 border-bottom border-dark custom-main-footer"
    >
      <Row>
        <Col lg={2} xs={12} sm={6} className="ms-lg-auto  mb-4">
          <h4>Shipping</h4>
          <p>
            Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora.
          </p>

          <div className="row">
            <Col xs={12} className="footer-mini-social-icons">
              <a href="https://www.youtube.com/" className="">
                {SvgData.facebookIcon}
              </a>
              <a href="https://www.youtube.com/">{SvgData.twitterIcon}</a>
              <a href="https://www.youtube.com/">{SvgData.instagramIcon}</a>
              <a href="https://www.youtube.com/">{SvgData.pinterestIcon}</a>
            </Col>
          </div>
        </Col>
        <Col lg={2} xs={12} sm={6} className="mb-4">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Service">Services</Link>
            </li>
            <li>
              <Link to="/">Arham</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col lg={3} xs={12} sm={6} className="mb-4 custom-insta-footer">
          <h4>Instagram</h4>
          <Row className="mt-3 me-auto">
            <Col xs={4}>
              <img src={g1} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col xs={4}>
              <img src={g2} alt="" srcset="" className="img-fluid " />
            </Col>
            <Col xs={4} className="">
              <img src={g3} alt="" srcset="" className="img-fluid " />
            </Col>
          </Row>
          <Row className="mt-3 me-auto">
            <Col xs={4}>
              <img src={g1} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col xs={4}>
              <img src={g2} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col xs={4}>
              <img src={g3} alt="" srcset="" className="img-fluid" />
            </Col>
          </Row>
          <Row className="mt-3 me-auto">
            <Col xs={4}>
              <img src={g1} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col xs={4}>
              <img src={g2} alt="" srcset="" className="img-fluid" />
            </Col>
            <Col xs={4}>
              <img src={g3} alt="" srcset="" className="img-fluid" />
            </Col>
          </Row>
        </Col>
        <Col lg={3} xs={12} sm={6} className=" me-auto custom-contact-info ">
          <h4>Contact Information</h4>
          <div className="row mt-4">
            <Col lg={1} xs={2}>
              {SvgData.phoneIcon}
            </Col>
            <Col lg={10} xs={10} className=" ms-lg-auto">
              <p>Phone Number</p>
              <p>+1 234 567 8901</p>
            </Col>
          </div>
          <div className="row">
            <Col lg={1} xs={2}>
              {SvgData.googleMail}
            </Col>
            <Col lg={10} xs={10} className=" ms-lg-auto">
              <p>Email Address</p>
              <p>
                Arham :
                <a
                  style={{
                    color: "#ffdd15",
                    marginLeft: "10px",
                    textDecoration: "none",
                  }}
                  className="text-warning"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=karham2452@gmail.com"
                >
                  karham2452@gmail.com
                </a>
              </p>
            </Col>
          </div>
          <div className="row">
            <Col lg={1} xs={2} className="">
              <span className="">{SvgData.currentLocation}</span>
            </Col>
            <Col lg={10} xs={10} className=" ms-lg-auto">
              <p>Location</p>
              <p className="w-lg-80">1234k Avenue,Block-4,New York City.</p>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
