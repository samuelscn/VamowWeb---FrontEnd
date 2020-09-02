import React, { useState, useEffect, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function SearchEvent() {
    const [ month, setMonth ] = useState('');
    const [ city, setCity ] = useState('');
    const [ style, setStyle ] = useState('');
    const [ cities, setCities ] = useState([]);
    const [ styles, setStyles ] = useState([]);
    const [ events, setEvents ] = useState([]);

    useEffect(() => { 
        api.get('city').then((response:any) => {
            setCities(response.data);
        })
    }, []);

    useEffect(() => { 
        api.get('style').then((response:any) => {
            setStyles(response.data);
        })
    }, []);

    async function search(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('/events', {
            params: {
                month,
                style,
                city
            }
        })

        setEvents(response.data);
    }

    return (
        <div id="page-search-event">
            <PageHeader title="Eventos Disponíveis">
                <form id="search" onSubmit={search}>
                    <Select
                        name="month"
                        label="Mês"
                        value={month}
                        onChange={(e) => {setMonth(e.target.value)}}
                        options={[
                            { value: '1', label: 'Qualquer Mês' },
                            { value: 'Janeiro', label: 'Janeiro' },
                            { value: 'Fevereiro', label: 'Fevereiro' },
                            { value: 'Março', label: 'Março' },
                            { value: 'Abril', label: 'Abril' },
                            { value: 'Maio', label: 'Maio' },
                            { value: 'Junho', label: 'Junho' },
                            { value: 'Julho', label: 'Julho' },
                            { value: 'Agosto', label: 'Agosto' },
                            { value: 'Setembro', label: 'Setembro' },
                            { value: 'Outubro', label: 'Outubro' },
                            { value: 'Novembro', label: 'Novembro' },
                            { value: 'Dezembro', label: 'Dezembro' }
                        ]}
                    />
                    <Select
                        name="city"
                        label="Cidade"
                        value={city}
                        onChange={(e) => {setCity(e.target.value)}}
                        options={cities.map((cityName: any) => {
                            return (
                                { value: cityName.nome, label: cityName.nome }
                            )
                        })}
                    />
                    <Select
                        name="style"
                        label="Estilo"
                        value={style}
                        onChange={(e) => {setStyle(e.target.value)}}
                        options={styles.map((styleName: any) => {
                            return (
                                { value: styleName.nome, label: styleName.nome }
                            )
                        })}
                    />
                    <button type="submit" className="search-button">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {events.map((eventsData) => {
                    return <EventList event={eventsData}/>
                })}
            </main>
        </div>
    )
}

export default SearchEvent;