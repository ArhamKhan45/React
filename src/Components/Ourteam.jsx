import React from "react";
import "../Style/Ourteam.css";
import { Container, Row, Col } from "react-bootstrap";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";
import t3 from "../Images/t3.jpg";
import t4 from "../Images/t4.jpg";
import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";
function Ourteam() {
  return (
    <Container className="Custom-Ourteams mb-lg-5">
      <Row>
        <Col lg={3} xs={12} sm={6} className="mb-3 text-center  ">
          <img src={t1} alt="" className="img-fluid " />
          <div class="title">
            <h3>John Doe</h3>
            <p>Lorem</p>
            <div>
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <BsPinterest />
              </span>
            </div>
          </div>
        </Col>
        <Col lg={3} xs={12} sm={6} className="mb-3 text-center">
          <img src={t2} alt="" className="img-fluid " />
          <div class="title">
            <h3>John Doe</h3>
            <p>Lorem</p>
            <div>
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <BsPinterest />
              </span>
            </div>
          </div>
        </Col>
        <Col lg={3} xs={12} sm={6} className="mb-3 text-center">
          <img src={t3} alt="" className="img-fluid " />
          <div class="title">
            <h3>John Doe</h3>
            <p>Lorem</p>
            <div>
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <BsPinterest />
              </span>
            </div>
          </div>
        </Col>
        <Col lg={3} xs={12} sm={6} className="mb-3 text-center">
          <img src={t4} alt="" className="img-fluid" />
          <div class="title">
            <h3>John Doe</h3>
            <p>Lorem</p>
            <div>
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <BsPinterest />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ourteam;
