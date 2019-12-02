import React from 'react';

export default function LogInput({ text, changeHandler, submitHandler }) {
  return (
    <div>
      <label htmlFor="log-input">{text}</label>
      <textarea name="log-input" onChange={changeHandler} />
      <button onClick={submitHandler}>Submit Entry</button>
    </div>
  );
}
