import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import BackArrow from '../../assets/icons/seta-esquerda.svg';
import LogoIcon from '../../assets/icons/favicon.png';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/menu">
                    <img src={BackArrow} alt="Seta Voltar"/>
                </Link>
                <div className="logo">
                    <img src={LogoIcon} alt="logo-icon"/>
                    <h4>VAMOW</h4>    
                </div>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            </div>
            {props.children}
        </header>
    )
}

export default PageHeader;