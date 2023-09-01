import React, { useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

import axios from 'axios';

const NotesCard = () => {
  let [note, setNote] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/pdf/note/')
    .then(response => setNote(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
    <div>
      {note.map(item => (

      
    
     <Card style={{ width: '18rem' }}>
       <Card.Body>
         <Card.Title>{item.name}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">Prof : {item.prof_name}</Card.Subtitle>
         {/* <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> */}
         <Card.Text>Ideal index : {item.ideal_index}</Card.Text>
         <Card.Title>Subject Code : {item.sub_code}</Card.Title>        
         <Card.Link as={Link} to={item.note}>View Note</Card.Link>
         <Card.Link as={Link} to={item.note} target='_blank' download ={item.note} >Download Note</Card.Link>
       </Card.Body>
     </Card>
     ))}
     </div>
    </>

  )
}

export default NotesCard