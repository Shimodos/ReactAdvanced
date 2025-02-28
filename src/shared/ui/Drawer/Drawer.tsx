import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Drawer.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

const ANIMATION_DILAY = 300;
interface DrawerProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();

  const { isClosing, isMounted, Close } = useModal({
    isOpen,
    onClose,
    animationDaly: ANIMATION_DILAY
  });

  const mods: Mods = {
    [classes.open]: isOpen,
    [classes.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <div className={classNames(classes.Drawer, mods, [className, theme, 'app_drawer'])}>
      <Overlay onClick={Close} className={classes.overlay} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};
