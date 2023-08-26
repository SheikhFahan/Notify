import React, { useContext } from 'react';

import { Link } from 'react-router-dom'

import AuthContext from '../Context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
    <div>
        <Link to='/' > Home</Link>
        <span> | </span>
        {!user?
            (<p >login</p>) :(
            <p onClick={logoutUser}>logout</p>
            )}
        {user && <p>hey this is {user.username}</p> }
    </div>
  )
}

export default Header