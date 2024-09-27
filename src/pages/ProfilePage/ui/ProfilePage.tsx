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
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile';
// import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeaders } from './ProfilePageHeaders/ProfilePageHeaders';

const reducers: ReducersList = {
  profile: profileReducer
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
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

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeaders />
        <ProfileCard
          data={formData}
          className={className}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
