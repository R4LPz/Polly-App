import React from 'react'
import './styles.css'
import dog from '../../images/dog.png'
import cat from '../../images/cat.png'
import fish from '../../images/fish.png'
import bird from '../../images/bird.png'
import add from '../../images/add.png'
import animal from '../../images/add-animal.png'
import location from '../../images/add-shelter.png'


export default function menu(){
    
    const hamburguerActive = ()=>{
        const button = document.getElementsByClassName("add-hamburguer") 
        button[0].classList.toggle("active")
    }

    const selectorActive = (e)=>{
        const target = document.getElementById(e.target.id)
        target.classList.toggle("selected")
        
    }
    return(
        <div className="menu-bottom">

        <div className="icons-container">
            
            <img onClick={selectorActive}  src={dog} alt="" className="teste" id="dog"/>
            
            
            <img onClick={selectorActive}  src={cat} alt="" id="cat"/>
            

            <div onClick={hamburguerActive} className="add-hamburguer">

                <img className="hamburguer-button" src={add} alt=""/>
                <a className="hamburguer-option" href="/add-animal">
                    <img src={animal} alt=""/>
                </a>
                <a className="hamburguer-option" href="/add-instituition">
                    <img src={location} alt=""/>
                </a>

            </div>
            
            
            <img onClick={selectorActive}  src={bird} alt="" id="bird"/>
            
            
            <img onClick={selectorActive}  src={fish} alt="" id="other"/>
            

        </div>
    </div>
    )
}