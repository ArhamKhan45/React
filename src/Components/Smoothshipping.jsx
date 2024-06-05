import React from "react";
import { Container, Row } from "react-bootstrap";
import SmoothShippingCard from "./SmoothShippingCard";
import Dhomepage from "../Data/Dhomepage.json";
// Adding CSS
import "../Style/SmoothShipping.css";
import g1 from "../Images/g1.jpg";
import g2 from "../Images/g2.jpg";
import g3 from "../Images/g3.jpg";
import Headertext from "./Headertext";
// images

function Smoothshipping() {
  return (
    <Container className="custom-Smooth-shipping mt-5 mb-5">
      <Row className="custom-mini-Smooth-shipping-1">
        <Headertext
          headingtext="Smooth Shipping"
          paratext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!"
        />
      </Row>
      <Row className="custom-mini-Smooth-shipping-2 gx-0 mt-2">
        <SmoothShippingCard
          data={Dhomepage.MovingWorldwide}
          image={g1}
          customalign="ms-md-auto"
        />
        <SmoothShippingCard
          data={Dhomepage.Everydayismovingday}
          image={g2}
          customalign="mx-md-4"
        />
        <SmoothShippingCard
          data={Dhomepage.ThirdPartyServices}
          image={g3}
          customalign="me-md-auto"
        />
      </Row>
    </Container>
  );
}

export default Smoothshipping;
