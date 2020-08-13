import React from 'react';

import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';

import './styles.css';

function SearchEvent() {
    return(
        <div id="page-search-event">
            <PageHeader title="Eventos Disponíveis">
                <form id="search">
                    <div className="input-block">
                        <label htmlFor="day">Dia</label>
                        <input type="text" id="day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="style">Estilo</label>
                        <input type="text" id="style"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <EventList />
                <EventList />
                <EventList />
            </main>
        </div>
    )
}

export default SearchEvent;