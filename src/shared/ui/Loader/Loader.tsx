import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
    <div className={classNames('lds-dual-ring', {}, [className])}>
      <div></div>
    </div>
  );
};
