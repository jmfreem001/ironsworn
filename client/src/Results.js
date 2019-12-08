import React, { Component } from 'react';

import * as _ from 'lodash';
import './Results.scss';

const Results = ({ stats, selectedMove, results, selectedStat, adds }) => {
  // let moveResult = '';

  //TODO HANDLE items that have a higher or lower cpmponnet.
  //treat all items like an array or at least check if ther is a space?

  if (results) {
    console.log('results', results);
    let {
      result,
      actionDieResult,
      actionScore,
      challengeDieResults,
      twist
    } = results;
    console.log('Selected Move', selectedMove);
    return (
      <div className="results">
        <div>
          <h3>Action Die Result</h3>
          <p>
            <span className="six-sided die">{actionDieResult}</span>
          </p>
        </div>
        <div>
          <h3>Action Score</h3>
          <h4>{actionScore}</h4>
          <p>
            {' '}
            (+{stats[selectedStat]} from {selectedStat} +{adds} from adds)
          </p>
        </div>
        <div></div>
        <h3>Challenge Dice</h3>
        <p>
          <span className="ten-sided die">{challengeDieResults[0]}</span>{' '}
          <span className="ten-sided die">{challengeDieResults[1]}</span>
        </p>

        <p>{result}</p>
        <p>{twist ? 'A Twist or unexpected occurrence happens' : null}</p>
      </div>
    );
  }
};

export default Results;
