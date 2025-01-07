import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum AlignText {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
  align?: AlignText;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = ThemeText.PRIMARY,
    align = AlignText.LEFT,
    size = TextSize.M
  } = props;

  const HeaderTag = mapSizeHeaderTag[size];

  const mods = {
    [classes[align]]: true,
    [classes[theme]]: true,
    [classes[size]]: true
  };

  return (
    <div className={classNames(classes.Text, mods, [className])}>
      {title && <HeaderTag className={classes.title}>{title}</HeaderTag>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

Text.displayName = 'Text';
