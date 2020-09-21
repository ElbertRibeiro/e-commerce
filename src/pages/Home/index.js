import React from 'react';
import './style.css';

import modelo from '../../assets/modelo2.jpg';

export default function Home() {
    return (
        <>
            <div className="headerSite">
                <h1>Sou + Store</h1>
                
                <img src={modelo} alt="modelo 2" />
                <h2>Loginha</h2>
            </div>

            <div>
                <h4>Who We are</h4>
            </div>

            <div>
                <p>produtos em carrocel</p>
            </div>
            
            <div>
                <h1>Contato</h1>
            </div>
        </>
    );
}