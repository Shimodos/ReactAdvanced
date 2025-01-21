import { Profile } from 'entities/Profile';
import { validateProfileDataError } from 'entities/Profile/model/type/profile';

// export interface EditableProfileCardSchema {}

// export enum validateProfileDataError {
//   INCORRECT_USER_DATA = 'Incorrect user data',
//   INCORRECT_AGE = 'Age is required',
//   INCORRECT_COUNTRY = 'Country is required',
//   NO_DATA = 'No data',
//   SERVER_ERROR = 'Server error'
// }

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateError?: validateProfileDataError[];
}
