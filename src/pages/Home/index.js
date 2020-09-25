import React from 'react';
import './style.css';
import logo from '../../assets/logo.jpeg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';

export default function Home() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" className="logo"/> 
                <img src={instagram} alt="instagram" className="instagram"/>
                <img src={whatsapp} alt="whatsapp" className="whatsapp"/>
            </div>
            <div className="product">
                <h1>teste</h1>
            </div>
        </>
    );
}