// write test fore selectors

import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileValidateError } from './getProfileValidateError';
import { validateProfileDataError } from '../../consts/const';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          validateProfileDataError.SERVER_ERROR,
          validateProfileDataError.INCORRECT_AGE,
          validateProfileDataError.INCORRECT_COUNTRY
        ]
      }
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual([
      validateProfileDataError.SERVER_ERROR,
      validateProfileDataError.INCORRECT_AGE,
      validateProfileDataError.INCORRECT_COUNTRY
    ]);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
