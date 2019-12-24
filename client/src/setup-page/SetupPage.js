import React, { Component } from 'react';
import Header from '../common/Header/Header';
import './SetupPage.scss';
import CharacterForm from './CharacterForm';
import Character from '../common/Character/Character';
import BondsForm from './BondsForm';
import SubmissionProgress from './SubmissionProgress';
import SetupButtons from './SetupButtons';
import RemainingBonds from './RemainingBonds';
import VowsForm from './VowsForm';

export default class SetupPage extends Component {
  state = {
    character: null,
    selectedForm: null,
    submitted: {
      character: false,
      bonds: false,
      vows: false,
      setting: false
    },
    bondsRemaining: 3,
    vowsRemaining: 2
  };

  updateSelectedForm = e => {
    this.setState({ selectedForm: e.target.dataset.formid });
  };
  characterSubmitHandler = newCharacter => {
    this.setState({
      character: newCharacter,
      submitted: { ...this.state.submitted, character: true },
      selectedForm: 'bonds'
    });
  };
  bondSubmitHandler = newBond => {
    this.setState({
      character: {
        ...this.state.character,
        bonds: this.state.character.bonds.concat(newBond)
      },
      bondsRemaining: this.state.bondsRemaining - 1
    });
    // Check if the currently submitted bond was the last one. and if so move to vows.
    if (this.state.bondsRemaining === 1) {
      this.setState({
        selectedForm: 'vows',
        submitted: { ...this.state.submitted, bonds: true }
      });
    }
  };

  vowSubmitHandler = newVow => {
    this.setState({
      character: {
        ...this.state.character,
        vows: this.state.character.vows.concat(newVow),
        vowsRemaining: this.state.vowsRemaining - 1
      }
    });
    // Check if the currently submitted vow was the last one. and if so clear the form from view.
    if (this.state.vowsRemaining === 1) {
      this.setState({
        selectedForm: null,
        submitted: { ...this.state.submitted, vows: true }
      });
    }
  };

  render() {
    console.log('State', this.state);
    let displayedForm = null;
    let characterDisplay = null;
    if (this.state.character) {
      characterDisplay = <Character character={this.state.character} />;
    }
    if (this.state.selectedForm === 'character') {
      displayedForm = <CharacterForm onSend={this.characterSubmitHandler} />;
    } else if (this.state.selectedForm === 'bonds') {
      displayedForm = (
        <>
          <RemainingBonds remaining={this.state.bondsRemaining} />
          <BondsForm onSend={this.bondSubmitHandler} />
        </>
      );
    } else if (this.state.selectedForm === 'vows') {
      displayedForm = <VowsForm onSend={this.vowSubmitHandler} />;
    }
    return (
      <div className="setup-page">
        <Header text="Character/World Setup" />
        <SetupButtons
          clicked={this.updateSelectedForm}
          submitted={this.state.submitted}
        />
        {displayedForm}
        <SubmissionProgress array={this.state.submitted} />
        {characterDisplay}
      </div>
    );
  }
}
