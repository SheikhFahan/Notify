import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AuthContext from '../Context/AuthContext';



const VisibilityChange = () => {
    const {AuthTokens} = useContext(AuthContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/pdf/notes_prof/",  {
          headers: {
            Authorization: `Bearer ${AuthTokens.access}`,
          },
        })
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error fetching data:", error));
    })
  return (
    <div>VisibilityChange</div>
  )
}

export default VisibilityChange