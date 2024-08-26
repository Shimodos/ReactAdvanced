import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

import MaineIcone from 'shared/assets/icons/maine.svg';
import AboutIcone from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = (): void => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sodebar-toggle"
        onClick={handleToggle}
        className={classes.colapsBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <div>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={classes.item}>
            <MaineIcone className={classes.icon} />
            <span className={classes.link}>{t('Main')}</span>
          </AppLink>
        </div>

        <div>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={classes.item}>
            <AboutIcone className={classes.icon} />
            <span className={classes.link}>{t('About')}</span>
          </AppLink>
        </div>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
