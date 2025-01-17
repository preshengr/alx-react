import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='App-header'>
      <img src={require('../assets/holberton_logo.jpg')} alt='Holberton logo' />
      <h1>School dashboard</h1>
    </div>
  );
}
