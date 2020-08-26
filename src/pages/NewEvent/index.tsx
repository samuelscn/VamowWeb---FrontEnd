import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';

import LogoIcon from '../../assets/icons/favicon.png';
import WarningIcon from '../../assets/icons/aviso.svg'



function NewEvent() {
    const [scheduleItems, setScheduleItems] = useState([
        { month: '', day: '', year: '', local: '', city: '', value: '' }
    ]);

    function addNewSchedule() {
        setScheduleItems([
            ...scheduleItems,
            { month: '', day: '', year: '', local: '', city: '', value: '' }
        ]);
    }

    return (
        <div id="page-new-event">
            <PageHeader
                title="Que incrível o interesse em cadastrar o seu evento em nossa plataforma."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend className="title-events-data">Dados do Evento</legend>

                    <Input name="event-name" label="Nome do Evento" />
                    <TextArea name="description" label="Descricao" />
                    <Input name="avatar" label="Avatar" />
                    <Select
                        name="category"
                        label="Categoria"
                        options={[
                            { value: 'show', label: 'Show' },
                            { value: 'bar', label: 'Bar' }
                        ]}
                    />
                    <Select
                        name="style"
                        label="Estilo"
                        options={[
                            { value: 'Sertanejo', label: 'Sertanejo Universitario' },
                            { value: 'Pagode', label: 'Pagode' },
                            { value: 'Rock', label: 'Rock' }
                        ]}
                    />
                </fieldset>

                <fieldset>
                    <div className="schedule-legend">
                        <legend className="title-schedule">Categoria</legend>
                        <button type="button" onClick={addNewSchedule}>
                            + Novo Horário
                        </button>
                    </div>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.city}>
                                <div className="schedule-date">
                                    <Select
                                        name="month"
                                        label="Mes"
                                        options={[
                                            { value: 'Janeiro', label: 'Janeiro' },
                                            { value: 'Fevereiro', label: 'Fevereiro' },
                                            { value: 'Marco', label: 'Março' },
                                            { value: 'Abril', label: 'Abril' },
                                            { value: 'Maio', label: 'Maio' },
                                            { value: 'Junho', label: 'Junho' },
                                            { value: 'Julho', label: 'Julho' },
                                            { value: 'Agosto', label: 'Agosto' },
                                            { value: 'Setembro', label: 'Setembro' },
                                            { value: 'Outubro', label: 'Outubro' },
                                            { value: 'Novembro', label: 'Novembro' },
                                            { value: 'Dezembro', label: 'Dezembro' },
                                        ]}
                                    />
                                    <Input name="day" label="Dia" />
                                    <Input name="year" label="Ano" />
                                </div>

                                <Select
                                    name="local"
                                    label="Local"
                                    options={[
                                        { value: 'Esplanada', label: 'Esplanada' },
                                        { value: 'Arena do Jacare', label: 'Arena do Jacare' },
                                        { value: 'Morumbi', label: 'Morumbi' }
                                    ]}
                                />
                                <Select
                                    name="city"
                                    label="Cidade"
                                    options={[
                                        { value: 'Sete Lagoas', label: 'Sete Lagoas' },
                                        { value: 'Belo Horizonte', label: 'Belo Horizonte' },
                                        { value: 'Sao Paulo', label: 'Sao Paulo' }
                                    ]}
                                />
                                <Input name="value" label="Valor" />
                            </div>
                        );
                    })}



                </fieldset>
                <footer>
                    <p>
                        <img src={WarningIcon} alt="Warning" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default NewEvent;