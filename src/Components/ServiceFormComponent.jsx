import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import BasicCard from "./BasicCard";
// adding css
import "../Style/ServiceFormComponent.css";
// data
import Dhomepage from "../Data/Dhomepage.json";
//svg data
import svgIcon from "../Components/SvgData.js";

function ServiceFormComponent() {
  return (
    <Container className="custom-service-form-quote">
      <Row className="">
        <Col xs="12" md="4" className="ms-auto gx-4 mb-4 mb-md-0 ">
          <BasicCard
            Item={Dhomepage.WorldwideCustomers}
            icon={svgIcon.earthIcon}
            control="showDisplay"
          />
        </Col>

        <Col xs="12" md="4" className=" mx-auto gx-4 mb-4 mb-md-0">
          <BasicCard
            Item={Dhomepage.PersonalManager}
            icon={svgIcon.userIcon}
            control="showDisplay"
          />
        </Col>
        <Col xs="12" md="4" className="gx-4 mb-4 mb-md-0">
          <BasicCard Item={Dhomepage.GetAFreeQuote} control="showContact" />
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceFormComponent;
