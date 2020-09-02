import React, { useContext, useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

const Login: React.FC = () => {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        api.get(`users/${email}/${password}`).then((response: any) => {
            signIn(response.data);
        })

    }

    return (
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="logo-container">
                    <h1>VAMOW</h1>
                    <h5>SUA PLATAFORMA DE EVENTOS</h5>
                    <h4>Faça login na nossa plataforma</h4>
                </div>

                <div id="input-container">
                    <form id="login" onSubmit={onSubmit}>
                        <div className="input-block">
                            <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="input-block">
                            <input type="password" id="senha" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="lostpass-container">
                            <Link to="" className="signin">Esqueci minha senha</Link>
                        </div>

                        <div className="enter-container">
                            <button type="submit" className="signin">ENTRAR</button>
                        </div>
                    </form>
                    <div className="sign-container">
                        <text>Não tem uma conta? </text>
                        <Link to="/register" className="signin">Registre-se</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;