import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';

import WarningIcon from '../../assets/icons/aviso.svg'

function NewEvent() {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('');
    const [category, setCategory] = useState('');
    const [style, setStyle] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { month: '', day: '', year: '', local: '', city: '', value: '' }
    ]);

    function addNewSchedule() {
        setScheduleItems([
            ...scheduleItems,
            { month: '', day: '', year: '', local: '', city: '', value: '' }
        ]);
    }

    function formSubmit(e: FormEvent) {
        e.preventDefault();

        console.log({
            eventName,
            description,
            avatar,
            category,
            style,
            scheduleItems
        });
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value};
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-new-event">
            <PageHeader
                title="Que incrível o interesse em cadastrar o seu evento em nossa plataforma."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={formSubmit}>
                    <fieldset>
                        <legend className="title-events-data">Dados do Evento</legend>

                        <Input name="event-name" label="Nome do Evento" value={eventName} onChange={(e) => { setEventName(e.target.value) }} />
                        <TextArea name="description" label="Descricao" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Select
                            name="category"
                            label="Categoria"
                            value={category}
                            onChange={(e) => {setCategory(e.target.value)}}
                            options={[
                                { value: 'show', label: 'Show' },
                                { value: 'bar', label: 'Bar' }
                            ]}
                        />
                        <Select
                            name="style"
                            label="Estilo"
                            value={style}
                            onChange={(e) => {setStyle(e.target.value)}}
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

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.city}>
                                    <div className="schedule-date">
                                        <Select
                                            name="month"
                                            label="Mes"
                                            value={scheduleItem.month}
                                            onChange={e => setScheduleItemValue(index, 'month', e.target.value)}
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
                                        <Input name="day" label="Dia" value={scheduleItem.day} onChange={e => setScheduleItemValue(index, 'day', e.target.value)}/>
                                        <Input name="year" label="Ano" value={scheduleItem.year} onChange={e => setScheduleItemValue(index, 'year', e.target.value)}/>
                                    </div>

                                    <Select
                                        name="local"
                                        label="Local"
                                        value={scheduleItem.local}
                                        onChange={e => setScheduleItemValue(index, 'local', e.target.value)}
                                        options={[
                                            { value: 'Esplanada', label: 'Esplanada' },
                                            { value: 'Arena do Jacare', label: 'Arena do Jacare' },
                                            { value: 'Morumbi', label: 'Morumbi' }
                                        ]}
                                    />
                                    <Select
                                        name="city"
                                        label="Cidade"
                                        value={scheduleItem.city}
                                        onChange={e => setScheduleItemValue(index, 'city', e.target.value)}
                                        options={[
                                            { value: 'Sete Lagoas', label: 'Sete Lagoas' },
                                            { value: 'Belo Horizonte', label: 'Belo Horizonte' },
                                            { value: 'Sao Paulo', label: 'Sao Paulo' }
                                        ]}
                                    />
                                    <Input name="value" label="Valor" value={scheduleItem.value} onChange={e => setScheduleItemValue(index, 'value', e.target.value)}/>
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
                        <button type="submit">
                            Salvar Cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default NewEvent;