import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <div className={css(styles.Div)}>
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
      <button className={css(styles.Button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  Div: {
    '@media only screen and (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  Button: {
    width: '35px',
  },
});
