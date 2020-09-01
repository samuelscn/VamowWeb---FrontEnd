import React, { useState, FormEvent, useContext } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import WarningIcon from '../../assets/icons/aviso.svg';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

import './styles.css';

function Register() {
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ confirmePassword, setConfirmePassword ] = useState('');
    const { authRegister } = useContext(AuthContext);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (senha === confirmePassword) {
            api.post('users', {
                nome,
                sobrenome,
                email,
                senha
            }).then((response) => {
                alert('Cadastro realizado com sucesso!');
                
                authRegister(response.data);
            }).catch(() => {
                alert('Erro ao realizar o cadastro!');
            })
        } else {
            alert('Confirmação de senha invalida!');    
        }
    }

    return (
        <div id="page-new-user">
            <PageHeader
                title="Que incrível o interesse em fazer parte da nossa plataforma."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="title-events-data">Dados do Usuário</legend>

                        <Input name="user-name" label="Nome" value={nome} onChange={(e) => {setNome(e.target.value)}} />
                        <Input name="user-nickname" label="Sobrenome" value={sobrenome} onChange={(e) => {setSobrenome(e.target.value)}}/>
                        <Input type="email" name="email" label="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <Input type="password" name="password" label="Senha" value={senha} onChange={(e) => {setSenha(e.target.value)}}/>
                        <Input type="password" name="confirme-password" label="Confirme a Senha" value={confirmePassword} onChange={(e) => {setConfirmePassword(e.target.value)}} />
                    </fieldset>

                    <footer>
                        <p>
                            <img src={WarningIcon} alt="Warning" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default Register;