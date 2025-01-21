// write test fore selectors

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileData } from './getProfileData';

describe('getLoginError', () => {
  test('should return loginForm error', () => {
    const data = {
      first: 'John',
      lastname: 'Doe',
      age: 30,
      city: 'New York',
      username: 'johndoe',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should return loginForm error empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
