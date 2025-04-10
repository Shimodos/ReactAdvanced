import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: React.ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, { [classes[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

AppLink.displayName = 'AppLink';
