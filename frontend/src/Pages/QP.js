import React, { useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

import axios from 'axios';

const QP = () => {
  let [note, setNote] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/pdf/question_paper/')
    .then(response => setNote(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
    <div>
      {note.map(item => (

      
    
     <Card style={{ width: '18rem' }}>
       <Card.Body>
         <Card.Title key= {item.id}>{item.name}</Card.Title>
         {/* <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> */}
         <Card.Title key= {item.id}>Subject Code : {item.sub_code}</Card.Title>  
         <Card.Title key= {item.id}>Date : {item.date}</Card.Title>        

         <Card.Link as={Link} to={item.note} key= {item.id}>View QuetionPaper</Card.Link>
         <Card.Link as={Link} to={item.note} target='_blank' download ={item.note} key= {item.id} >Download QuestionPaper</Card.Link>
       </Card.Body>
     </Card>
     ))}
     </div>
    </>

  )
}

export default QP;