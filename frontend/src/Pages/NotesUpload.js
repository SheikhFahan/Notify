import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


const NotesUpload = () => {
  return (
    <>
    <Container sm>
      <InputGroup className="mb-3" size='lg'>
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Enter the Module Name"
          aria-label="module_n"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Select size='lg'>
        <option>Default select</option>
      </Form.Select>
      <br/>

      <InputGroup className="mb-3" size='lg'>
        <InputGroup.Text id="basic-addon1">Ideal Index</InputGroup.Text>
        <Form.Control
          placeholder="Enter the Ideal Index"
          aria-label="ideal_index"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Check size='lg' className="mb-3"
        type="switch"
        id="custom-switch"
        label="visible"
      />
      
      <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
            //   onChange={}
            //   isInvalid={}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.file} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="dateField">
        <Form.Label>Select a Date:</Form.Label>
        <Form.Control
          type="date"
        //   value={selectedDate}
        //   onChange={handleDateChange}
        />
      </Form.Group>
          </Container>
    </>
  );
}

// date upload and radio
export default NotesUpload