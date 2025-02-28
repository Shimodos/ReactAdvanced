import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationDaly?: number;
}

export const useModal = (props: UseModalProps) => {
  const { isOpen, onClose, animationDaly = 300 } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const Close = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
        setIsClosing(false);
      }, animationDaly);
    }
  }, [onClose, animationDaly]);

  const onKeydDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        Close();
      }
    },
    [Close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeydDown);
    };
  }, [isOpen, onKeydDown]);

  return { isClosing, isMounted, Close };
};
