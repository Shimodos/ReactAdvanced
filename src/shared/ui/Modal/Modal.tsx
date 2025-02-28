import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';
import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

const ANIMATION_DILAY = 300;
interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { isClosing, isMounted, Close } = useModal({
    isOpen,
    onClose,
    animationDaly: ANIMATION_DILAY
  });
  const { theme } = useTheme();

  const mods: Mods = {
    [classes.open]: isOpen,
    [classes.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={Close} />

        <div className={classes.content}>{children}</div>
      </div>
    </Portal>
  );
};
