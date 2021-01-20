import React from 'react'
import './styles.css'
import logo from '../../images/logo-l.png'

export default function menu(){
    return(
        <div className="menu">

        <a href="/" className="brand">
            <img src={logo} alt=""/>
            Polly        
        </a>
        <ul className="link-container">                    
            <li className="link">
                <a href="/signin">Entrar</a>
            </li>
            <li className="link">
                <a href="/signup">Criar conta</a>
            </li>
        </ul>
    </div>
    )
}