import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlePageFilters.module.scss';
import {
  ArticleSortField,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector
} from 'entities/Article';
import { useCallback } from 'react';
import { articlesPageActions } from 'pages/ArticlePage/model/slices/ArticlePageSlice';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageView,
  getArticlePageType
} from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from 'shared/lib/hooks/onDebounce/onDebounce';
import { ArticleType } from 'entities/Article/models/types/article';

interface ArticlePageFiltersProps {
  className?: string;
}
export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticleList({ replace: true }));
  }, [dispatch]);

  const drbounceFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
      dispatch(articlesPageActions.setPage(1));
      drbounceFetchData();
    },
    [dispatch, drbounceFetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      drbounceFetchData();
    },
    [dispatch, drbounceFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      drbounceFetchData();
    },
    [dispatch, drbounceFetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      drbounceFetchData();
    },
    [dispatch, drbounceFetchData]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(classes.ArticlePageFilters, {}, [className])}>
      <div className={classes.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onChangeView={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input onChange={onChangeSearch} value={search} placeholder={t('Search')} />
      </Card>

      <ArticleTypeTabs value={type} onChangeType={onChangeType} className={classes.tabs} />
    </div>
  );
};
