import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { profileReducer } from '../../../features/editableProfileCard/model/slice/profileSlice';
import { ProfilePageHeaders } from './ProfilePageHeaders/ProfilePageHeaders';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';

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
      <Page className={classNames('', {}, [className])}>
        <VStack gap="8" max>
          <ProfilePageHeaders />

          <EditableProfileCard className={className} />
        </VStack>
      </Page>
    </DynamicModuleLoder>
  );
};

export default ProfilePage;
