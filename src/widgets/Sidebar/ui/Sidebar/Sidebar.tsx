import React, { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';

import { getSidebarItems } from '../../module/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);
  const handleToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemList]
  );

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
      <div className={classes.items}>{itemsList}</div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
