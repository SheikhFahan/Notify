import React, { useState , useEffect, useContext} from 'react'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

import axios from 'axios';
import AssignmentCard from '../Components/AssignmentCard';
import AuthContext from '../Context/AuthContext';

const AssignmentPage = () => {
  let [note, setNote] = useState([])
  
  const {AuthTokens} = useContext(AuthContext)
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/pdf/assignment/',{
      headers: {
        Authorization : `Bearer ${AuthTokens.access}`,
      },
    })
    .then(response => setNote(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
    <div className='flex flex-wrap'>
      {note.map(item => (
                        <AssignmentCard key={item.id} note={item} /> 
     ))}
     </div>
    </>

  )
}

export default AssignmentPage;