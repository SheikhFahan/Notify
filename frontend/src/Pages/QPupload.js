import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import AuthContext from "../Context/AuthContext";

const QPupload = () => {
  // subcode fetched from the backend
  let [subCode, setSubCode] = useState([]);
  let [fileData, setFileData] = useState(null);
  let [name, setName] = useState("");
  let [selectedOption, setSelectedOption] = useState("");
  // sets date of submission
  let [date, setDate] = useState("")

  const { AuthTokens } = useContext(AuthContext);

  // handle fetch from backend for sub_codes
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pdf/sub_code/")
      .then((response) => setSubCode(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //handles upload of file
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("questionPaper ", fileData);
    formData.append('date', date);
    formData.append("sub_code", selectedOption);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/pdf/question_paper/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${AuthTokens.access}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  // handles pdf
  const handleFileChange = (e) => {
    setFileData(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // handles selected option
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%",
  };
  const formStyle = {
    maxWidth: "fit-content",
  };

  const submit = {
    float: "inline-end",
  };
  return (
    <>
      <Container style={containerStyle}>
        <form
          style={formStyle}
          onSubmit={handleUpload}
          encType="multipart/form-data"
        >
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <Form.Control
              name="name"
              placeholder="Enter the Module Name"
              aria-label="module_n"
              aria-describedby="basic-addon1"
              required
              onChange={handleNameChange}
            />
          </InputGroup>
          <Form.Select
            size="lg"
            value={selectedOption}
            name="select_subCode"
            onChange={handleSelectChange}
          >
            <option>Select Subject Code</option>
            {subCode.map((item) => (
              <option key={item.sub_code} value={item.sub_code}>
                {item.sub_code}{" "}
              </option>
            ))}
          </Form.Select>
          <br />
           <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="basic-addon1">Submission Date</InputGroup.Text>
            <Form.Control
              name="date"
              placeholder="YYYY-MM-DD"
              aria-label="submission date"
              aria-describedby="basic-addon1"
              required
              onChange={handleDateChange}
            />
          </InputGroup>


          <Form.Group className="position-relative mb-3">
            <Form.Control
              type="file"
              required
              name="file"
              accept=".pdf"
              // value={fileData}
              onChange={handleFileChange}
              //   isInvalid={}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.file} */}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" style={submit}>
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};
export default QPupload;
