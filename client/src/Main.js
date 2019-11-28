import React, { Component } from 'react';
import Controls from './Controls';
import Choices from './Choices';
import Results from './Results';
// import { handleActionRoll } from './rollers';

/*Component responsible for managing th 3 main divs, 
    the moves(currently controls), choices, and Results
    This will handle the core game logic and switching between these three divs. 
*/

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // category: null,
    };
  }

  render() {
    console.log('Main props', this.props);
    let options = [];
    if (this.props.selectedMove) {
      let choicesArray = this.props.rolls.filter(
        roll => roll.move_id === this.props.selectedMove.id
      );
      options = (
        <Choices
          displayText={this.props.selectedMove.name}
          choicesArray={choicesArray}
          clickHandler={this.props.updateSelectedStat}
        />
      );
    }
    if (this.props.resultObject) {
      options = null;
    }

    // if (!this.props.character || !this.props.moves) return <div>...Loading</div>
    let moveResults = null;
    console.log('MAIN selected stat', this.props.selectedStat);
    if (this.props.resultObject) {
      moveResults = (
        <Results
          stats={this.props.character.stats}
          selectedMove={this.props.selectedMove}
          results={this.props.resultObject}
          selectedStat={this.props.selectedStat}
          adds={this.props.adds}
        />
      );
    }
    let moveList = null;
    // Show move list only if there isn't a selcted move
    if (!this.props.selectedMove) {
      moveList = (
        <Controls
          moves={this.props.moves}
          cardClickHandler={this.props.cardClickHandler}
        />
      );
    }

    return (
      <div className="main">
        {/* Conditionally display each one */}
        {moveList}
        {moveResults}
        {options}
      </div>
    );
  }
}
