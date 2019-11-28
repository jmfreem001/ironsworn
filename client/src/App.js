import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import Character from './Character';
import './App.css';
import Controls from './Controls';
import Choices from './Choices';
import { handleActionRoll } from './rollers';
import Main from './Main';

export default class App extends Component {
  state = {
    currentProgress: null,
    character: null,
    moves: null,
    rolls: null,
    selectedMove: null,
    selectedStat: null,
    resultObject: null,
    adds: 0
  };

  componentDidMount() {
    this.callAPI('character')
      .then(res => this.setState({ character: res }))
      .catch(err => console.log(err));

    this.callAPI('moves')
      .then(res => this.setState({ moves: res }))
      .catch(err => console.log(err));

    this.callAPI('rolls')
      .then(res => this.setState({ rolls: res }))
      .catch(err => console.log(err));
  }

  callAPI = async path => {
    const response = await fetch(`api/${path}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  cardClickHandler = e => {
    let id = e.target.dataset.id;
    let chosenMove = this.state.moves.find(move => move.id === Number(id));
    console.log('Chosen move', chosenMove);
    this.setState({ selectedMove: chosenMove });
  };

  updateSelectedStat = e => {
    // alert('TODO')
    console.log('ID', e.target.dataset.id);
    let selection = this.state.rolls.find(
      roll => roll.id === Number(e.target.dataset.id)
    );
    let stat = selection.stat;
    // Account for edge cases where stat is the lesser or higher of two stats.
    let statArray = stat.split(' ');
    if (statArray.length > 1) {
      console.log('comparison', selection.comparison);
      //TODO MOVE THIS AND THE WHOLE EDGE CASE TO A SEPARATE FUNCTION BELOW AND RETURN THE STAT VALUE/
    }
    console.log('Stat Array', statArray);
    let stats = this.state.character.stats;
    console.log('stat', stat);
    this.setState({
      resultObject: handleActionRoll(stats, stat),
      selectedStat: stat
    });
  };
  // ADD A FUNTION TO HANDLE STAT ARRAY

  render() {
    if (!this.state.character || !this.state.moves)
      return <div>...Loading</div>;

    return (
      <div className="App">
        <Header />
        <Main
          moves={this.state.moves}
          rolls={this.state.rolls}
          cardClickHandler={this.cardClickHandler}
          updateSelectedStat={this.updateSelectedStat}
          character={this.state.character}
          selectedMove={this.state.selectedMove}
          resultObject={this.state.resultObject}
          selectedStat={this.state.selectedStat}
          adds={this.state.adds}
        />
        {/* <Oracle /> */}
        {/* Selector for selecting move and character. */}
        <Character character={this.state.character} />
        {/* Character, Details about selected Character */}
        {/* The world. Details about world and NPCs encountered.  */}
        {/* PROGRESS BARS INCLUDING QUESTS BOND AND COMBAT JOURNEYS ETC. */}
        {/* NOTABLE ELEMENTS LOCATIONS PEOPLE COMMUNITIES ETC. */}
        <div className="log">Log</div>
        {/* Log, the story so far.  */}
      </div>
    );
  }
}
