import React,  { useContext } from 'react';

import { Container } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const  LoginPage = () => {
  let {loginUser} = useContext(AuthContext)

    const containerStyle = {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '5%',
    }

    const formStyle = {
        maxWidth : 'fit-content'
    }
  return (
    <Container style={containerStyle}>
    <Form style={formStyle} onSubmit={loginUser}>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"  name='username'/>
        <Form.Text className="text-muted">
          Consider your data leaked.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default LoginPage;