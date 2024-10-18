import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Code.module.scss';
import React, { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface CodeProps {
  className?: string;
  children: ReactNode;
}
export const Code = ({ className, children }: CodeProps) => {
  const { t } = useTranslation();

  return (
    <pre className={classNames(classes.Code, {}, [className])}>
      <Button className={classes.copyBtn}>{t('Copy')}</Button>
      <code>{children}</code>
    </pre>
  );
};
