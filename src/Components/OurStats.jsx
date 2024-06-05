import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import "../Style/OurStats.css";
import CounterAnimate from "./CounterAnimate";

function OurStats() {
  return (
    <React.Fragment>
      <Container fluid className="custom-OurStats">
        <Row>
          <Col xs={12}>
            <h3 className=""> Our Stats</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={7} md={8} className="mx-auto">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
              inventore consectetur dolorum, voluptatum possimus temporibus vel
              ab, nesciunt quod!
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="custom-counter-stats text-center">
        <Row>
          <Col lg={3} xs={12} className="ms-lg-auto">
            <CounterAnimate start={0} end={1546} id="Satisfiedclients" />
            <p className="">Satisfied clients</p>
            <p>Pure satisfaction</p>
          </Col>
          <Col lg={3} xs={12} className="mx-lg-auto">
            <CounterAnimate start={0} end={14345} id="SuccessfulShippings" />
            <p className="">Successful Shippings</p>
            <p>Shipping</p>
          </Col>
          <Col lg={3} xs={12} className="me-lg-auto">
            <CounterAnimate start={0} end={563} id="BranchesWorldwide" />
            <p className="">Branches Worldwide</p>
            <p>Highest level of credibility</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default OurStats;
