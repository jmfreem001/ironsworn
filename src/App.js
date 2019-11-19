import React, { Component } from 'react';
import Roller from './Roller'
import Character from './Character'
import './App.css';

export default class App extends Component  {
  state = {
    currentProgress: null, 
    character: {
      name: 'Alindus',
      role: 'Hot-headed Inexperienced Warrior',
      stats: {
        edge: 2,
        heart: 2,
        iron: 3,
        shadow: 1,
        wits: 1,
      },
      supply: 5,
      health: 5, 
      spirit: 5,
      currentMomentum: 2,
      maxMomentum: 10,
      momentumReset: 2,
      debilities: 0,
      conditions: {
        wounded: null, 
        shaken: null,
        unprepared: null,
        encumbered: null,
      },
      banes: {
        maimed: null,
        corrupted: null
      }, 
      burdens: {
        cursed: null,
        tormented: null
      },
      bonds: [],
      vows: [],
      equipment: ['A simple ax', 'A family heirloom', 'simple armor', 'A battered shield']
    }
  }
  
  render() {
      return (
        <div className="App">
          <div className="header">Header</div>
          <div className="controls">Controls</div>
          <Roller stats={this.state.character.stats}/>
          {/* <Oracle /> */}
          {/* Selector for selecting move and character. */}
          {/* <div className='character'>Character</div> */}
          <Character character={this.state.character} />
          <div className='main'>Main</div>
          {/* Character, Details about selected Character */}
          {/* The world. Details about world and NPCs encountered.  */}
          <div className='log'>Log</div>
          {/* Log, the story so far.  */}
        </div>
    );
  }
}
