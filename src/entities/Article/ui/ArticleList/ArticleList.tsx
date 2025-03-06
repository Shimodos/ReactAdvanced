import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../models/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSceleton';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';

interface ArticleListProps {
  className?: string;
  articcle: Article[];
  isLoading: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
    ));

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articcle,
    isLoading,
    target,
    virtualized = true,
    view = ArticleView.GRID
  } = props;
  const { t } = useTranslation();

  const isBig = view === ArticleView.LIST;

  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articcle.length : Math.ceil(articcle.length / itemsPerRow);

  const rowRenderer = ({ index, key, style, isScrolling }: ListRowProps) => {
    const item = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articcle.length);

    for (let i = fromIndex; i < toIndex; i++) {
      item.push(
        <ArticleListItem
          article={articcle[index]}
          view={view}
          className={classes.card}
          target={target}
          key={`str${i}`}
        />
      );
    }
    return (
      <div key={key} style={style}>
        {item}
      </div>
    );
  };

  if (!isLoading && articcle.length === 0) {
    return (
      <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
        <Text size={TextSize.L} title={t('NotFoundArticle')} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById('PAGE_ID') as Element}
      onScroll={() => {
        console.log('scroll');
      }}
    >
      {({ height, width, registerChild, isScrolling, scrollTop, onChildScroll }) => (
        <div
          ref={registerChild as (instance: HTMLDivElement | null) => void}
          className={classNames(classes.ArticleList, {}, [className, classes[view]])}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 80 : 500}
              autoHeight
              isScrolling={isScrolling}
              scrollTop={scrollTop}
              onScroll={onChildScroll}
            />
          ) : (
            articcle.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                className={classes.card}
                target={target}
                key={item.id}
              />
            ))
          )}
          {isLoading ? getSkeletons(view) : null}
        </div>
      )}
    </WindowScroller>
  );
};
