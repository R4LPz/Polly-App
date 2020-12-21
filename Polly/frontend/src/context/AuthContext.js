import React, { useState,useEffect, createContext }  from 'react'
import api from '../services/api'
import history from '../history'


const Context = createContext()

function AuthProvider({ children }){

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
        setLoading(false)
    },[])

    async function handleLogin(email,senha){
        const { data: {token} } = await api.post('/signin',{
            'email': email,
            'senha': senha
        })
        if(token){
            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers.Authorization = `Bearer ${token}`
            setAuthenticated(true)
            history.push('/dashboard')
        }
    }

    // função para caso usuario queira fazer logout
    // function handleLogout(){
    //     localStorage.removeItem('token')
    //     api.defaults.headers.Authorization = undefined
    //     history.push('/')
    //     setAuthenticated(true)
    // }

    if(loading){
        return <h1>Loading ...</h1>
    }

    return(
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}

