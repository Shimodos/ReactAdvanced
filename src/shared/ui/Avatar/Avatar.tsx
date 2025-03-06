import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';
import { useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}
export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size } = props;

  const style = useMemo(() => {
    return {
      width: size || 100,
      height: size || 100
    };
  }, [size]);
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(classes.Avatar, {}, [className])}
    />
  );
};
