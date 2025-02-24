import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}
export const Overlay = (porps: OverlayProps) => {
  const { className, onClick } = porps;
  return <div onClick={onClick} className={classNames(classes.Overlay, {}, [className])} />;
};
