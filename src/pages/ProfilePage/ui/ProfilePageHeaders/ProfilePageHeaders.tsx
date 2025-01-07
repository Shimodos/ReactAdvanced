import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

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
