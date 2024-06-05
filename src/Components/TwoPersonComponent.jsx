import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import personImage from "../Images/2.png";
import "../Style/Sparrow.css";
import "../Style/TwoPersonComponent.css";
function TwoPersonComponent() {
  return (
    <Container className=" custom-two-person">
      <Row>
        <Col xs="12" lg="6" className=" me-auto ">
          <h3 className="mb-4 fs-2  mt-lg-6">
            Specialtymoves? We’re a company up to the challenge!
          </h3>
          <p className="">
            Pellentesque convallis diam consequat magna vulputate malesuada.
            Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque
            pharetra ac. Lorem Ipsum convallis diam consequat magna vulputate
            malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget
            pulvinar neque pharetra ac.
          </p>
          <p>
            Pellentesque convallis diam consequat magna vulputate malesuada.
            Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque
            pharetra ac. Lorem Ipsum convallis diam consequat magna vulputate
            malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget
            pulvinar neque pharetra ac.
          </p>
          <Button
            variant="outline-warning"
            className="rounded-0 text-dark px-4 py-2 "
          >
            Read More
          </Button>
        </Col>
        <Col xs="12" lg="5">
          <img src={personImage} alt="" srcset="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default TwoPersonComponent;
