import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import MyDropdown from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const isOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
        <MyDropdown
          direction="down left"
          trigger={<Avatar size={40} src={authData.avatar} alt={authData.username} />}
          className={classes.dropdown}
          items={[
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
