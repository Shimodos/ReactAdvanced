import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePageHeaders.module.scss';
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
    <div className={classNames(classes.ProfilePageHeaders, {}, [className])}>
      <Text title={t('ProfilePage')} />

      {canEdit && (
        <div className={classes.btnsWrapper}>
          {readonly ? (
            <Button className={classes.editBtn} theme={ThemeButton.OUTLINE} onClick={onEdit}>
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button className={classes.editBtn} theme={ThemeButton.OUTLINE_RED} onClick={onClear}>
                {t('Cancel')}
              </Button>

              <Button className={classes.saveBtn} theme={ThemeButton.OUTLINE} onClick={onSave}>
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
