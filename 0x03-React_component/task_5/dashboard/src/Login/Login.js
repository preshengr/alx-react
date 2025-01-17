import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>
        Email:
        <input type='text' id='email' name='email' />
      </label>
      <label htmlFor='password'>
        Password:
        <input type='password' id='password' name='password' />
      </label>
      <button>OK</button>
    </>
  );
}
