import React, { Component } from 'react'
// import Buttons from './Buttons'
import * as _ from 'lodash'
import './Results.css'
// import { handleActionRoll } from './rollers'


// May rename to Results. 



export default class Results extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: null,
            actionScore: null,
            selectedStat: 'heart',
            adds: 0,
            actionDieResult: null,
            challengeDieResults: null,
            dieRolled: false
        }
    }
    // Generate stats Buttons
    stats = ['edge', 'heart', 'iron', 'shadow', 'wits']



    // handleDiceRoll = () => {
    //     let actionDieResult = _.random(1,6)
    //     let challengeDieResults = [_.random(1,10), _.random(1,10)]
    //     console.log('actionDie', actionDieResult)
    //     console.log('Challenge Dice', challengeDieResults)
    //     let fullResult = actionDieResult + this.props.stats[this.state.selectedStat] + Number(this.state.adds)
    //     if (fullResult > 10) {
    //         fullResult = 10
    //     }
    //     let result = ''
    //     if (fullResult > challengeDieResults[0] && fullResult > challengeDieResults[1]){
    //         result = 'Strong Hit'
    //     } else if (fullResult > challengeDieResults[0] || fullResult > challengeDieResults[1]){
    //         result = 'Weak Hit'
    //     }else {
    //         result = 'Miss'
    //     }

    //     if (challengeDieResults[0] === challengeDieResults[1]){
    //         result += ' and a twist or complication'
    //     }
    //     this.setState( {
    //         result: result,
    //         actionDieResult: actionDieResult,
    //         challengeDieResults: challengeDieResults,
    //         dieRolled: true,
    //         actionScore: fullResult
    //     } )
        
    // }

    statButtonHandler = (e) => {
        let stat = e.target.textContent

        this.setState(
            {
                selectedStat: stat.trim(),
                result: null,
                actionScore: null,
                dieRolled: false,
                adds: 0
            })
    }
    
    changeHandler =(e) => {
        this.setState({adds:e.target.value})
    }

    render() {
        // console.log('', )
        console.log('state', this.state)
        console.log('Props', this.props)
        let moveResult = ''

        if (this.props.results){
            console.log('results', this.props.results)
            let {result, actionDieResult, actionScore, challengeDieResults, twist}= this.props.results
            moveResult = <div className='results'>
                        <div>
                            <h3>Action Die Result</h3>
                            <p ><span className="six-sided die">{actionDieResult}</span></p>
                        </div>
                        <div>
                            <h3>Action Score</h3>
                            <h4>{actionScore}</h4>
                            <p> (+{this.props.stats[this.props.selectedStat]} from {this.props.selectedStat}  
                            +{this.state.adds} from adds)</p>
                        </div>
                        <div>

                        </div>
                            <h3>Challenge Dice</h3>
                            <p><span className="ten-sided die">{challengeDieResults[0]}</span> <span className="ten-sided die">{challengeDieResults[1]}</span></p>
                        
                            
                            <p>{result}</p>
                    </div>
            
        } 

        return (
            <>
                {/* <div className="Roller"> */}
                    {/* <Buttons array={this.stats} clickHandler={this.statButtonHandler} /> */}
                    {/* <label htmlFor="adds">Adds: +</label> */}
                    {/* <input className='adds' disabled={this.state.dieRolled} type="number" name="adds" onChange={this.changeHandler}value={this.state.adds} min={0} max={5}/> */}
                    {/* <br /> */}
                    {/* <button style={{textTransform: "capitalize"}}onClick={this.handleDiceRoll}>Roll + {this.state.selectedStat}</button>     */}
                {/* </div> */}
                {moveResult}

            </>
        )
    }
}
