import React from 'react';

import './style.css';

import logo from '../../assets/logo.jpeg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';
import chapeu_marrom from '../../assets/chapeu-marrom.jpg';
import capa_iphone from '../../assets/capa-iphone.jpg';
import chapeu_azul from '../../assets/chapeu-azul.jpg';




export default function Home() {



    return (
        <>

            <div className="header">
                <img src={logo} alt="logo" className="logo" />
                <img src={instagram} alt="instagram" className="instagram" />
                <img src={whatsapp} alt="whatsapp" className="whatsapp" />
            </div>

            <div className="product">
                <img src={chapeu_marrom} alt="chapeu_marrom" className="chapeu_marrom" />
                <img src={capa_iphone} alt="capa_iphone" className="capa_iphone" />
                <img src={chapeu_azul} alt="chapeu_azul" className="chapeu_azul" />
            </div>

            <div className="cards">


            </div>

        </>
    );
}
