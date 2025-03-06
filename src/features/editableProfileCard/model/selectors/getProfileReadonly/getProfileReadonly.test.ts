// write test fore selectors

import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getProfileReadonly } from './getProfileReadonly';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
