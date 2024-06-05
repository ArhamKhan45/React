import React from "react";
import "../Style/Madeby.css";
import { Container, Row, Col } from "react-bootstrap";

function Madeby() {
  return (
    <Container fluid className="custom-madeby">
      <Row>
        <Col xs={12}>
          <p>
            &#169; 2023 Shipping. All rights reserved | Design by
            <a
              style={{
                color: "#ffdd15",
                marginLeft: "10px",
                textDecoration: "none",
              }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karham2452@gmail.com"
            >
              Arham Ullah khan
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Madeby;
