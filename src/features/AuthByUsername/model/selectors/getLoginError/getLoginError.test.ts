// write test fore selectors

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
