import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";


function CardDisplay() {
    return [
      "Primary",
      "Secondary",
      "Success",
      "Danger",
      "Warning",
      "Info",
      "Light",
      "Dark",
    ].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Important habits</Card.Header>
        <Card.Body>
          <Card.Title>{variant} Card Title </Card.Title>
          <Card.Text>
            Card Text
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }

function Scard() {
    return (
        <div>
            
        </div>
    )
}

export default Scard
