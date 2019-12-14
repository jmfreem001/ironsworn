// Logic for die rolls
import * as _ from 'lodash';

export const handleActionRoll = (stats, selectedStat, adds = 0) => {
  let actionDieResult = _.random(1, 6);
  let challengeDieResults = [_.random(1, 10), _.random(1, 10)];
  console.log('actionDie', actionDieResult);
  console.log('Challenge Dice', challengeDieResults);
  let fullResult = actionDieResult + stats[selectedStat] + Number(adds);
  if (fullResult > 10) {
    fullResult = 10;
  }
  let result = '';
  if (
    fullResult > challengeDieResults[0] &&
    fullResult > challengeDieResults[1]
  ) {
    result = 'strong hit';
  } else if (
    fullResult > challengeDieResults[0] ||
    fullResult > challengeDieResults[1]
  ) {
    result = 'weak hit';
  } else {
    result = 'miss';
  }
  let twist = false;
  if (challengeDieResults[0] === challengeDieResults[1]) {
    twist = true;
  }
  return {
    result,
    actionDieResult,
    challengeDieResults,
    actionScore: fullResult,
    twist
  };
};

export const handleProgressRoll = () => {
  console.log('PROGRESS ROLL - TODO');
};

export const handleOracleRoll = () => {
  let die1 = _.random(0, 9);
  let die2 = _.random(0, 9);
  let oracleDieResult = null;
  if (die1 === 0 && die2 === 0) {
    oracleDieResult = 100;
  } else if (die1 === 0) {
    oracleDieResult = die2;
  } else {
    oracleDieResult = Number('' + die1 + die2);
  }

  let match = false;
  if (die1 === die2 && die1 !== 0) {
    match = true;
  }
  // console.log('die1', die1);
  // console.log('die2', die2);
  // console.log('Oracle die result', oracleDieResult);
  // let oracleDieResult = _.random(1, 100);
  return { oracleDieResult, match };
};
