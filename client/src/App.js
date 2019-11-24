import React, { Component } from 'react';
import Header from './Header'
import Roller from './Roller'
import Character from './Character'
import './App.css';
import Controls from './Controls';

export default class App extends Component  {
  state = {
    currentProgress: null, 
    character: null,
    moves: null,
    selectedMove: null  
  }

  componentDidMount() {
    this.callAPI('character')
      .then(res => this.setState({character: res}))
      .catch(err => console.log(err))
      this.callAPI('moves')
      .then(res => this.setState({moves: res}))
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

  render() {
      if (!this.state.character || !this.state.moves) return <div>...Loading</div>
      return (
        <div className="App">
          {/* <div className="header">Header</div> */}
          <Header />
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
