import React, { Component } from 'react';
import Header from '../Header';
import './SetupPage.scss';
import CharacterForm from './CharacterForm';
import Character from '../Character';
import BondsForm from './BondsForm';

export default class SetupPage extends Component {
  state = {
    character: null,
    selectedForm: null,
    characterSubmitted: null,
    bondsRemaining: 3
  };

  updateSelectedForm = e => {
    // console.log('formid', e.target.dataset.formid);
    this.setState({ selectedForm: e.target.dataset.formid });
  };
  characterSubmitHandler = newCharacter => {
    this.setState({
      character: newCharacter,
      characterSubmitted: true,
      selectedForm: 'bonds'
    });
  };
  bondSubmitHandler = newBond => {
    this.setState({
      character: {
        ...this.state.character,
        bonds: this.state.character.bonds.concat(newBond)
      },
      bondSubmitted: true,
      // selectedForm: null,
      bondsRemaining: this.state.bondsRemaining - 1
    });
  };

  render() {
    console.log('State', this.state);
    let displayedForm = null;
    let result = null;
    let characterDisplay = null;
    let bondResult = null;
    let characterResult = null;
    let vowResult = null;
    let settingResult = null;
    if (this.state.characterSubmitted) {
      characterResult = (
        <li data-testid="characterSubmitResult">Character Created!</li>
      );
    }
    if (this.state.bondsRemaining === 0) {
      bondResult = <li data-testid="bondsSubmitResult">Bonds Created!</li>;
    }
    console.log('Bonds Remaining', this.state.bondsRemaining);
    if (this.state.character) {
      characterDisplay = <Character character={this.state.character} />;
    }
    if (this.state.selectedForm === 'character') {
      displayedForm = <CharacterForm onSend={this.characterSubmitHandler} />;
    } else if (this.state.selectedForm === 'bonds') {
      displayedForm = (
        <>
          <h3>
            Create or Reserve{' '}
            <span data-testid="bondsRemaining">
              {this.state.bondsRemaining}
            </span>{' '}
            more bonds.
          </h3>
          <BondsForm onSend={this.bondSubmitHandler} />
        </>
      );
    }
    let resultList = [characterResult, bondResult, vowResult, settingResult];
    //TODO: Turn results into an ul of the results.
    if (this.state.characterSubmitted) {
      result = (
        <div className="submit-result">
          <h3>Progress</h3>
          <ul>{characterResult}</ul>
          <ul>{bondResult}</ul>
        </div>
      );
    }

    return (
      <div className="setup-page">
        <Header text="Character/World Setup" />
        <div className="setup-buttons">
          <button
            data-formid="setting"
            data-testid="createSettingButton"
            onClick={this.updateSelectedForm}
          >
            Create Setting
          </button>
          <button
            data-formid="character"
            data-testid="createCharacterButton"
            onClick={this.updateSelectedForm}
            disabled={this.state.characterSubmitted}
          >
            Create Character
          </button>
        </div>
        {displayedForm}
        {result}
        {characterDisplay}
      </div>
    );
  }
}
