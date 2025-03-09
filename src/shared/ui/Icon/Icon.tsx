import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Icon.module.scss';
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const Icon = (props: IconProps) => {
  const { className, Svg, ...otherProps } = props;
  return <Svg className={classNames(classes.Icon, {}, [className])} {...otherProps} />;
};
