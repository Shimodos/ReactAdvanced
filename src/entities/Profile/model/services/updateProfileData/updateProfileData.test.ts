// write test fore selectors
import { Country } from 'entities/Country/model/types/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency/model/types/Currency';
import { validateProfileDataError } from '../../type/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
  id: 1
};

describe('loginByUsername', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: true
      }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: true
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([validateProfileDataError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
        isLoading: false,
        readonly: true
      }
    });
    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([validateProfileDataError.INCORRECT_USER_DATA]);
  });
});
