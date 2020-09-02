import React, { useState, FormEvent, useEffect, useContext } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import History from '../../history';

import './styles.css';

import WarningIcon from '../../assets/icons/aviso.svg'
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

function NewEvent() {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('');
    const [category, setCategory] = useState('');
    const [style, setStyle] = useState('');
    const [cities, setCities] = useState([]);
    const [locals, setLocals] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [styles, setStyles] = useState([]);
    const [states, setStates] = useState([]);
    const [user_id, setUser_id] = useState([]);

    const { signOut } = useContext(AuthContext);

    /*useEffect(() => {
        api.get('city').then((response: any) => {
            setCities(response.data);
        })
    }, []);*/

    async function handleSignout() {
        signOut();
    }

    useEffect(() => {
        const data:any = localStorage.getItem('user');
        const userData  = JSON.parse(data);
        const email = userData.email;
        
        api.get(`users/${email}`).then((response: any) => {
            setUser_id(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('category').then((response: any) => {
            setCategorys(response.data);
        })
    }, []);

    useEffect(() => {
        api.get('style').then((response: any) => {
            setStyles(response.data);
        })
    }, []);

    useEffect(() => {
        api.get('state').then((response: any) => {
            setStates(response.data);
        })
    }, []);

    const [scheduleItems, setScheduleItems] = useState([
        { month: '', day: '', year: '',  state: '', city: '', local: '', value: '' }
    ]);

    function addNewSchedule() {
        setScheduleItems([
            ...scheduleItems,
            { month: '', day: '', year: '',  state: '', city: '', local: '', value: '' }
        ]);
    }

    async function formSubmit(e: FormEvent) {
        e.preventDefault();

        const { id } = user_id[0];

        api.post('events', {
            id,
            eventName,
            description,
            avatar,
            category: Number(category),
            style: Number(style),
            scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            History.push('/');
        }).catch(() => {
            alert('Erro ao realizar o cadastro!');
        })
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

    function setStateValue(position: number, field: string, value: string) {
        api.get(`city/${value}`).then((response: any) => {
            setCities(response.data);
        });

        setScheduleItemValue(position, field, value);
    }

    function setCityValue(position: number, field: string, value: string) {
        api.get(`local/${value}`).then((response: any) => {
            setLocals(response.data);
        });

        setScheduleItemValue(position, field, value);
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
                            options={categorys.map((categoryName: any) => {
                                return(
                                    { value: categoryName.id, label: categoryName.nome }
                                )
                            })}
                        />
                        <Select
                            name="style"
                            label="Estilo"
                            value={style}
                            onChange={(e) => {setStyle(e.target.value)}}
                            options={styles.map((styleName: any) => {
                                return(
                                    { value: styleName.id, label: styleName.nome }
                                )
                            })}
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
                                        name="state"
                                        label="Estado"
                                        value={scheduleItem.state}
                                        onChange={e => setStateValue(index, 'state', e.target.value)}
                                        options={states.map((stateName: any) => {
                                            return(
                                                { value: stateName.id, label: stateName.sigla }
                                            )
                                        })}
                                    />    

                                    <Select
                                        name="city"
                                        label="Cidade"
                                        value={scheduleItem.city}
                                        disabled={cities.length===0}
                                        onChange={e => setCityValue(index, 'city', e.target.value)}
                                        options={cities.map((cityName: any) => {
                                            return (
                                                { value: cityName.id, label: cityName.nome }
                                            )
                                        })}
                                    />

                                    <Select
                                        name="local"
                                        label="Local"
                                        value={scheduleItem.local}
                                        disabled={locals.length===0}
                                        onChange={e => setScheduleItemValue(index, 'local', e.target.value)}
                                        options={locals.map((localsName: any) => {
                                            return (
                                                { value: localsName.id, label: localsName.nome }
                                            )
                                        })}
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
                    <button type="button" onClick={handleSignout}>logout</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default NewEvent;