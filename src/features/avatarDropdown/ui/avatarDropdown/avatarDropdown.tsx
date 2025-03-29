import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './avatarDropdown.module.scss';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { MyDropdown } from '@/shared/ui/Popup';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/consfig/routeConfig/routeConfig';

import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';

interface avatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = ({ className }: avatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const authData = useSelector(getUserAuthData);
  console.log('Auth Data:', authData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  console.log(isAdmin, isManager);
  const isAdminOrManager = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <MyDropdown
      className={classNames(classes.avatarDropdown, {}, [className])}
      direction="down left"
      trigger={<Avatar size={40} src={authData.avatar} alt={authData.username} />}
      items={[
        ...(isAdminOrManager
          ? [
              {
                onClick: () => {},
                content: t('AdminPanel'),
                href: getRouteAdminPanel()
              }
            ]
          : []),
        {
          onClick: onLogout,
          content: t('logout')
        },
        {
          onClick: () => {},
          content: t('ProfilePage'),
          href: getRouteProfile(authData.id)
        }
      ]}
    />
  );
};
