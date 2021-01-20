import React from 'react'
import Menu from '../../components/menu/index'
import './styles.css'
import teste from '../../images/6.png'
import teste2 from '../../images/map.png'
import teste3 from '../../images/world_connection_.png'
import teste4 from '../../images/dog_walking_isometric.png'


export default function LandingPage(){
    return(
        <div className="">

                <Menu/>
                <div className="content-1">
                    <img src={teste} alt="img1"/>
                    <div className="text">
                        <h1>Oi amigo,</h1>
                        <h3>
                            nós precisamos da sua ajuda e carinho, e agora com o Polly você pode nos ajudar,
                            <br/> é so fazer seu cadastro e agendar uma visita ou fazer uma doação.
                            <strong>Woof.</strong> 
                        </h3>
                        <div className="links">
                            <a href="/signup">Criar conta</a>
                            <a href="/signin">Entrar</a>
                        </div>
                    </div>
                </div>


            <div className="content-2">
                <div className="text">
                    <h3>Queremos que os animais necessitados sejam encontrados, e ajudados.</h3>
                    <p>Sabemos que a realidade dos animais de rua é cruel, e que a vida de pessoas que resgatam esses animais é dificil.
                        por isso nosso objetivo e fazer com que animais de rua, ou que estejam em abrigos, possam ser vistos por mais pessoas, e desse forma ajudados</p>
                    <h3></h3>
                </div>
                <img src={teste2} alt=""/>
            </div>
            <div className="content-2">
                <img src={teste3} alt=""/>
                <div className="text">
                    <h3>Queremos conectar não só pessoas, quer conectar raças.</h3>
                    <p>Você pode ser dos amantes dos latidos, pode adorar ver novelos rolarem, pode ser um apreciador de cantos e voos, ou simplesmente ser apreciador de animais exóticos, Polly é um lugar de todos e pra todos, em que o principal objetivo é a união. </p>
                </div>
            </div>
            <div className="content-2">
                <div className="text">
                    <h3>Nós nos preocupamos com sua saúde</h3>
                    <p>Além de companheiros e considerados parte da família animais previnem doenças. Relatos descobriram isso na prática que ter um animal de estimação proporciona muitas vantagens físicas e psicológicas aos seres humanos.</p>
                </div>
                <img src={teste4} alt=""/>
            </div>
                
        </div>
    )
}