import React from 'react';
import './LogBook.scss';
export default function LogBook({ data }) {
  let entries = null;
  if (data) {
    entries = data.map(entry => <li key={entry}>{entry}</li>);
  }

  return <ul className="log-book">{entries}</ul>;
}
