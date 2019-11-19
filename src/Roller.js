import React, { Component } from 'react'
import Buttons from './Buttons'
import * as _ from 'lodash'

export default class Roller extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: null,
            selectedStat: 'heart',
            adds: 0,
            actionDieResult: null,
            challengeDieResults: null
        }
    }
    // Generate stats Buttons
    stats = ['edge', 'heart', 'iron', 'shadow', 'wits']



    handleDiceRoll = () => {
        let actionDieResult = _.random(1,6)
        let challengeDieResults = [_.random(1,10), _.random(1,10)]
        console.log('actionDie', actionDieResult)
        console.log('Challenge Dice', challengeDieResults)
        let fullResult = actionDieResult + this.props.stats[this.state.selectedStat] + this.state.adds
        console.log('Full Result', fullResult)
        let result = ''
        if (fullResult > challengeDieResults[0] && fullResult > challengeDieResults[1]){
            console.log('Strong Hit')
            result = 'Strong Hit'
        } else if (fullResult > challengeDieResults[0] || fullResult > challengeDieResults[1]){
            console.log('Weak Hit')
            result = 'Weak Hit'
        }else {
            console.log('Miss')
            result = 'Miss'
        }
        this.setState( {
            result: result,
            actionDieResult: actionDieResult,
            challengeDieResults: challengeDieResults
        } )
        
    }

    statButtonHandler = (e) => {
        let stat = e.target.textContent

        this.setState({selectedStat: stat.trim()})
    }
    
    changeHandler =(e) => {
        this.setState({adds:e.target.value})
    }

    render() {
        // console.log('', )
        console.log('state', this.state)
        let result = ''
        if (this.state.result){
            result = <div>
                <h3>Action Die Result</h3>
                <p>{this.state.actionDieResult}</p>
                <h3>Modifiers</h3>
                <p> {this.state.selectedStat}: +{this.props.stats[this.state.selectedStat] } Adds: +{this.state.adds}</p>
                <h3>Challenge Dice</h3>
                <p>{this.state.challengeDieResults[0]} {this.state.challengeDieResults[1]}</p>
                <p>{this.state.result}</p>
            </div>
            
        } 
        
        return (
            <div className="Roller">
                <Buttons array={this.stats} clickHandler={this.statButtonHandler} />
                <input type="number" name="adds" onChange={this.changeHandler}value={this.state.adds} min={0}max={10}/>
                <br />
                <button onClick={this.handleDiceRoll}>Roll + {this.state.selectedStat}</button>
                {result}
            </div>
        )
    }
}
