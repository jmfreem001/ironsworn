
// Logic for die rolls
import * as _ from 'lodash'

export const handleActionRoll = (stats, selectedStat, adds=0) => {
    let actionDieResult = _.random(1,6)
    let challengeDieResults = [_.random(1,10), _.random(1,10)]
    console.log('actionDie', actionDieResult)
    console.log('Challenge Dice', challengeDieResults)
    let fullResult = actionDieResult + stats[selectedStat] + Number(adds)
    if (fullResult > 10) {
        fullResult = 10
    }
    let result = ''
    if (fullResult > challengeDieResults[0] && fullResult > challengeDieResults[1]){
        result = 'strong hit'
    } else if (fullResult > challengeDieResults[0] || fullResult > challengeDieResults[1]){
        result = 'weak hit'
    }else {
        result = 'miss'
    }
    let twist = false
    if (challengeDieResults[0] === challengeDieResults[1]){
        twist = true
    }
    return {result, actionDieResult, challengeDieResults, actionScore: fullResult, twist}
}