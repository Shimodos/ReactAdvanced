import { Profile } from 'entities/Profile';
import { validateProfileDataError } from '../../consts/const';

export const validateProfileData = (profile: Profile) => {
  if (!profile) {
    return [validateProfileDataError.NO_DATA];
  }

  const { first, lastname, age, country } = profile;
  const errors: validateProfileDataError[] = [];

  if (!first) {
    errors.push(validateProfileDataError.INCORRECT_USER_DATA);
  }

  if (!lastname) {
    errors.push(validateProfileDataError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(validateProfileDataError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(validateProfileDataError.INCORRECT_COUNTRY);
  }

  return errors;
};
