// write test fore selectors
import { Country } from 'entities/Country/model/types/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency/model/types/Currency';
import { validateProfileDataError } from 'entities/Profile/model/type/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD
};

describe('loginByUsername', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without last name and firs name', async () => {
    const result = validateProfileData({
      ...data,
      first: ''
      // lastname: ''
    });

    expect(result).toEqual([validateProfileDataError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([validateProfileDataError.INCORRECT_AGE]);
  });
});
