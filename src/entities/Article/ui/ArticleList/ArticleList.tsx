import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from 'entities/Article/models/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSceleton';

interface ArticleListProps {
  className?: string;
  articcle: Article[];
  isLoading: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
    ));

export const ArticleList = (props: ArticleListProps) => {
  const { className, articcle, isLoading, view = ArticleView.GRID } = props;
  const { t } = useTranslation();

  // if (isLoading) {
  //   return (
  //     <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
  //       {new Array(view === ArticleView.LIST ? 3 : 9).fill(0).map((_, index) => (
  //         <ArticleListItemSkeleton view={view} className={classes.card} key={index} />
  //       ))}
  //     </div>
  //   );
  // }

  const renderArtcilce = (article: Article) => {
    return (
      <ArticleListItem article={article} view={view} className={classes.card} key={article.id} />
    );
  };

  return (
    <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
      {articcle.length > 0 ? articcle.map(renderArtcilce) : null}
      {isLoading ? getSkeletons(view) : null}
    </div>
  );
};
