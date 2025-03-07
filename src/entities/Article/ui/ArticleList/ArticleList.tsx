import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../models/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSceleton';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
  className?: string;
  articcle: Article[];
  isLoading: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
    ));

export const ArticleList = (props: ArticleListProps) => {
  const { className, articcle, isLoading, target, view = ArticleView.GRID } = props;
  const { t } = useTranslation();

  if (!isLoading && articcle.length === 0) {
    return (
      <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
        <Text size={TextSize.L} title={t('NotFoundArticle')} />
      </div>
    );
  }

  return (
    <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
      {articcle.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          className={classes.card}
          target={target}
          key={item.id}
        />
      ))}
      {isLoading ? getSkeletons(view) : null}
    </div>
  );
};
