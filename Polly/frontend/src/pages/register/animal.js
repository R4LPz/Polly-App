import React, { useState, useMemo } from 'react'
import './styles.css'
import CurrencyFormat from 'react-currency-format'
import logo from '../../images/logo-m.png'
import camera from '../../images/camera.png'
import api from '../../services/api'
import history from '../../history'

export default function CreateAnimal(){
    const [imagem, setImagem] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [custo, setCusto] = useState('')
    const [descricao, setDescricao] = useState('')
    
    const thumbnail = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem) : null
    },[imagem])


    async function handleSubmit(event){
        event.preventDefault()

        let data = new FormData()
        const teste = 'cachorro'

        data.append('image', imagem)
        data.set('nome', nome)
        data.set('idade', idade)
        data.set('especie', teste)
        data.set('raca', raca)
        data.set('custo', custo)
        data.set('descricao', descricao)

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        await api.post('/add-animal', data , config)

        history.push('/dashboard')
    }

    

    return (
        <div className="container-animal">

            <div className="form-container">
                <a href="/dashboard" className="logo">
                    <img src={logo} alt=""/>
                    Polly
                </a>
                
                <form  className="form-register">
                    
                    <label id="imagem"
                        style={{ backgroundImage: `url(${thumbnail})`}}
                        className={imagem ? 'has-image' : ''}
                    >
                        <input type="file" onChange={event => {
                            setImagem (event.target.files[0])}
                        }/>
                        <img src={camera} alt="Enviar imagem" />
                    </label>

                    <input type="text"
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Nome do animal"
                    />

                    <div className="identificacao-animal">
                        <select id="especie"
                                onChange={e => setEspecie(e.target.value)}
                                >
                            <option value={especie}>Espécie</option>
                            <option value={especie}>Cachorro</option>
                            <option value={especie}>Gato</option>
                            <option value={especie}>Aves</option>
                            <option value={especie}>Outros</option>
                        </select>

                        <input type="text" 
                                id="raca"
                                value={raca}
                                onChange={e=> setRaca(e.target.value)}
                                placeholder="Raça"/>
                    </div>


                    <div className="custo-animal">
                        <CurrencyFormat  thousandSeparator={true}                                          
                                          id="custos"
                                          value={custo}
                                          onChange={e => setCusto(e.target.value)}
                                          placeholder="Custos"/>

                        <input type="number"
                                id="idade"
                                value={idade}
                                onChange={e => setIdade(e.target.value)}
                                placeholder="idade"/>
                    </div>

                    <textarea  id="descricao"
                               cols="3"
                               rows="3"
                               value={descricao}
                               onChange={e => setDescricao(e.target.value)}
                               placeholder="Descrição da Animal">
                    </textarea>

                    <button onClick={handleSubmit} type="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}