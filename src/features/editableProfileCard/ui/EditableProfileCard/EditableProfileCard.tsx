import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { validateProfileDataError } from 'entities/Profile/model/type/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateError = useSelector(getProfileValidateError);
  const { id } = useParams<{ id: string }>();

  const validateErrorTranslate = {
    [validateProfileDataError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [validateProfileDataError.INCORRECT_AGE]: t('Age is required'),
    [validateProfileDataError.INCORRECT_COUNTRY]: t('Country is required'),
    [validateProfileDataError.NO_DATA]: t('No data'),
    [validateProfileDataError.SERVER_ERROR]: t('Server error')
  };

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    }
  });

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
    <div className={classNames(classes.EditableProfileCard, {}, [className])}>
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
  );
});

EditableProfileCard.displayName = 'EditableProfileCard';
