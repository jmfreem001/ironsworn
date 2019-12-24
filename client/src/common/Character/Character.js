import React from 'react';

import './Character.scss';

const Bond = ({ bond }) => {
  let ticks = bond.ticks;

  return (
    <li key={bond.name}>
      {bond.name} notes: {bond.notes || 'N/A'}
    </li>
  );
};
const Vow = ({ vow }) => {
  return (
    <li key={vow.name}>
      {vow.name} notes: {vow.notes || 'N/A'}
    </li>
  );
};

export default function Character({ character }) {
  const stats = Object.keys(character.stats);
  const statDisplay = stats.map(stat => (
    <p key={stat} className="stats" data-header={stat}>
      : {character.stats[stat]}
    </p>
  ));
  let bonds = null;
  if (character.bonds.length > 0) {
    bonds = character.bonds.map(bond =>
      bond.reserved ? null : <Bond bond={bond} key={bond.name} />
    );
  }
  let remainingBondsCount = character.bonds.filter(
    bond => bond.reserved === true
  ).length;
  console.log('Rmaining Bonds', remainingBondsCount);
  let remainingBonds = null;
  if (remainingBondsCount > 0) {
    remainingBonds = <p>Bonds in reserve:{remainingBondsCount}</p>;
  }
  const bondDisplay = (
    <>
      <h4>Bonds</h4>
      {remainingBonds}
      <ul>{bonds}</ul>
    </>
  );

  let vows = null;
  if (character.vows.length > 0) {
    vows = character.vows.map(vow => <Vow vow={vow} key={vow.name} />);
  }

  const vowDisplay = (
    <>
      <h4>Vows</h4>
      <ul>{vows}</ul>
    </>
  );

  // const equipment = character.equipment.map(item => <li key={item}>{item}</li>);
  return (
    <div className="character" data-testid="characterDisplay">
      <h3>{character.name} </h3>
      <h4>
        <em>{character.role}</em>
      </h4>
      {statDisplay}
      {/* <h5>Equipment</h5>
      <ul>{equipment}</ul> */}
      {/* Need to add Momentum. */}
      {bondDisplay}
      {vowDisplay}
      {/* <p>NEW CHAR DIV</p> */}
    </div>
  );
}
