import { classNames } from '@/shared/lib/classNames/classNames';
import { ProfilePageHeaders } from './ProfilePageHeaders/ProfilePageHeaders';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text text={t('UserNotFound')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="8" max>
        <ProfilePageHeaders />

        <EditableProfileCard className={className} id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
