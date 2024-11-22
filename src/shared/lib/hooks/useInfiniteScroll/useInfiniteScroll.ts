import { MutableRefObject, useEffect, useRef } from 'react';

export interface InfiniteScrollProps {
  callback: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ triggerRef, callback, wrapperRef }: InfiniteScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver(([enty]) => {
      console.log('enty');
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef]);
}
