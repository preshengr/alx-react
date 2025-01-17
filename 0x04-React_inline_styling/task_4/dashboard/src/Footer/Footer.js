import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';

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
