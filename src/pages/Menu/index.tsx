import React from 'react';

import './styles.css';

import Show from '../../assets/images/show.jpg';
import Bar from '../../assets/images/bar.jpg';
import Pen from '../../assets/icons/caneta.svg';
import Search from '../../assets/icons/lupa.svg';

function Menu() {
    return(
        <div id="page-menu">
            <div id="page-menu-content">
                <div className="logo-container">
                    <h1>VAMOW</h1>
                    <h5>SUA PLATAFORMA DE EVENTOS</h5>
                    <h6>MENU</h6>
                </div>
                <div id="nav-menu-container">
                    <div id="outer-frame">
                        <div className="browse-buttons">
                            <img src={Show} alt="show"/>
                            <a href="">SHOWS</a>
                        </div>
                        <div className="browse-buttons">
                            <img src={Bar} alt="bares"/>
                            <a href="">BARES</a>
                        </div>
                    </div>
                </div>
                <div className="buttons-container">
                    <a href="" className="buscar">
                        <img src={Search} alt="Lupa"/>
                        Buscar evento
                    </a>
                    <a href="" className="criar">
                        <img src={Pen} alt="Caneta"/>
                        Criar evento
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default Menu;