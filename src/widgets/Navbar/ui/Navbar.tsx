import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>/</div>
    </div>
  );
};
