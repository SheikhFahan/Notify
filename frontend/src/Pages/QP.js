import React, { useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

import axios from 'axios';
import QPCard from '../Components/QPCard';

const QP = () => {
  let [note, setNote] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/pdf/question_paper/')
    .then(response => setNote(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
    <div className='flex flex-wrap'>
      {note.map(item => (

      
    
<QPCard key={item.id} note={item} />
     ))}
     </div>
    </>

  )
}

export default QP;