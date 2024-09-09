import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/gettLoginState';
import loginByUsername from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLogged } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title={t('Login form')} theme={ThemeText.PRIMARY} />
      {error && <Text text={t('loginError')} theme={ThemeText.ERROR} />}
      <Input
        className={classes.input}
        type="text"
        placeholder={t('username')}
        autofocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={classes.input}
        type="password"
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={classes.loginBtn}
        onClick={onLoginClick}
        disabled={isLogged}
      >
        {t('login')}
      </Button>
    </div>
  );
});

LoginForm.displayName = 'LoginForm';
