import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeDisabled, toBeChecked } from '@testing-library/jest-dom';
import CharacterForm from '../setup-page/CharacterForm';
expect.extend({ toBeDisabled, toBeChecked });

describe('<CharacterForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('Submitting the Form', () => {
    let sendHandler = null;
    const charName = 'Bormir';
    const charRole = 'Mild-mannered Ex-raider';
    const charNotes =
      'Bormir looks intimidating but he is kind-hearted and reformed becuase of the love of Mika and her children.';
    const primaryStat = 'iron';
    const secondaryStat1 = 'heart';
    const secondaryStat2 = 'edge';
    const tertiaryStat1 = 'wits';
    const tertiaryStat2 = 'shadow';

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<CharacterForm onSend={sendHandler} />));

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
      fireEvent.change(getByTestId('characterNotesInput'), {
        target: {
          value: charNotes
        }
      });
      fireEvent.click(getByTestId(`primaryStatInput-${primaryStat}`));
    });

    it('calls the send handler', () => {
      fireEvent.click(getByTestId(`firstSecondaryStatInput-${secondaryStat1}`));
      fireEvent.click(
        getByTestId(`secondSecondaryStatInput-${secondaryStat2}`)
      );

      fireEvent.click(getByTestId('characterSubmitButton'));
      expect(sendHandler).toHaveBeenCalledWith({
        name: charName,
        role: charRole,
        notes: charNotes,
        stats: {
          [primaryStat]: 3,
          [secondaryStat1]: 2,
          [secondaryStat2]: 2,
          [tertiaryStat1]: 1,
          [tertiaryStat2]: 1,
          supply: 5,
          health: 5,
          spirit: 5,
          momentum: 2
        },
        primaryStat: primaryStat,
        secondaryStat1: secondaryStat1,
        secondaryStat2: secondaryStat2,
        maxMomentum: 10,
        momentumReset: 2
      });
    });
    it('allows stat to be selected only once', () => {
      expect(getByTestId(`primaryStatInput-${primaryStat}`)).toBeChecked();
      expect(
        getByTestId(`firstSecondaryStatInput-${primaryStat}`)
      ).toBeDisabled();
    });
  });
});
