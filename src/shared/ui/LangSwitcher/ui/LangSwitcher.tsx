import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  };

  return (
    <Button
      className={classNames(classes.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={changeLanguage}
    >
      {t(short ? 'ShortLang' : 'Lang')}
    </Button>
  );
});

LangSwitcher.displayName = 'LangSwitcher';
