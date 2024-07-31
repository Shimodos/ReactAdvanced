import { FC } from 'react';
import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(classes.Button, { [classes[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
