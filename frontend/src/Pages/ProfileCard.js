import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProfileCard = () => {
  return (
    <Container fluid>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Mr Professor name </Card.Title>
        <Card.Header>Asst Professor CSE</Card.Header>
        <Card.Header>Professor@email.com</Card.Header>
        <Card.Text>
            This is the professor detail
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default ProfileCard;
