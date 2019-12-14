import React from 'react';

export default function LogInput({ changeHandler, submitHandler, logInput }) {
  return (
    <div>
      <label htmlFor="log-input">
        Write about your story. If a move suggests itself, click a name of the
        move.
      </label>
      <textarea
        data-testid="logText"
        name="log-input"
        value={logInput}
        onChange={changeHandler}
      />
      <button data-testid="submitEntryButton" onClick={submitHandler}>
        Submit Entry
      </button>
    </div>
  );
}

//
