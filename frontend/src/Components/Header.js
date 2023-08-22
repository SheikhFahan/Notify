import React, { useContext } from 'react';

import { Link } from 'react-router-dom'

import AuthContext from '../Context/AuthContext'

const Header = () => {
    let {user} = useContext(AuthContext) 
    return (
    <div>
        <Link to='/' > Home</Link>
        <span> | </span>
        {/* {user === null ?
            <p>login</p>:
            <p>logout</p>} */}
        <Link to='/login' > Login</Link>
        {user && <p>hey this is {user.username}</p> }
    </div>
  )
}

export default Header