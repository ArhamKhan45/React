import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../Style/CustomerSays.css";
import PersonCarouselComponent from "./PersonCarouselComponent";

function CustomerSays() {
  return (
    <Container fluid className="border border-1 mt-lg-5 custom-customer-say">
      <Row className="mb-4">
        <Col lg={6}>
          <h3 className="">Customer Says</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum
            inventore consectetur dolorum, voluptatum possimus temporibus vel
            ab, nesciunt quod!
          </p>
        </Col>
      </Row>

      <Row>
        <PersonCarouselComponent />
      </Row>
    </Container>
  );
}

export default CustomerSays;
