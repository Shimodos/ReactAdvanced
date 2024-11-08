import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleVirw } from 'entities/Article/models/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSceleton';

interface ArticleListProps {
  className?: string;
  articcle: Article[];
  isLoading: boolean;
  view?: ArticleVirw;
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, articcle, isLoading, view = ArticleVirw.GRID } = props;
  // const { t } = useTranslation();

  if (!isLoading) {
    return (
      <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
        {new Array(view === ArticleVirw.LIST ? 3 : 9).fill(0).map((_, index) => (
          <ArticleListItemSkeleton view={view} className={classes.card} key={index} />
        ))}
      </div>
    );
  }

  const renderArtcilce = (article: Article) => {
    return (
      <ArticleListItem article={article} view={view} className={classes.card} key={article.id} />
    );
  };

  return (
    <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
      {articcle.length > 0 ? articcle.map(renderArtcilce) : null}
    </div>
  );
};
