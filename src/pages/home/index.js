import React from 'react';

import './style.css';

import logo from '../../assets/logo.jpeg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';
import chapeu_marrom from '../../assets/chapeu-marrom.jpg';
import capa_iphone from '../../assets/capa-iphone.jpg';
import chapeu_azul from '../../assets/chapeu-azul.jpg';
import seta_esquerda from '../../assets/seta-esquerda.svg';
import seta_direita from '../../assets/seta-esquerda.svg';
import modelo from '../../assets/modelo1.jpg';

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
                <img src={seta_esquerda} alt="seta_esquerda" className="seta_esquerda" />
                <img src={seta_direita} alt="seta_direita" className="seta_direita" />
            </div>

            <div className="contato">
                <h1 className="contato-text">Contato</h1>
                <a href="https://wa.me/message/A2UOVQL66FGBC1">
                    <img src={whatsapp} alt="whatsapp" className="whatsapp-contato" />
                </a>
                <a href="https://www.instagram.com/soumaisstore/"> <img src={instagram} alt="instagram" className="instagram-contato" /> </a>
                <img src={modelo} alt="modelo" className="modelo" />
            </div>

        </>
    );
}
