import React, { useContext, useState } from "react";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../Context/AuthContext";

import axios from "axios";

const RegisterPage = () => {
  const { AuthTokens } = useContext(AuthContext);

  let [username, setUsername] = useState("");

  let [passwords, setPasswords] = useState({
    password1: "",
    password2: "",
  });

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  };

  const formStyle = {
    maxWidth: "fit-content",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.password1 !== passwords.password2) {
      console.error("passwords do not match");
      return;
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", passwords.password1);

    try {
      const response = await axios.post(
        "//127.0.0.1:8000/api/create_user/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AuthTokens.access}`,
          },
        }
      );
      console.log("Response", response.data);
    } catch (error) {

      console.error("Registration failed:", error);
    }
  };

  return (
    <Container style={containerStyle}>
      <Form style={formStyle} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleUsername}
          />
          <Form.Text className="text-muted">
            Consider your data leaked.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password1"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter Password"
            name="password2"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
