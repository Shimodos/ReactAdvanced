import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlePageFilters.module.scss';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { useCallback } from 'react';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlePageSlice';
import { getArticlePageView } from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

interface ArticlePageFiltersProps {
  className?: string;
}
export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={classNames(classes.ArticlePageFilters, {}, [className])}>
      <div className={classes.sortWrapper}>
        <Select label={t('SortBy')} />
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input placeholder={t('Search')} />
      </Card>
    </div>
  );
};
