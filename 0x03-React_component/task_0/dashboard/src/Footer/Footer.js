import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';
import './Footer.css';

export default function Footer() {
  const isIndex = true;

  return (
    <p>
      <em>
        Copyright {getFullYear()} - {getFooterCopy(isIndex)}
      </em>
    </p>
  );
}
