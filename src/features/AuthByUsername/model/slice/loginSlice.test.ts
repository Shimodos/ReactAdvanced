import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginShema';
import loginByUsername from '../services/loginByUsername/loginByUsername';

describe('getLoginPassword', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234'))).toEqual({
      username: '1234'
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('admin'))).toEqual({
      password: 'admin'
    });
  });
});
