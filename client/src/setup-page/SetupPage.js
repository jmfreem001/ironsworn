import React, { Component } from 'react';
import Header from '../Header';

import CharacterForm from './CharacterForm';

export default class SetupPage extends Component {
  state = {
    character: null,
    selectedForm: null,
    characterSubmitted: null
  };

  updateSelectedForm = e => {
    // console.log('formid', e.target.dataset.formid);
    this.setState({ selectedForm: e.target.dataset.formid });
  };
  characterSubmitHandler = newCharacter => {
    this.setState({ character: newCharacter, characterSubmitted: true });
  };

  render() {
    let displayedForm = null;
    let result = null;
    if (this.state.characterSubmitted) {
      result = (
        <div data-testid="characterSubmitResult">
          Character Created successfully!
        </div>
      );
    }
    if (this.state.selectedForm === 'character') {
      displayedForm = <CharacterForm onSend={this.characterSubmitHandler} />;
    }
    return (
      <div>
        <Header text="Character/World Setup" />
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
        >
          Create Character
        </button>
        {displayedForm}
        {result}
      </div>
    );
  }
}
