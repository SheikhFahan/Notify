import jwt_decode from 'jwt-decode' 

import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    
    let [AuthTokens ,setAuthTokens] = useState(() =>localStorage.getItem('AuthTokens') ? JSON.parse(localStorage.getItem('AuthTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('AuthTokens') ? jwt_decode(localStorage.getItem('AuthTokens')) : null)
    let [loading, setLoading] = useState(true)

    let loginUser = async(e) => {
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
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('AuthTokens')
        navigate('/login')
    }

    let updateToken = async ()=> {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({'refresh' : AuthTokens?.refresh})
        })

        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('AuthTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(()=>{

        if(loading){
            updateToken()
        }


        let time = 4*60000 //4 minutes
        let interval = setInterval(()=>{
            if(AuthTokens){
                updateToken()
            }
        }, time) 
        return ()=>  clearInterval(interval)
    }, [AuthTokens, loading])

    let contextData = {
        AuthTokens : AuthTokens,
        user : user,
        loginUser: loginUser,
        logoutUser : logoutUser,
    }
    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}