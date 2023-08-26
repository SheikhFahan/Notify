import React from 'react'
import Card from 'react-bootstrap/Card';


const NotesCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Module1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subject Code</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Ideal index</Card.Text>
        <Card.Title>this is the title</Card.Title>        
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default NotesCard