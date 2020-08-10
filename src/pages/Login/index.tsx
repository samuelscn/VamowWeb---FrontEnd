import React from 'react';

import './styles.css';

import BackgroundImg from '../../assets/images/background-img-dark.jpg';

function Login() {
    return(
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="logo-container">
                    <h1>VAMOW</h1>
                    <h5>SUA PLATAFORMA DE EVENTOS</h5>
                    <h4>Faça login na nossa plataforma</h4>
                </div>

                <div id="input-container">
                    <form id="login">
                        <div className="input-block">
                            <input type="email" id="email" placeholder="E-mail" />
                        </div>

                        <div className="input-block">
                            <input type="password" id="senha" placeholder="Senha"/>
                        </div>
                    </form>
                    
                    <div className="lostpass-container">
                        <a href="" className="signin">Esqueci minha senha</a>
                    </div>

                    <div className="enter-container">
                        <a href="" className="signin">ENTRAR</a>                    
                    </div>

                    <div className="sign-container">
                        <text>Não tem uma conta? </text>
                        <a href="" className="signin">Registre-se</a>
                    </div>

                </div>         
            </div>
        </div>
    )
}

export default Login;