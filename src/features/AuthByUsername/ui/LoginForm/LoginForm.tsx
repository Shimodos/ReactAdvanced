import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input className={classes.input} type="text" placeholder={t('username')} autofocus={true} />
      <Input className={classes.input} type="password" placeholder={t('password')} />
      <Button className={classes.loginBtn}>{t('login')}</Button>
    </div>
  );
};
