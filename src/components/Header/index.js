import React from 'react';
import { Header } from './slyle';
// import './style.css';
import Logo from '../../assets/logo.jpeg';
export default function HomePage() {
  return (
    <div>
      <Header>
        <img src={Logo} className="Logo" alt="Logo E-commerce"/>
        <h4>Loja</h4>
        <h4>Contato</h4>
        <h4>Login</h4>
        <h4>Carrinho</h4>
      </Header>
    </div>
  );
}