import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import { MyDropdown, Popover } from 'shared/ui/Popup';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  console.log('Auth Data:', authData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const isOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  console.log(isAdmin, isManager);
  const isAdminOrManager = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(classes.navbar, {}, [className])}>
        <Text className={classes.appName} title={t('AdvApp')} theme={ThemeText.INVERTED} />
        <AppLink
          to={RoutePath.article_create}
          className={classes.createLinks}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('CreateNewArticle')}
        </AppLink>
        <HStack gap={'16'} className={classes.actions}>
          <Popover
            trigger={
              <Button theme={ThemeButton.CLEAR}>
                <Icon Svg={NotificationIcon} />
              </Button>
            }
          >
            123
          </Popover>
          <Button theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} />
          </Button>
          <MyDropdown
            direction="down left"
            trigger={<Avatar size={40} src={authData.avatar} alt={authData.username} />}
            items={[
              ...(isAdminOrManager
                ? [
                    {
                      onClick: () => {},
                      content: t('AdminPanel'),
                      href: RoutePath.admin_panel
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
                href: RoutePath.profile + authData.id
              }
            ]}
          />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(classes.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        className={classes.links}
        onClick={isOpenModal}
      >
        {t('login')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});

Navbar.displayName = 'Navbar';
