import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Drawer.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [classes.opened]: isOpen
  };

  return (
    <div className={classNames(classes.Drawer, mods, [className, theme, 'app_drawer'])}>
      <Overlay onClick={onClose} className={classes.overlay} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};
