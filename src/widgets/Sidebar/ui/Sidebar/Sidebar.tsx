import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <button onClick={handleToggle}>TOGLE</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
