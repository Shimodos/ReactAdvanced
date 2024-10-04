import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeaders } from './ProfilePageHeaders/ProfilePageHeaders';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { validateProfileDataError } from 'entities/Profile/model/type/profile';

const reducers: ReducersList = {
  profile: profileReducer
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateError = useSelector(getProfileValidateError);

  const validateErrorTranslate = {
    [validateProfileDataError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [validateProfileDataError.INCORRECT_AGE]: t('Age is required'),
    [validateProfileDataError.INCORRECT_COUNTRY]: t('Country is required'),
    [validateProfileDataError.NO_DATA]: t('No data'),
    [validateProfileDataError.SERVER_ERROR]: t('Server error')
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updataProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updataProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      // Проверяем, что введенные данные это только цифры
      if (!isNaN(Number(value)) && /^\d*$/.test(value || '')) {
        dispatch(profileActions.updataProfile({ age: Number(value || 0) }));
      }
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updataProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updataProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updataProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updataProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updataProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeaders />
        {validateError?.length &&
          validateError?.map((error, index) => (
            <Text key={index} theme={ThemeText.ERROR} text={validateErrorTranslate[error]} />
          ))}
        <ProfileCard
          data={formData}
          className={className}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
