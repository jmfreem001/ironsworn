import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import {
  toBeDisabled,
  toBeChecked,
  toHaveValue
} from '@testing-library/jest-dom';
import VowsForm from '../setup-page/VowsForm';
expect.extend({ toBeDisabled, toBeChecked, toHaveValue });

describe.only('VowsForm />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('Submitting the Form', () => {
    let sendHandler = null;

    let vowName1 = 'Retrieve the ancient talisman';
    let vowNotes1 =
      'The talisman hold the key to saving his the life of his father.';
    let rank1 = 'epic';
    let vow1Milestone1 = 'Go find the reclusive sorceror, Malvon';
    let vow1Milestone2 = 'Convince Malvon to be mentor';
    let vow1Milestone3 = "Complete Malvon's training";
    let vow1Milestone4 = 'Climb the mountain';
    let vow1Milestone5 = 'Battle the Ogre';
    let vow1Milestone6 = 'Delve the great catacomb to find the talisman of ';

    let vowName2 = 'Save the Village';
    let vowNotes2 = ' Really need to save them';
    let rank2 = 'troublesome';

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByTestId } = render(<VowsForm onSend={sendHandler} />));
    });

    it('submits a vow', () => {
      fireEvent.change(getByTestId('vowNameInput'), {
        target: {
          value: vowName1
        }
      });
      fireEvent.change(getByTestId('vowNotesInput'), {
        target: {
          value: vowNotes1
        }
      });

      fireEvent.change(getByTestId('vowRankInput'), {
        target: {
          value: rank1
        }
      });

      fireEvent.change(getByTestId('vowMilestonesInput'), {
        target: {
          value: vow1Milestone1
        }
      });
      fireEvent.click(getByTestId('vowMilestonesSubmit'));
      expect(getByTestId('vowMilestonesList').children.length).toBe(1);

      fireEvent.click(getByTestId('vowSubmitButton'));
      expect(sendHandler).toHaveBeenCalledWith({
        name: vowName1,
        notes: vowNotes1,
        rank: rank1,
        milestones: [vow1Milestone1],
        milestoneText: ''
      });
    });
    it.todo('appropriately displays background vow form');

    it.todo('appropriately displays inciting incident vow form');
  });
});
