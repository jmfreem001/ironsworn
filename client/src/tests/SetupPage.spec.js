import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import SetupPage from '../setup-page/SetupPage';

describe('<SetupPage />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the character button', () => {
    it('displays character form', () => {});
  });
  describe('clicking the setting button', () => {
    it('displays setting form', () => {});
  });
});
