import React from "react";
import "../Style/Contactus.css";
import { Container, Row, Col } from "react-bootstrap";

function Contactus() {
  return (
    <Container className="Custom-contactus">
      <Row>
        <Col lg={5} xs={12} className=" ms-auto custom-address">
          <div>
            <h3>Address</h3>
            <p>1234k Avenue,Block-4,New York City.</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d387257.9018922763!2d-73.909643!3d40.686034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1697813534658!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col lg={5} xs={12} className=" send-mail me-auto">
          <h3> Send Us A Mail</h3>
          <form action="/api/v1" method="post">
            <Row>
              <Col xs={6}>
                <label>Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="your name"
                  className="form-control rounded-0 mt-2"
                />
                <br />
                <label>Email</label>
                <br />
                <input
                  type="Email"
                  name=""
                  id=""
                  placeholder="xx@xx.com"
                  className="form-control rounded-0 mt-2"
                />
              </Col>
              <Col className="custom-send-msg-button " xs={6}>
                <input
                  type="submit"
                  value="SEND MESSAGE"
                  className="custom-send-msg-button form-control"
                />
              </Col>
            </Row>
            <br />
            <label>Address</label>
            <br />
            <textarea
              name=""
              id=""
              style={{ resize: "none ", height: "50px" }}
              cols="30"
              rows="10"
              placeholder="Your Address"
              className="form-control rounded-0 mt-2"
            ></textarea>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;

// {

// }
