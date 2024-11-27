import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Page.module.scss';
import { MutableRefObject, useRef, UIEvent } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, UIActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';

interface PageProps {
  className?: string;
  children?: React.ReactNode;
  onScrollEnd?: () => void;
}
export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: () => {
      onScrollEnd?.();
    }
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    dispatch(
      UIActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop
      })
    );
  };

  return (
    <section
      ref={wrapperRef}
      className={classNames(classes.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
