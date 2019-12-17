import React from 'react';
import './Header.scss';

export default function Header({ text }) {
  return (
    <div data-testid="pageHeader" className="header">
      <h1>{text}</h1>
    </div>
  );
}
