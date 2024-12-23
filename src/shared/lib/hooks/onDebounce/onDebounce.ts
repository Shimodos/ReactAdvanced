import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: unknown[]) => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  return useCallback(
    (...args: unknown[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
