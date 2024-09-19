import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
  profile: profileReducer
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('ProfilePage')}</div>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
