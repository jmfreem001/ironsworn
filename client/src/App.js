import React, { Component } from 'react';
import Header from './Header'
import Results from './Results'
import Character from './Character'
import './App.css';
import Controls from './Controls';
import Choices from './Choices'
import { handleActionRoll } from './rollers';

export default class App extends Component  {
  state = {
    currentProgress: null, 
    character: null,
    moves: null,
    rolls: null,
    selectedMove: null,
    selectedStat: null,  
    resultObject: null
  }

  componentDidMount() {
    this.callAPI('character')
      .then(res => this.setState({character: res}))
      .catch(err => console.log(err))

    this.callAPI('moves')
    .then(res => this.setState({moves: res}))
    .catch(err => console.log(err))

    this.callAPI('rolls')
    .then(res => this.setState({rolls: res}))
    .catch(err => console.log(err))
  }

  callAPI = async (path) => {
    const response = await fetch(`api/${path}`);
    const body = await response.json()
    if ( response.status !== 200) throw Error(body.message);

    return body
  }

  cardClickHandler = (e) => {
    let id = e.target.dataset.id
    let chosenMove =  this.state.moves.find(move => move.id === Number(id))
    console.log('Chosen move', chosenMove)
    this.setState({selectedMove: chosenMove })
  }

  updateSelectedStat = (e) => {
    // alert('TODO')
    console.log('ID', e.target.dataset.id)
    let selection = this.state.rolls.find(roll => roll.id === Number(e.target.dataset.id))
    let stat = selection.stat
    let stats = this.state.character.stats
    console.log('stat', stat)
    this.setState(
      {
        resultObject: handleActionRoll(stats, stat),
        selectedStat: stat
      })

}

  
  
  render() {
    let options = []
    if (this.state.selectedMove){
      let choicesArray = this.state.rolls.filter( roll => roll.move_id === this.state.selectedMove.id )
        options = <Choices displayText ='TESTING' choicesArray={choicesArray} clickHandler={this.updateSelectedStat}/>
    }

    if (!this.state.character || !this.state.moves) return <div>...Loading</div>
    let moveResults = null 
    if (this.state.resultObject){
      moveResults = <Results stats={this.state.character.stats} selectedMove={this.state.selectedMove} results={this.state.resultObject} selectedStat={this.state.selectedStat}/>
    }

    return (
      <div className="App">
        <Header />
        <Controls moves={this.state.moves} cardClickHandler={this.cardClickHandler}/>
        {moveResults}
        {options}
        {/* <Oracle /> */}
        {/* Selector for selecting move and character. */}
        <Character character={this.state.character} />
        {/* Character, Details about selected Character */}
        {/* The world. Details about world and NPCs encountered.  */}
        <div className='log'>Log</div>
        {/* Log, the story so far.  */}
      </div>
    );
  }
}
