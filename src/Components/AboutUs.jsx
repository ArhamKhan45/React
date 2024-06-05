import React from "react";
import "../Style/AboutUs.css";
import g1 from "../Images/g1.jpg";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="custom-about ">
      <Row className="   ">
        <Col lg={6} xxl={5} xs={12} className="ms-auto ">
          <img src={g1} alt="" className="img-fluid" />
        </Col>
        <Col lg={6} xxl={5} xs={12} className="custom-about-info me-auto">
          <h3 className="mb-3">Lorem Ipsum convallis diam</h3>
          <p>
            Pellentesque convallis diam consequat magna vulputate malesuada.
            Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque
            pharetra ac.
          </p>
          <p>
            Lorem Ipsum convallis diam consequat magna vulputate malesuada. Cras
            a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque
            pharetra ac.
          </p>
          <button className=" border border-none py-2 px-4 rounded">
            Read More
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
