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
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1
      };

      observer = new IntersectionObserver(([enty]) => {
        if (enty.isIntersecting) {
          callback();
          console.log('enty');
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
