import React, { Component } from 'react';
import './Controls.scss';

const MoveCard = ({ move, clickHandler }) => {
  return (
    <div className="card">
      <p className="card-header" data-id={move._id} onClick={clickHandler}>
        {move.name}
      </p>
      <p>{move.description}</p>
    </div>
  );
};

export default class Controls extends Component {
  //Choose a move type from a select menu. Once selected it brings up cards displaying the moves.
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }

  categories = [
    'adventure',
    'relationship',
    'combat',
    'suffer',
    'quest',
    'fate'
  ];
  // need a separate component for move cards
  // need a choice box component.
  availableMoves = this.props.moves.filter(move => move.dependent === false);

  render() {
    console.log('available Moves', this.availableMoves);
    let cards = this.availableMoves.map(move => (
      <MoveCard
        key={move.id}
        move={move}
        clickHandler={this.props.cardClickHandler}
      />
    ));

    return (
      <div className="controls">
        <h3>Moves</h3>
        {cards}
      </div>
    );
  }
}
