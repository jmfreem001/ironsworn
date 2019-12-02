import React from 'react';
import LogInput from './LogInput';

export default function Log({ array, submitHandler, changeHandler }) {
  let entries = null;
  if (array) {
    entries = array.map(entry => <p>{entry.text}</p>);
  }

  return (
    <div className="log">
      <h3>Log</h3>
      <LogInput
        text="Write about your story. If a move suggests itself, click a name of the move."
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />

      {entries}
    </div>
  );
}
