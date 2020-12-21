import React from 'react'
import logo from '../../images/logo-l.png'
import search from '../../images/lupa.png'
import './styles.css'

export default function menuLogged(){
    return(
        <div className="menu-logged">
            <a href="/dashboard" className="brand">
                <img src={logo} alt=""/>
            </a>    
            <div className="search">
                <input type="text" className="search-text" placeholder="search"/>
                <button className="search-button">
                    <img src={search} alt=""/>
                </button>
            </div>
        </div>
    )
}