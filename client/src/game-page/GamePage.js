import React, { Component } from 'react';
import Header from '../Header';
import Results from './Results';
import Character from '../Character';
import './GamePage.scss';
import Controls from './Controls';
import Choices from './Choices';
import { handleActionRoll } from '../rollers';
import Main from './Main';
import Log from './Log';
import LogBook from './LogBook';
// import forest from '../public/white-forest.jpg';

export default class GamePage extends Component {
  state = {
    currentProgress: null,
    character: null,
    moves: null,
    rolls: null,
    oracles: null,
    selectedMove: null,
    selectedStat: null,
    resultObject: null,
    adds: 0,
    entries: []
  };

  componentDidMount() {
    this.callAPI('characters')
      // FIXME:Currently only want to set the first character. n
      .then(res => this.setState({ character: res[0] }))
      .catch(err => console.log(err));

    this.callAPI('moves')
      .then(res => this.setState({ moves: res.data.moves }))
      .catch(err => console.log(err));

    this.callAPI('oracles')
      .then(res => this.setState({ oracles: res.data.oracles }))
      .catch(err => console.log(err));

    // this.callAPI('rolls')
    //   .then(res => this.setState({ rolls: res }))
    //   .catch(err => console.log(err));
  }

  callAPI = async path => {
    const response = await fetch(`api/v1/${path}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  cardClickHandler = e => {
    console.log('Event', e.target);
    let id = e.target.dataset.id;
    let chosenMove = this.state.moves.find(move => move._id === id);
    console.log('Chosen move', chosenMove);
    this.setState({ selectedMove: chosenMove });
  };

  updateSelectedStat = e => {
    // alert('TODO')
    console.log('ID', e.target.dataset.id);
    let index = e.target.dataset.id;
    let selection = this.state.selectedMove.rolls[index];
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
  handleSend = newEntry => {
    this.setState({ entries: [...this.state.entries, newEntry] });
  };
  // ADD A FUNTION TO HANDLE STAT ARRAY

  render() {
    if (!this.state.character || !this.state.moves) {
      return <div>...Loading</div>;
    }
    // || !this.state.moves)
    // console.log('Selected Move', this.state.selectedMove);
    return (
      <div className="GamePage">
        <Header text="Ironsworn Solo Play" />
        <div className="content">
          {/* <img src={forest} /> */}
          <Main
            moves={this.state.moves}
            // rolls={this.state.rolls}
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
          <Log onSend={this.handleSend} />
          <LogBook data={this.state.entries} />
          {/* Log, the story so far.  */}
        </div>
      </div>
    );
  }
}
