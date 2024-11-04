import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleVirw } from 'entities/Article/models/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articcle: Article[];
  isLoading: boolean;
  view?: ArticleVirw;
}
export const ArticleList = (props: ArticleListProps) => {
  const { className, articcle, isLoading, view = ArticleVirw.GRID } = props;
  // const { t } = useTranslation();

  const renderArtcilce = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={classes.card} />;
  };

  return (
    <div className={classNames(classes.ArticleList, {}, [className])}>
      {articcle.length > 0 ? articcle.map(renderArtcilce) : null}
    </div>
  );
};
