import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './EditableProfileCard.module.scss';
import { memo, useCallback } from 'react';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { validateProfileDataError } from 'entities/Profile/model/type/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateError } from '../../model/selectors/getProfileValidateError/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}
const reducers: ReducersList = {
  profile: profileReducer
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateError = useSelector(getProfileValidateError);

  const validateErrorTranslate: Record<validateProfileDataError, string> = {
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
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount={false}>
      <div className={classNames(classes.EditableProfileCard, {}, [className])}>
        {validateError?.length &&
          validateError?.map((error: validateProfileDataError, index: number) => (
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
});

EditableProfileCard.displayName = 'EditableProfileCard';
