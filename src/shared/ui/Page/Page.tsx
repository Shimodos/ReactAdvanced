import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Page.module.scss';
import { MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string;
  children?: React.ReactNode;
  onScrollEnd?: () => void;
}
export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: () => {
      onScrollEnd?.();
    }
  });

  return (
    <section ref={wrapperRef} className={classNames(classes.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
