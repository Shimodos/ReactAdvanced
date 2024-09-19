import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import loginByUsername from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSucces?: () => void;
}

const intialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSucces: onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLogged = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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

  // const onLoginClick = useCallback(async () => {
  //   const result = await dispatch(loginByUsername({ username, password }));
  //   if (result.meta.requestStatus === 'fulfilled') {
  //     onSuccess();
  //   }
  // }, [onSuccess, dispatch, username, password]);

  const onLoginClick = useCallback(() => {
    const loginAction = async () => {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess?.();
      }
    };
    loginAction();
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoder remmoveAfterUnmount={true} reducers={intialReducers}>
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
    </DynamicModuleLoder>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
