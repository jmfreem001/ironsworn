import React, { useState } from 'react';

const StatRadioButtons = ({
  label,
  testid,
  stats,
  changeHandler,
  inputName
}) => {
  let buttons = stats.map(stat => (
    <React.Fragment key={stat.name}>
      <label htmlFor={inputName}>
        {stat.name}
        <input
          type="radio"
          onChange={changeHandler}
          name={inputName}
          value={stat.name}
        ></input>
      </label>
    </React.Fragment>
  ));
  return (
    <div data-testid={testid}>
      {label}
      {buttons}
    </div>
  );
};

const CharacterForm = ({ submitHandler }) => {
  let [character, setCharacter] = useState({
    name: '',
    primaryStat: '',
    role: '',
    primaryStat: '',
    secondaryStat1: '',
    secondaryStat2: '',
    tertiaryStat1: '',
    tertiaryStat2: '',
    supply: 5,
    health: 5,
    spirit: 5,
    momentum: 2,
    maxMomentum: 10,
    momentumReset: 2
  });
  const [stats, setStats] = useState([
    { name: 'iron', isSelected: false },
    { name: 'heart', isSelected: false },
    { name: 'edge', isSelected: false },
    { name: 'wits', isSelected: false },
    { name: 'shadow', isSelected: false }
  ]);
  let changeHandler = e => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  };
  console.log('CHARACTER', character);
  // let statFilter =

  return (
    <div>
      <form>
        <label htmlFor="name">
          Character Name
          <input
            type="text"
            onChange={changeHandler}
            data-testid="characterNameInput"
            name="name"
          />
        </label>
        <label htmlFor="role">
          {' '}
          Role
          <input
            type="text"
            onChange={changeHandler}
            data-testid="characterRoleInput"
            name="role"
          />
        </label>
        {/* <input
          type="radio"
          onChange={changeHandler}
          
          name="primaryStat"
        /> */}
        <StatRadioButtons
          label="Primary Stat"
          testid="primaryStatInput"
          stats={stats}
          inputName="primaryStat"
          changeHandler={changeHandler}
        />
        <StatRadioButtons
          label="Secondary Stat #1"
          testid="firstSecondaryStatInput"
          stats={stats}
          inputName="secondaryStat1"
          changeHandler={changeHandler}
        />
        <StatRadioButtons
          label="Secondary Stat #2"
          testid="secondSecondaryStatInput"
          stats={stats}
          inputName="secondaryStat2"
          changeHandler={changeHandler}
        />
        {/* <input
          type="radio"
          onChange={changeHandler}
          data-testid="firstSecondaryStatInput"
          name="secondaryStat1"
        />
        <input
          type="radio"
          onChange={changeHandler}
          data-testid="secondSecondaryStatInput"
          name="secondaryStat2"
        /> */}
        <button
          data-testid="characterSubmitButton"
          onClick={() => submitHandler(character)}
        >
          Save Character
        </button>
      </form>
    </div>
  );
};

export default CharacterForm;
