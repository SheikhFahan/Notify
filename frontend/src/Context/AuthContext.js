import jwt_decode from 'jwt-decode' 

import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [AuthTokens ,setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

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
        }else{
            alert("something went wrong!")
        }

        console.log(data)
    }
    
    let contextData = {

        user : user,
        loginUser: loginUser
    }
    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}