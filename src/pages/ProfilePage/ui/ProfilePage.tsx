import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer
};
interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('ProfilePage')}</div>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
