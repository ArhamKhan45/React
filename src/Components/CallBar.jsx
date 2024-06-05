import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Style/CallBar.css";

function CallBar() {
  return (
    <Container fluid className="custom-callbar">
      <Row>
        <Col xs={12} lg={7} className="">
          <p>The Safest Distance Between Two Points.</p>
        </Col>
        <Col xs={12} lg={4} className="">
          <a
            href="https://www.google.com/"
            className=" bg-light  px-lg-5  px-5 py-2"
          >
            call us 5-367-123-4567
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default CallBar;
