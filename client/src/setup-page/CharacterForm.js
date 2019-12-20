import React, { useState } from 'react';
import './CharacterForm.scss';

const StatRadioButtons = ({
  label,
  testid,
  stats,
  changeHandler,
  inputName,
  character,
  usedStats
}) => {
  let buttons = stats.map(stat => {
    // disabled if stat selected on a different line.
    let shouldBeDisabled =
      usedStats.includes(stat.name) && character[`${inputName}`] !== stat.name;
    return (
      <React.Fragment key={stat.name}>
        <label className="stat-choice" htmlFor={inputName}>
          {stat.name}
          <input
            data-testid={`${testid}-${stat.name}`}
            type="radio"
            onChange={changeHandler}
            name={inputName}
            value={stat.name}
            disabled={shouldBeDisabled}
          ></input>
        </label>
      </React.Fragment>
    );
  });
  return (
    <div data-testid={testid}>
      <p className="primary-label">{label}</p>
      {buttons}
    </div>
  );
};

const CharacterForm = ({ onSend }) => {
  let [character, setCharacter] = useState({
    name: '',
    role: '',
    notes: '',
    primaryStat: '',
    secondaryStat1: '',
    secondaryStat2: '',
    maxMomentum: 10,
    momentumReset: 2
  });
  const stats = [
    { name: 'iron' },
    { name: 'heart' },
    { name: 'edge' },
    { name: 'wits' },
    { name: 'shadow' }
  ];
  let changeHandler = e => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  };
  let usedStats = [
    character.primaryStat,
    character.secondaryStat1,
    character.secondaryStat2
  ];

  let submitHandler = e => {
    e.preventDefault();
    const remainingStats = _filterUnusedStats();

    const newCharacter = {
      ...character,

      stats: {
        [character.primaryStat]: 3,
        [character.secondaryStat1]: 2,
        [character.secondaryStat2]: 2,
        [remainingStats[0]]: 1,
        [remainingStats[1]]: 1,
        supply: 5,
        health: 5,
        spirit: 5,
        momentum: 2
      }
    };
    onSend(newCharacter);
  };
  const _filterUnusedStats = () => {
    let statNames = stats.map(stat => stat.name);

    for (let usedStat of usedStats) {
      statNames = statNames.filter(stat => stat !== usedStat);
    }
    return statNames;
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label className="primary-label" htmlFor="name">
          Character Name
          <input
            type="text"
            onChange={changeHandler}
            data-testid="characterNameInput"
            name="name"
          />
        </label>
        <label className="primary-label" htmlFor="role">
          {' '}
          Role
          <input
            type="text"
            onChange={changeHandler}
            data-testid="characterRoleInput"
            name="role"
          />
        </label>
        <label className="primary-label" htmlFor="notes">
          Notes
          <textarea
            onChange={changeHandler}
            data-testid="characterNotesInput"
            name="notes"
            value={character.notes}
          ></textarea>
        </label>
        <StatRadioButtons
          label="Primary Stat"
          testid="primaryStatInput"
          stats={stats}
          inputName="primaryStat"
          changeHandler={changeHandler}
          character={character}
          usedStats={usedStats}
        />
        <StatRadioButtons
          label="Secondary Stat #1"
          testid="firstSecondaryStatInput"
          stats={stats}
          inputName="secondaryStat1"
          changeHandler={changeHandler}
          character={character}
          usedStats={usedStats}
        />
        <StatRadioButtons
          label="Secondary Stat #2"
          testid="secondSecondaryStatInput"
          stats={stats}
          inputName="secondaryStat2"
          changeHandler={changeHandler}
          character={character}
          usedStats={usedStats}
        />

        <input
          type="submit"
          data-testid="characterSubmitButton"
          value="Create Character"
        />
      </form>
    </div>
  );
};

export default CharacterForm;
