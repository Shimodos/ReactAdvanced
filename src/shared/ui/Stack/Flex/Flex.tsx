import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40';

const justifyMap: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween
};

const alignMap: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd
};

const directionMap: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn
};

const gapMap: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  12: classes.gap12,
  16: classes.gap16,
  20: classes.gap20,
  24: classes.gap24,
  28: classes.gap28,
  32: classes.gap32,
  36: classes.gap36,
  40: classes.gap40
};

export interface FlexProps {
  className?: string;
  children: React.ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}
export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max
  } = props;

  const classess = [
    className,
    justifyMap[justify],
    alignMap[align],
    directionMap[direction],
    gap && gapMap[gap]
  ];

  const mods: Mods = {
    [classes.max]: max
  };

  return <div className={classNames(classes.Flex, mods, classess)}>{children}</div>;
};
