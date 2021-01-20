import React, { useContext, useState } from 'react'
import './styles.css'
import Menu from '../../components/menu/index'
import logo from '../../images/logo-m.png'

import { Context } from '../../context/AuthContext'



export default function Login(){

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    
    const { handleLogin } = useContext(Context)

    return(
        <div className="container-login">
        
        < Menu />

        <div className="form-container">

            <a href="/" className="logo">
                <img src={logo} alt=""/>
                Polly
            </a>
        
            <form className="form">
                
                <input type="email" 
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Seu email"/>
                
                
                <input type="password" 
                        id="password"
                        autoComplete="on"
                        value={senha}
                        onChange={e=>setSenha(e.target.value)}
                        placeholder="Sua Senha"/>
                <button type="button" onClick={()=>{handleLogin(email,senha)}}  >Fazer Login</button>
                <label htmlFor="" className="cadastro">
                    Não tem uma conta ?!&nbsp;
                    <a href="/signup">Cadastre-se</a>
                </label>
            </form>


        </div>
        </div>
    )
}