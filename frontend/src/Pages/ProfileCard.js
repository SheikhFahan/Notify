import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import CustomCard from "../Components/CustomCard";
import QPCard from "../Components/QPCard";
import AssignmentCard from "../Components/AssignmentCard";



const ProfileCard = () => {
  let [note, setNote] = useState([]);
  const {AuthTokens} = useContext(AuthContext)
  const [assignments, setAssignments] = useState([]);
  const [questionPapers, setQuestionPapers] = useState([]);



  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pdf/notes_prof/",  {
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .then((response) => setNote(response.data))
      .catch((error) => console.error("Error fetching data:", error));
      axios
      .get("http://127.0.0.1:8000/api/pdf/assignments_prof/",  {
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .then((response) => setAssignments(response.data))
      .catch((error) => console.error("Error fetching data:", error));
      axios
      .get("http://127.0.0.1:8000/api/pdf/qp_prof/",  {
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .then((response) => setQuestionPapers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNoteDelete = async (event, pk) => {
    try {
      event.preventDefault();
      const response = await axios.delete(`http://127.0.0.1:8000/api/pdf/${pk}/delete_note/`
      ,{
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .catch((error) => console.error("Error fetching data:", error));
      console.log(response)
    }catch (error) {
      console.log(error)
      alert('something went wrong')
    }
  }
  const handleAssignmentDelete = async (event, pk) => {
    try {
      event.preventDefault();
      const response = await axios.delete(`http://127.0.0.1:8000/api/pdf/${pk}/delete_assignment/`
      ,{
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .catch((error) => console.error("Error fetching data:", error));
      console.log(response)
    }catch (error) {
      console.log(error)
      alert('something went wrong')
    }
  }
  const handleQPDelete = async (event, pk) => {
    try {
      event.preventDefault();
      const response = await axios.delete(`http://127.0.0.1:8000/api/pdf/${pk}/delete_qp/`
      ,{
        headers: {
          Authorization: `Bearer ${AuthTokens.access}`,
        },
      })
      .catch((error) => console.error("Error fetching data:", error));
      console.log(response)
    }catch (error) {
      console.log(error)
      alert('something went wrong')
    }
  }



  return (
    <Container fluid>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Mr Professor name </Card.Title>
          <Card.Header>Asst Professor CSE</Card.Header>
          <Card.Header>Professor@email.com</Card.Header>
          <Card.Text>This is the professor detail</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <p>under this are the notes corresponding to the user</p>
      <div className="flex flex-wrap">
        {note.map((item) => (
         <CustomCard key={item.id} note={item} type={'prof'} handleDelete={handleNoteDelete}/> 
        ))}
      </div>
     <p>under this there are the assignments</p>       
      <div className="flex flex-wrap">
        {assignments.map((item) => (
         <AssignmentCard key={item.id} note={item} type={'prof'} handleDelete={handleAssignmentDelete}/> 
        ))}
      </div>     
     <p>under this there are the question papers</p>       

      <div className="flex flex-wrap">
        {questionPapers.map((item) => (
         <QPCard key={item.id} note={item} type={'prof'} handleDelete={handleQPDelete}/> 
        ))}
      </div>
    </Container>
  );
};

export default ProfileCard;
