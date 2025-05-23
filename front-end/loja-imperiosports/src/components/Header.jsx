
import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Imperio Sports</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
};

export default Header;
