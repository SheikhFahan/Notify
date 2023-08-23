import jwt_decode from 'jwt-decode' 

import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    
    let [AuthTokens ,setAuthTokens] = useState(() =>localStorage.getItem('AuthTokens') ? JSON.parse(localStorage.getItem('AuthTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('AuthTokens') ? jwt_decode(localStorage.getItem('AuthTokens')) : null)

    let loginUser = async(e) => {
        console.log('working')
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({'username' : e.target.username.value ,'password' : e.target.password.value})
        })

        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('AuthTokens', JSON.stringify(data))
            navigate('/')
        }else{
            alert("something went wrong!")
        }
        
        console.log(data)
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('AuthTokens')
    }
    
    let contextData = {

        user : user,
        loginUser: loginUser,
        logoutUser : logoutUser
    }
    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}