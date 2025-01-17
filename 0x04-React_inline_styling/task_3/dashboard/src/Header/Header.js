import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
  return (
    <div className={css(styles.header)}>
      <img
        className={css(styles.logo)}
        src={require('../assets/holberton_logo.jpg')}
        alt='Holberton logo'
      />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '98%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
  },

  logo: {
    width: '200px',
    height: '200px',
  },
});
