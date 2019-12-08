import React from 'react';

import './Character.scss';

export default function Character({ character }) {
  const stats = Object.keys(character.stats);
  const statDisplay = stats.map(stat => (
    <p key={stat} className="stats" data-header={stat}>
      : {character.stats[stat]}
    </p>
  ));

  const equipment = character.equipment.map(item => <li key={item}>{item}</li>);
  return (
    <div className="character">
      <h3>{character.name} </h3>
      <h4>
        <em>{character.role}</em>
      </h4>
      {statDisplay}
      <h5>Equipment</h5>
      <ul>{equipment}</ul>
      {/* Need to add Momentum. */}
      <p>NEW CHAR DIV</p>
    </div>
  );
}
