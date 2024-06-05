import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import "../Style/SmoothShippingCard.css";
function SmoothShippingCard(props) {
  const CardDisplay = props.data.map((item, index) => {
    return (
      <React.Fragment key="index">
        <Card.Img variant="top" src={props.image} className="img-fluid " />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.body}</Card.Text>
          <Button variant=" btn-outline-warning text-dark rounded-0">
            {item.buttontitle}
          </Button>
        </Card.Body>
      </React.Fragment>
    );
  });
  return (
    <Col
      col={12}
      md={3}
      className={[props.customalign, "custom-basic-Card border-1  mb-4"].join(
        " "
      )}
    >
      <Card style={{}} className="">
        {CardDisplay}
      </Card>
    </Col>
  );
}

export default SmoothShippingCard;
