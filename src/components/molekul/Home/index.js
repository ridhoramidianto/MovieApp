import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <Card id="center">
        <Card.Body>
          <Card.Title>React Class</Card.Title>
          <Card.Text>React Advance</Card.Text>
          <Button href="/presence">Presence</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
