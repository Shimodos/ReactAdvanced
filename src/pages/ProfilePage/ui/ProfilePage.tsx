import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer
} from 'entities/Profile';
// import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
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
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeaders />
        <ProfileCard data={data} className={className} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
