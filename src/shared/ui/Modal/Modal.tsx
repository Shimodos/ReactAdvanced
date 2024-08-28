import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Modal = (props: ModalProps): JSX.Element => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>(null);

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

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydDown);
    };
  }, [isOpen, onKeydDown]);

  const mods: Record<string, boolean> = {
    [classes.open]: isOpen,
    [classes.isClosing]: isClosing
  };

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className])}>
        <div className={classes.overlay} onClick={handelClose}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
