import React from 'react';

const SubmissionProgress = ({ array }) => {
  let submitArray = Object.entries(array);
  // Get array with only submitted items
  let submitted = submitArray.filter(item => item[1] === true);

  let results = submitted.map((item, index) => {
    let name = item[0];
    return (
      <li key={index}>
        <span className="submit-result-name">{name}</span>
        <span data-testid={`${name}SubmitResult`}> Created!</span>
      </li>
    );
  });

  let display = null;
  if (submitted.length > 0) {
    display = (
      <div className="submit-result">
        <h3>Progress</h3>
        <ul>{results}</ul>
      </div>
    );
  }
  return display;
};

export default SubmissionProgress;
