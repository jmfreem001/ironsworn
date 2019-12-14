import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Log from '../game-page/Log';
import LogInput from '../game-page/LogInput';

describe('<Log Input />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();
      //   ({ getByTestId } = render(
      //     <Log>
      //       <LogInput />
      //     </Log>
      //   ))
      // );
      ({ getByTestId } = render(
        <Log onSend={sendHandler}>
          <LogInput />
        </Log>
      ));

      fireEvent.change(getByTestId('logText'), {
        target: {
          value: 'New message'
        }
      });
      fireEvent.click(getByTestId('submitEntryButton'));
    });
    it('clears the text field', () => {
      expect(getByTestId('logText').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
