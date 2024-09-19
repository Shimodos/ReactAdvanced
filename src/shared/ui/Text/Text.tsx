import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
}
export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = ThemeText.PRIMARY } = props;
  return (
    <div className={classNames(classes.Text, { [classes[theme]]: true }, [className])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

Text.displayName = 'Text';
