import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.Margin)} htmlFor='email'>
        Email:
        <input
          className={css(styles.Margin)}
          type='text'
          id='email'
          name='email'
        />
      </label>
      <label className={css(styles.Margin)} htmlFor='password'>
        Password:
        <input
          className={css(styles.Margin)}
          type='password'
          id='password'
          name='password'
        />
      </label>
      <button>OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  Margin: {
    margin: '10px',
  },
});
