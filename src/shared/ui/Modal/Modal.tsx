import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const ANIMATION_DILAY = 300;

  const handelClose = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
        setIsClosing(false);
      }, ANIMATION_DILAY);
    }
  }, [onClose]);

  const onKeydDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        handelClose();
      }
    },
    [handelClose]
  );

  // const onContentClick = (e: React.MouseEvent<HTMLDivElement>): void => {
  //   e.stopPropagation();
  // };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydDown);
    };
  }, [isOpen, onKeydDown]);

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
        <Overlay onClick={handelClose} />

        <div className={classes.content}>{children}</div>
      </div>
    </Portal>
  );
};
