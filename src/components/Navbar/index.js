import React from 'react';
import { Navmenu } from './style';

import Logo from '../../assets/logo.jpeg';

export default function Navbar() {
    return (
        <Navmenu>
            <img src={Logo} className="Logo" alt="Logo E-commerce" />
            <h4>Loja</h4>
            <h4>Contato</h4>
            <h4>Login</h4>
            <h4>Carrinho</h4>
        </Navmenu>
    );
}