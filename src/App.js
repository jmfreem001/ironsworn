import React, { Component } from 'react';
import Roller from './Roller'
import Character from './Character'
import './App.css';
import Controls from './Controls';

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
        supply: 5,
        health: 5, 
        spirit: 5,
        momentum: 2,
      },

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
    },
    moves: [
        {
          id: 1,
          name: 'face danger',
          description: 'Attempt something risky or react to an ' +
          'imminent threat.',
          options: [
            {choice:'You act with speed, agility, or precision', stat: 'edge'},
            {choice:'You act with charm, loyalty, or courage', stat: 'heart'},
            {choice:'You act with aggressive action, forceful defense, strength, or endurance', stat: 'iron'},
            {choice:'You act with deception, stealth, or trickery', stat: 'shadow'},
            {choice:'You act with expertise, insight, or observation', stat: 'wits'}
          ],
          strongHit: {description: 'You are successful.', value: 1, track: 'momentum'},
          weakHit: {
            description: 'You succeed, but face a troublesome cost.', 
            options: [
              {
                choice: 'You are delayed, lose advantage, or face a new danger', 
                value: -1, 
                track: 'momentum'
              },
              {
                choice: 'You are tired or hurt', 
                value: 1, 
                track: 'harm',
                newMove: 'endure harm'
              },
              {
                choice: ' You are dispirited or afraid', 
                value: 1, 
                track: 'stress',
                newMove: 'endure stress'
              },              {
                choice: 'You sacrifice resources', 
                value: -1, 
                track: 'supply'
              },
            ],
          },
          miss: {description: 'You fail, or your progress is undermined by a dramatic and costly turn of events', newMove: 'pay the price'}
        }
      ],
    selectedMove: null
    
  }


      cardClickHandler = (e) => {
        let id = e.target.dataset.id
        let chosenMove =  this.state.moves.find(move => move.id === Number(id))
        console.log('Chosen move', chosenMove)
        this.setState({selectedMove: chosenMove })
      }
  render() {
      return (
        <div className="App">
          <div className="header">Header</div>
          {/* <div className="controls">Controls</div> */}
          <Controls moves={this.state.moves} cardClickHandler={this.cardClickHandler}/>
          <Roller stats={this.state.character.stats} selectedMove={this.state.selectedMove}/>
          {/* <Oracle /> */}
          {/* Selector for selecting move and character. */}
          {/* <div className='character'>Character</div> */}
          <Character character={this.state.character} />
          {/* <div className='main'>Main
            
          </div> */}
          {/* <div className='results'> Results </div> */}
          {/* Character, Details about selected Character */}
          {/* The world. Details about world and NPCs encountered.  */}
          <div className='log'>Log</div>
          {/* Log, the story so far.  */}
        </div>
    );
  }
}
