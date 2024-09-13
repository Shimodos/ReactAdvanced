// write test fore selectors

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
  test('should return loginForm true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLogged: true
      }
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
