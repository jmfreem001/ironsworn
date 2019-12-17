import React, { Component } from 'react';
import Header from '../Header';

import CharacterForm from './CharacterForm';

export default class SetupPage extends Component {
  state = {
    character: null,
    selectedForm: null
  };

  updateSelectedForm = e => {
    console.log('formid', e.target.dataset.formid);
    this.setState({ selectedForm: e.target.dataset.formid });
  };
  characterSubmitHandler = newCharacter => {
    //FIXME: Currently triggers a page reload becuase of
    this.setState({ character: newCharacter });
  };

  render() {
    let displayedForm = null;
    if (this.state.selectedForm === 'character') {
      displayedForm = (
        <CharacterForm submitHandler={this.characterSubmitHandler} />
      );
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
      </div>
    );
  }
}
