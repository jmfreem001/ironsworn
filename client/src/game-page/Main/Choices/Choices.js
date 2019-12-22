import React from 'react';
import './Choices.scss';

export default function Choices({ displayText, choicesArray, clickHandler }) {
  //Add as a Modal Box

  let options = null;
  if (choicesArray) {
    options = choicesArray.map((choice, index) => (
      <p
        className="option-choice"
        data-id={index}
        key={choice.stat}
        onClick={clickHandler}
      >
        {choice.description || 'Confirm description and roll.'}
      </p>
    ));
  }
  return (
    <div className="main option">
      <h3>{displayText}</h3>
      <label htmlFor="framing">Provide narrative framing.</label>
      <textarea name="framing" />
      {options}
    </div>
  );
}
