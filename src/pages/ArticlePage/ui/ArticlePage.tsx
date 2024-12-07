import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlePage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import {
  articlePageReducer,
  articlesPageActions,
  getArticle
} from '../model/slices/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  // getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from '../model/selectors/articlePageSelectors';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlePage: articlePageReducer
};

const ArticlePage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  // const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  // const onChangeView = useCallback(
  //   (view: ArticleView) => {
  //     dispatch(articlesPageActions.setView(view));
  //   },
  //   [dispatch]
  // );

  const onLoadingMore = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadingMore}
        className={classNames(classes.ArticlePage, {}, [className])}
      >
        {/* <ArticleViewSelector view={view} onChangeView={onChangeView} /> */}
        <ArticlePageFilters />
        <ArticleList isLoading={isLoading} view={view} articcle={articles} />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticlePage;
