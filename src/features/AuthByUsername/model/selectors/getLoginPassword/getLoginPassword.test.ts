// write test fore selectors

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return loginForm true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password'
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('password');
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
