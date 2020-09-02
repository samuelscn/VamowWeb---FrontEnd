import React, { useState, useEffect } from 'react';

import './styles.css';

import HenJul from '../../assets/images/henejul.jpg';
import LogoIcon from '../../assets/icons/favicon.png';
import Star from '../../assets/icons/estrelas.svg';
import api from '../../services/api';

interface EventsItemProps {
    event: {
        avatarEvento: string
        day: number
        descricao: string
        local_id: number
        month: string
        nome_evento: string
        style_id: number
        valor: number
        year: number
    }
}

const EventList: React.FC<EventsItemProps> = ({ event }) => {
    const [ style, setStyle ] = useState([]);
    const [ local, setLocal ] = useState([]);

    useEffect(() => {
        const styleId = event.style_id;
        const id = event.local_id;
        async function getStyleData() {
            const response = await api.get(`style/${styleId}`);
            const response2 = await api.post('local/data', { id });
            setLocal(response2.data);
            setStyle(response.data);
        }  
        getStyleData();
    }, []);

    return(
        <article className="event-list">
            <header className="header-event-list">
                <img src={event.avatarEvento} className="hej" alt="Henrique e Juliano" />
                <div>
                    <strong>{event.nome_evento}</strong>
                    <span>{style.map((styleName:any)=> { return  styleName.nome})}</span>
                </div>
                <img src={Star} className="estrela" alt="Estrela" />
            </header>
            <p className="frase">
                {event.descricao}
            </p>
            <footer className="footer-event-list">
                <div>
                    <p>
                        Data:
                                <strong> {`${event.day}/${event.month}/${event.year}`}</strong>
                    </p>
                    <p>
                        Local:
                                <strong> {local.map((localName:any) => { return localName.nome })}</strong>
                    </p>
                    <p>
                        Valor:
                                <strong> R$ {event.valor}</strong>
                    </p>
                </div>
                <button>
                    <img src={LogoIcon} alt="icon logo" />
                            VAMOW
                        </button>
            </footer>
        </article>
    )
}

export default EventList;