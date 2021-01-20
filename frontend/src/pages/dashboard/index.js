import React, { useEffect, useState } from 'react'
import './styles.css'
import Menu from '../../components/menu-log/index'
import MenuBotom from '../../components/menu-bottom/index'
import donate from '../../images/donate.png'
import visit from '../../images/visit.png'
import api from '../../services/api'


export default function Dashboard(){

    const [animals, setAnimals] = useState([])
    const [texto, setTexto] = useState('')
    
    useEffect(()=>{
        (async () =>{
            const { data } = await api.get('/dashboard')
            setAnimals(data.animais)

            if (data.quantidade < 1) {
                setTexto("Nenhum animal encontrado")
            }
            if (data.quantidade === 1) {
                setTexto("Apenas um animal encontrado")
            }
            if (data.quantidade > 1) {
                setTexto(`${data.quantidade} animais encontrados`)
            }

        })()
    },[])
    

    return(
        
        <div className="container-dashboard">
            <Menu/>
            <h1>{texto}</h1>
            <div className="card-deck">
                {animals.map((animal)=>(
                    <div className="card" key={animal.nome}>
                        <div className="card-thumb">
                            <img src={`http://localhost:5000/${animal.imagem}`} alt="card-thumb"/>
                        </div>
                        <div className="card-body">
                            <h3>{animal.nome}, {animal.idade}</h3>
                            <p> <strong>Raca:</strong>{animal.raca} <br/>
                                <strong>Custos:</strong>R${animal.custo}/mes <br/>
                                {animal.descricao} </p>
                            <div className="card-button">
                                <a href="#">
                                    <img src={donate} alt=""/>
                                </a>
                                <a href="#">
                                   <img src={visit} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>                   
          <MenuBotom/>
            
        </div>
    )
}