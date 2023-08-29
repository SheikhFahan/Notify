import React,  { useContext } from 'react';

import { Container } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const  RegisterPage = () => {


    const containerStyle = {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '5%',
    }

    const formStyle = {
        maxWidth : 'fit-content'
    }

    let registerUserCheck= (e) =>{
        // let username = 'asdf'
        const username1 = e.target.username1.value
        const username2 = e.target.username2.value
        {(username1 === username2) ? registerUser() : alert("usernames don't match")}

    }

    let registerUser = (e) => {
        alert('registred')
    }
    

  return (
    <Container style={containerStyle}>
    <Form style={formStyle} onSubmit={registerUserCheck} target='_blank'>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"  name='username1'/>
        <Form.Text className="text-muted">
          Consider your data leaked.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Re-enter Username"  name='username2'/>
        <Form.Text className="text-muted">
          Consider your data leaked.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default RegisterPage;