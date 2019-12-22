import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import {
  toBeDisabled,
  toBeChecked,
  toHaveValue
} from '@testing-library/jest-dom';
import BondsForm from '../setup-page/BondsForm';
expect.extend({ toBeDisabled, toBeChecked, toHaveValue });

describe.only('<BondsForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('Submitting the Form', () => {
    let sendHandler = null;
    const bondName1 = 'Farka';
    const bondName2 = 'Mika';
    const bondNotes1 = 'A vilage to call home';
    const bondNotes2 = 'A kindly matron';
    let unnassignedBonds = 3;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<BondsForm onSend={sendHandler} />));
    });

    it('submits a bond', () => {
      // submit first bond
      fireEvent.change(getByTestId('bondNameInput'), {
        target: {
          value: bondName1
        }
      });
      fireEvent.change(getByTestId('bondNotesInput'), {
        target: {
          value: bondNotes1
        }
      });
      fireEvent.click(getByTestId('bondSubmitButton'));
      expect(sendHandler).toHaveBeenCalledWith({
        name: bondName1,
        notes: bondNotes1,
        reserved: false,
        ticks: 1
      });
      expect(getByTestId('bondNameInput')).not.toHaveValue(bondName1);
      expect(getByTestId('bondNotesInput')).not.toHaveValue(bondNotes1);
    });
    it('disables other boxes when reserved', () => {
      fireEvent.click(getByTestId('bondReserveBox'));
      expect(getByTestId('bondReserveBox')).toBeChecked();
      expect(getByTestId('bondNameInput')).toBeDisabled();
      expect(getByTestId('bondNotesInput')).toBeDisabled();
    });
    it('unchecks reserved box after submission', () => {
      fireEvent.click(getByTestId('bondReserveBox'));
      expect(getByTestId('bondReserveBox')).toBeChecked();

      fireEvent.click(getByTestId('bondSubmitButton'));
      expect(getByTestId('bondReserveBox')).not.toBeChecked();
    });
  });
});
