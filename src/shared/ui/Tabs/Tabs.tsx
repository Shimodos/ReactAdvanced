import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { useCallback } from 'react';

export interface TabItem {
  value: string;
  constent: React.ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (value: string) => void;
}

export const Tabs = (props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab.value);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(classes.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          key={tab.value}
          className={classes.tab}
          onClick={clickHandler(tab)}
        >
          {tab.constent}
        </Card>
      ))}
    </div>
  );
};
