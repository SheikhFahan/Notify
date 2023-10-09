import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/AuthContext";


const ProfileCard = () => {
  let [note, setNote] = useState([]);
  const {AuthTokens} = useContext(AuthContext)
  const [notes, setNotes] = useState(false);
  const [assignments, setAssignments] = useState(false);
  const [questionPapers, setQuestionPapers] = useState(false);



  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pdf/note/")
      .then((response) => setNote(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = async (event, pk) => {
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
      <div>
        {note.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title key={item.id}>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" key={item.id}>
                Prof : {item.prof_name}
              </Card.Subtitle>
              {/* <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> */}
              <Card.Text key={item.id}>
                Ideal index : {item.ideal_index}
              </Card.Text>
              <Card.Title key={item.id}>
                Subject Code : {item.sub_code}
              </Card.Title>
              <Card.Link as={Link} to={item.note} key={item.id}>
                View Note
              </Card.Link>
              <Card.Link
                as={Link}
                to={item.note}
                target="_blank"
                download={item.note}
                key={item.id}
              >
                Download Note
              </Card.Link>
              <Button variant="danger" onClick={(e) => handleDelete(e, item.pk)}>Delete Note</Button>

            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ProfileCard;
