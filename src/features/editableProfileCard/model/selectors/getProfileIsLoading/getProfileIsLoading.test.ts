// write test fore selectors

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
