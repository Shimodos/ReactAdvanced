import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';
import React from 'react';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={classNames(classes.Icon, {}, [className])} />;
};
