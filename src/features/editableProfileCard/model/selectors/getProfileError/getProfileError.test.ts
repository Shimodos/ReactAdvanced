// write test fore selectors

import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    };
    expect(getProfileError(state as StateSchema)).toEqual('error');
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
