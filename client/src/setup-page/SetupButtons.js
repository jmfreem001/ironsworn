import React from 'react';

const SetupButtons = ({ clicked, submitted }) => {
  return (
    <div className="setup-buttons">
      <button
        data-formid="setting"
        data-testid="createSettingButton"
        onClick={clicked}
        disabled={submitted.setting}
      >
        Create Setting
      </button>
      <button
        data-formid="character"
        data-testid="createCharacterButton"
        onClick={clicked}
        disabled={submitted.character}
      >
        Create Character
      </button>
    </div>
  );
};

export default SetupButtons;
