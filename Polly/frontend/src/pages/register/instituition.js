import React, { useState, useMemo } from 'react'
import './styles.css'
import CurrencyFormat from 'react-currency-format'
import logo from '../../images/logo-m.png'
import camera from  '../../images/camera.png'
import api from '../../services/api'
import history from '../../history'

export default function CreateInstituition(){
    const [imagem, setImagem] = useState('')
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [descricao, setDescricao] = useState('')

    const thumbnail = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem) : null
    },[imagem])


    async function handleSubmit(event){
        event.preventDefault()

        let data = new FormData()

        data.append('image', imagem)
        data.set('nome', nome)
        data.set('endereco', endereco)
        data.set('numero', numero)
        data.set('cidade', cidade)
        data.set('estado', estado)
        data.set('telefone', telefone)
        data.set('email', email)
        data.set('descricao', descricao)

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        await api.post('/add-instituition', data , config)

        history.push('/dashboard')
    }

    

    return (
        <div className="container-instituition">
            
            <div className="form-container"> 
                <a href="/dashboard" className="logo">
                    <img src={logo} alt=""/>
                    Polly
                </a>
                <form className="form-register">                        
                    <label id="imagem"
                            style={{ backgroundImage: `url(${thumbnail})`}}
                            className={imagem ? 'has-image' : ''}>

                        <input type="file" onChange={event => {
                            setImagem (event.target.files[0])
                            }}/>
                        <img src={camera} alt="Enviar imagem" />
                    </label>
                    
                    <input type="text"
                            id="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Nome da empresa"/>

                    <div className="endereco">
                        <input type="text"
                                id="endereco"
                                value={endereco}
                                onChange={e=> setEndereco(e.target.value)}
                                placeholder="Endereço"/>

                        <input type="text"
                                id="numero"
                                value={numero}
                                onChange={e=>setNumero(e.target.value)}
                                placeholder="Número"/>
                    </div>

                    <div className="localizacao">
                        <input type="text"
                                id="estado"
                                value={estado}
                                onChange={e=>setEstado(e.target.value)}
                                placeholder="estado"/>

                        <input type="text"
                                id="cidade"
                                value={cidade}
                                onChange={e=>setCidade(e.target.value)}
                                placeholder="cidade"/>
                    </div>

                    <div className="contato">
                        <CurrencyFormat id="telefone"
                                        format="(##)#####-####"
                                        value={telefone}
                                        onChange={e=> setTelefone(e.target.value)}
                                        placeholder="Telefone"/>
                        <input type="email"
                                id="email"
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                placeholder="E-mail"/>
                    </div>

                    <textarea id="descricao"
                                cols="3"
                                rows="3"
                                value={descricao}
                                onChange={e=> setDescricao(e.target.value)}
                                placeholder="Descrição da empresa"></textarea>

                    <button type="button" onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}