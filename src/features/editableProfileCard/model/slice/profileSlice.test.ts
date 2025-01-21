import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('getLoginPassword', () => {
  test('test set username', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updataProfile({
          username: '123456'
        })
      )
    ).toEqual({
      form: { username: '123456' }
    });
  });
});
