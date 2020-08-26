import React from 'react';

import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';
import Input from '../../components/Inputs';
import Select from '../../components/Select';

import './styles.css';

function SearchEvent() {
    return(
        <div id="page-search-event">
            <PageHeader title="Eventos Disponíveis">
                <form id="search">
                    <Input name="day" label="Dia"/>
                    <Select 
                        name="city" 
                        label="Cidade"
                        options={[
                            { value: 'Sete Lagoas', label: 'Sete Lagoas'},
                            { value: 'Belo Horizonte', label: 'Belo Horizonte'},
                            { value: 'Contagem', label: 'Contagem'}
                        ]}
                    />
                    <Select 
                        name="style" 
                        label="Estilo"
                        options={[
                            { value: 'Sertanejo', label: 'Sertanejo Universitario'},
                            { value: 'Pagode', label: 'Pagode'},
                            { value: 'Rock', label: 'Rock'}
                        ]}
                    />
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