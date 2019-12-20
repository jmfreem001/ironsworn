import React, { useState } from 'react';

const BondsForm = ({ onSend }) => {
  let initialState = {
    name: '',
    notes: ''
  };
  let [bond, setBond] = useState(initialState);

  let changeHandler = e => {
    setBond({
      ...bond,
      [e.target.name]: e.target.value
    });
  };
  let submitHandler = e => {
    e.preventDefault();

    const newBond = {
      ...bond,
      ticks: 1
    };
    setBond(initialState);
    onSend(newBond);
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label className="primary-label" htmlFor="reserved">
          Reserve?
          <input
            type="checkbox"
            name="reserved"
            onChange={changeHandler}
            data-testid="bondReserveBox"
          />
        </label>
        <label className="primary-label" htmlFor="name">
          Bond
          <input
            type="text"
            onChange={changeHandler}
            data-testid="bondNameInput"
            value={bond.name}
            name="name"
            disabled={bond.reserved ? true : false}
          />
        </label>
        <label className="primary-label" htmlFor="notes">
          Notes
          <textarea
            onChange={changeHandler}
            data-testid="bondNotesInput"
            name="notes"
            value={bond.notes}
            disabled={bond.reserved ? true : false}
          ></textarea>
        </label>
        <input type="submit" data-testid="bondSubmitButton" value="Save Vow" />
      </form>
    </div>
  );
};

export default BondsForm;
