import React, { useState } from 'react';
import LogInput from './LogInput/LogInput';
import './Log.scss';

export default function Log({ onSend }) {
  // let entries = null;
  // if (array) {
  //   entries = array.map(entry => <p>{entry.text}</p>);
  // }
  let [logInput, setLogInput] = useState('');
  // const handleSend = newMessage => {}
  const logInputChangeHandler = e => {
    setLogInput(e.target.value);
  };
  const logEntrySubmitHandler = e => {
    onSend(logInput);
    setLogInput('');
  };

  return (
    <div className="log">
      <h3>Log</h3>

      <LogInput
        changeHandler={logInputChangeHandler}
        submitHandler={logEntrySubmitHandler}
        logInput={logInput}
      />

      {/* {entries} */}
    </div>
  );
}
