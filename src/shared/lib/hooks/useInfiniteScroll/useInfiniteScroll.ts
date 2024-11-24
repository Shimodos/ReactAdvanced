import { MutableRefObject, useEffect, useRef } from 'react';

export interface InfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ triggerRef, callback, wrapperRef }: InfiniteScrollProps) {
  const observer: IntersectionObserver | null = null;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1
      };

      observer = new IntersectionObserver(([enty]) => {
        if (enty.isIntersecting) {
          callback();
          console.log('enty');
        }
      }, options);

      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
