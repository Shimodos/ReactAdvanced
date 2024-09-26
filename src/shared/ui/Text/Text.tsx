import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum AlignText {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
  align?: AlignText;
}
export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = ThemeText.PRIMARY, align = AlignText.LEFT } = props;

  const mods = {
    [classes[align]]: true,
    [classes[theme]]: true
  };

  return (
    <div className={classNames(classes.Text, mods, [className])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

Text.displayName = 'Text';
