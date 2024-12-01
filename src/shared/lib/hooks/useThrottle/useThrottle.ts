import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const thottleReff = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!thottleReff.current) {
        thottleReff.current = true;
        callback(...(args as unknown[]));

        setTimeout(() => {
          thottleReff.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
}
