import React from 'react';

import './style.css';

import modelo1 from '../../assets/modelo1.jpg';
import modelo2 from '../../assets/modelo2.jpg';

export default function Home() {
    return (
        <>
            <div className="headerSite">
                <h1>Sou + Store</h1>
                <img src={modelo1} alt="modelo 1" />
                <img src={modelo2} alt="modelo 2" />
                <h2>Loginha</h2>
            </div>
            <div>
                <h4>Who We are</h4>
            </div>
            <div>
                <p>produtos em carrocel</p>
            </div>
        </>
    );
}