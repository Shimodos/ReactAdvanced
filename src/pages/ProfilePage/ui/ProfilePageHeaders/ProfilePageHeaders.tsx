import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice';
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData';

interface ProfilePageHeadersProps {
  className?: string;
}
export const ProfilePageHeaders = ({ className }: ProfilePageHeadersProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onClear = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Text title={t('ProfilePage')} />

      {canEdit && (
        <HStack gap="16">
          {readonly ? (
            <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button theme={ThemeButton.OUTLINE_RED} onClick={onClear}>
                {t('Cancel')}
              </Button>

              <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                {t('Save')}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};
