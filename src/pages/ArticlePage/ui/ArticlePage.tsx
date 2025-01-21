import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlePage.module.scss';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { articlePageReducer } from '../model/slices/ArticlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useCallback } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfinitList } from './ArticleInfinitList/ArticleInfinitList';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlePage: articlePageReducer
};

const ArticlePage = ({ className }: ArticleDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadingMore = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadingMore}
        className={classNames(classes.ArticlePage, {}, [className])}
      >
        <ArticlePageFilters />
        <ArticleInfinitList />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticlePage;
