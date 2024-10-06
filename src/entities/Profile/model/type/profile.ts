import { Country } from 'entities/Country/';
import { Currency } from 'entities/Currency/';

export enum validateProfileDataError {
  INCORRECT_USER_DATA = 'Incorrect user data',
  INCORRECT_AGE = 'Age is required',
  INCORRECT_COUNTRY = 'Country is required',
  NO_DATA = 'No data',
  SERVER_ERROR = 'Server error'
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateError?: validateProfileDataError[];
}
