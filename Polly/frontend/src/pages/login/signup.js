import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'   
import './styles.css'
import Menu from '../../components/menu/index' 
import logo from '../../images/logo-m.png'
import api from '../../services/api'

export default function Signup({history}){

    const [nome, setNome] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')


    async function handleSubmit(event){
        if(senha !== senhaConfirmada){
            alert("Senhas divergentes")
            return 0
        }

        event.preventDefault()

        const response = await api.post('/signup',{
            'nome':nome,
            'telefone':telefone,
            'email':email,
            'senha': senha            
        })

        history.push('/signin')
    }
    return(
        <div className="container-create-acc">
            < Menu />        
            <div className="form-container">
                <a href="/" className="logo">
                    <img src={logo} alt=""/>
                    Polly
                </a>
                <form onSubmit={handleSubmit} className="form">
                
                    <input type="text" 
                                id="nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                placeholder="Seu Nome"/>

                    <div className="signup-contato">

                        <input type="email" 
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Seu email"/>

                        <CurrencyFormat id="telefone"
                                        format="(##)#####-####"
                                        value={telefone}
                                        onChange={e=> setTelefone(e.target.value)}
                                        placeholder="Telefone"/>
                    </div>
                    
                    <input type="password" 
                            id="password"
                            value={senha}
                            onChange={e=>setSenha(e.target.value)}
                            placeholder="Sua Senha"/>
                    
                    <input type="password" 
                            id="password-confirmed"
                            value={senhaConfirmada}
                            onChange={e=>setSenhaConfirmada(e.target.value)}
                            placeholder="Confirme sua senha"/>
                    
                    <button type="submit">Criar conta</button>
                    <label htmlFor="" className="cadastro">
                    Já tem uma conta ?! Faça &nbsp;
                    <a href="/signin">Login</a>
                </label>
                </form>
            </div>
        
        </div>
    )
}