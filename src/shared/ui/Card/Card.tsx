import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(classes.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
