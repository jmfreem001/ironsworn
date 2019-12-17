import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import CharacterForm from '../setup-page/CharacterForm';

describe.only('<CharacterForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('Submitting the Form', () => {
    let sendHandler = null;
    const charName = 'Bormir';
    const charRole = 'Mild-mannered Ex-raider';
    const primaryStat = 'iron';
    const secondaryStat1 = 'heart';
    const secondaryStat2 = 'edge';
    const tertiaryStat1 = 'will';
    const tertiaryStat2 = 'shadow';

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<CharacterForm submitHandler={sendHandler} />));

      fireEvent.change(getByTestId('characterNameInput'), {
        target: {
          value: charName
        }
      });
      fireEvent.change(getByTestId('characterRoleInput'), {
        target: {
          value: charRole
        }
      });
      fireEvent.click(getByTestId('primaryStatInput'), {
        target: {
          value: primaryStat
        }
      });
    });

    it('calls the send handler', () => {
      fireEvent.click(getByTestId('firstSecondaryStatInput'), {
        target: {
          value: secondaryStat1
        }
      });
      fireEvent.click(getByTestId('secondSecondaryStatInput'), {
        target: {
          value: secondaryStat2
        }
      });
      fireEvent.click(getByTestId('characterSubmitButton'));
      expect(sendHandler).toHaveBeenCalledWith({
        name: charName,
        role: charRole,
        primaryStat: primaryStat,
        secondaryStat1: secondaryStat1,
        secondaryStat2: secondaryStat2,
        tertiaryStat1,
        tertiaryStat2,
        supply: 5,
        health: 5,
        spirit: 5,
        momentum: 2,
        maxMomentum: 10,
        momentumReset: 2
      });
    });
    it.todo('allows stat to be selected only once');
  });
});
